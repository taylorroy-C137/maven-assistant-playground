import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getPageTemplate } from "@/lib/page-templates";
import { DESIGNERS } from "@/lib/prototype-types";

const designerSet = new Set<string>(DESIGNERS);

export async function GET() {
  const appDir = path.join(process.cwd(), "src", "app");
  const results: {
    slug: string;
    designer: string;
    title: string;
    description: string;
    type: string;
    label: string;
    createdAt: string;
    isTemplate: boolean;
  }[] = [];

  for (const designer of DESIGNERS) {
    const designerDir = path.join(appDir, designer);
    if (!fs.existsSync(designerDir)) continue;

    const entries = fs.readdirSync(designerDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const metaPath = path.join(designerDir, entry.name, "metadata.json");
      if (!fs.existsSync(metaPath)) continue;

      try {
        const raw = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
        results.push({
          slug: entry.name,
          designer,
          title: raw.title || entry.name,
          description: raw.description || "",
          type: raw.type || "screen",
          label: raw.label || "Consumer",
          createdAt: raw.createdAt || "2026-01-01",
          isTemplate: raw.isTemplate || false,
        });
      } catch {
        // skip malformed metadata
      }
    }
  }

  return NextResponse.json(results);
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "Prototype creation is only available in development mode. Run npm run dev locally." },
      { status: 403 },
    );
  }

  const { name, description, designer, template } = await request.json();

  if (!name || !designer) {
    return NextResponse.json(
      { error: "Name and designer are required." },
      { status: 400 },
    );
  }

  const slug = toSlug(name);
  const protoDir = path.join(process.cwd(), "src", "app", designer, slug);

  if (fs.existsSync(protoDir)) {
    return NextResponse.json(
      { error: `Prototype "${slug}" already exists for ${designer}.` },
      { status: 409 },
    );
  }

  fs.mkdirSync(protoDir, { recursive: true });

  const metadata = {
    title: name,
    description: description || "",
    type: template?.startsWith("consumer") ? "screen" : "chat",
    label: template?.startsWith("consumer") ? "Consumer" : "Maven Assistant",
    createdAt: new Date().toISOString().split("T")[0],
  };

  fs.writeFileSync(
    path.join(protoDir, "metadata.json"),
    JSON.stringify(metadata, null, 2) + "\n",
  );

  const pageSource = getPageTemplate(template || "blank", slug, name);
  fs.writeFileSync(path.join(protoDir, "page.tsx"), pageSource);

  return NextResponse.json({
    ok: true,
    url: `/${designer}/${slug}`,
    slug,
    designer,
  });
}
