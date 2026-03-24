---
name: figma-to-prototype
description: >-
  Turn Figma designs into coded prototypes using existing Maven components and
  tokens. Use when designer pastes a Figma URL, says "build this frame", "turn
  this into code", mentions Figma, or selects a node in the Figma MCP bridge.
---

# Figma to Prototype

Convert a Figma frame into a working prototype using the playground's existing
components (Freya, Enterprise) and design tokens. Never generate raw HTML/CSS
when a component exists.

## Detect the input method

| Signal | Method | First step |
|--------|--------|------------|
| URL containing `figma.com/design` with `node-id` | **Frame URL** | `figma_navigate` to the URL |
| Designer says "build this" / "code this" with no URL | **Selected node** | `figma_get_selection` |
| Screenshot or text description, no Figma link | **Visual / description** | Skip extraction, generate from context |

## Extraction workflow (Figma MCP)

Run these steps when working from a Figma URL or selection:

### 1. Navigate (URL only)

```
figma_navigate  url: <the Figma URL>
```

### 2. Get the target node

**From URL:** Parse `node-id` from the query string. Convert URL-encoded format
(`123-456`) to Figma format (`123:456`).

**From selection:** Call `figma_get_selection` and use the first selected node's
`id`.

### 3. Capture a screenshot

```
figma_capture_screenshot  nodeId: "<nodeId>"  scale: 2
```

Keep this image as visual reference throughout code generation.

### 4. Extract the node tree

Call `figma_execute` with the extraction snippet from
[extraction.md](extraction.md). Replace `TARGET_NODE_ID` in the snippet with
the actual node ID before executing.

**Important:** The snippet uses async Figma Plugin API methods
(`figma.getNodeByIdAsync`, `node.getMainComponentAsync`). Do NOT use the
synchronous versions (`figma.getNodeById`, `node.mainComponent`) — they will
throw errors in modern Figma files with dynamic page access.

This returns a JSON tree with: node type, name, layout direction, padding, gap,
fills (hex), font info, text content, dimensions, and children. For INSTANCE
nodes it also includes `componentName` and `componentSetName` from the main
component.

### 5. Map to components

Use the component mapping table in [extraction.md](extraction.md) to decide
which playground component each Figma node should become. Match by:

1. Figma component name (from `mainComponent.name` in instances)
2. Node structure patterns (e.g. frame with icon + text + chevron → `MdlListItem`)
3. Visual role (header bar → `MdlHeader` / `FreyaNavBar`)

### 6. Determine the design system

| Figma file / context | Shell | Components | Token prefix |
|---------------------|-------|------------|--------------|
| Freya B2C / Consumer flows | `ScreenShell` | `Freya*` | `b2c` |
| Maven Design Language / Enterprise | `EnterpriseShell` | `Mdl*` | `enterprise` |
| Chat / conversation | `ChatShell` | Chat components | `maven` |

If unclear, ask the designer which design system to use.

### 7. Generate the page

Create or update `src/app/{designer}/{slug}/page.tsx`. Follow these rules
strictly:

**File structure:**
```tsx
"use client";

// Shell import
import { EnterpriseShell } from "@/components/screen/EnterpriseShell";
// OR: import { ScreenShell } from "@/components/screen/ScreenShell";

// Component imports from barrel file
import { MdlHeader, MdlCard, MdlButton, ... } from "@/components/enterprise";
// OR: import { FreyaNavBar, FreyaTabBar, ... } from "@/components/freya";

export default function PageName() {
  return (
    <Shell>
      {/* components and layout here */}
    </Shell>
  );
}
```

**Token enforcement (critical):**
- NEVER use hex colors. Always use `var(--color-{prefix}-*)` tokens.
- Use the color-to-token lookup in [extraction.md](extraction.md) to convert
  extracted hex values to the correct token.
- If a hex value has no matching token, pick the closest semantic token.
- Headings use `fontFamily: "var(--font-family-{prefix}-emphasis)"`.
- Body text inherits from the shell, no explicit font needed.

**Component priority:**
1. Use an existing `Freya*` or `Mdl*` component if one matches the element.
2. Use inline styles with tokens for custom layout only when no component fits.
3. Preserve the Figma frame's layout direction, padding, and gap values.

### 8. Verify

After generating code:
1. Open `http://localhost:3000/{designer}/{slug}` in the browser.
2. Compare side-by-side with the Figma screenshot from step 3.
3. Check: layout direction, spacing, colors, typography, component usage.
4. Fix any discrepancies and re-check.

## Quick reference

### Consumer (Freya) components
`FreyaNavBar`, `FreyaTabBar`, `FreyaButton`, `FreyaBadge`, `FreyaTaskCard`,
`FreyaAppointmentCard`, `FreyaContentCard`, `FreyaSupportCard`,
`FreyaAccordion`, `FreyaSectionHeader`, `FreyaCarousel`, `FreyaFooter`

### Enterprise (MDL) components
`MdlButton`, `MdlTextInput`, `MdlBadge`, `MdlCard`, `MdlAlert`,
`MdlHeader`, `MdlFooter`, `MdlAvatar`, `MdlListItem`, `MdlModal`

### Full token reference and component rules
See [prototype-playground.mdc](../../rules/prototype-playground.mdc)

### Extraction snippet and mapping tables
See [extraction.md](extraction.md)
