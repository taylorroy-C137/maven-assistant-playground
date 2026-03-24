import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

  return NextResponse.json({
    ok: true,
    url: `/${designer}/${slug}`,
    slug,
    designer,
  });
}
