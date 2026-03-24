# Extraction Reference

## Node tree extraction snippet

Call `figma_execute` with this code. Replace `TARGET_NODE_ID` with the actual
node ID before executing.

```javascript
// IMPORTANT: Uses async Figma Plugin API (getNodeByIdAsync, getMainComponentAsync)
const node = await figma.getNodeByIdAsync("TARGET_NODE_ID");
if (!node) return { error: "Node not found" };

function rgbToHex(r, g, b) {
  const to255 = (v) => Math.round(v * 255);
  return "#" + [to255(r), to255(g), to255(b)]
    .map((c) => c.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

function extractFill(paints) {
  if (!paints || !paints.length) return null;
  const p = paints.find((p) => p.visible !== false && p.type === "SOLID");
  if (!p) return null;
  return { hex: rgbToHex(p.color.r, p.color.g, p.color.b), opacity: p.opacity ?? 1 };
}

function extractFont(n) {
  if (n.type !== "TEXT") return null;
  return {
    family: n.fontName !== figma.mixed ? n.fontName.family : "mixed",
    size: n.fontSize !== figma.mixed ? n.fontSize : "mixed",
    weight: n.fontWeight !== figma.mixed ? n.fontWeight : "mixed",
    lineHeight: n.lineHeight !== figma.mixed
      ? (n.lineHeight.unit === "AUTO" ? "auto" : n.lineHeight.value)
      : "mixed",
    letterSpacing: n.letterSpacing !== figma.mixed ? n.letterSpacing.value : 0,
  };
}

async function walk(n, depth) {
  if (depth > 8) return { name: n.name, type: n.type, truncated: true };

  const base = {
    name: n.name,
    type: n.type,
    visible: n.visible,
    w: Math.round(n.width),
    h: Math.round(n.height),
  };

  if (n.type === "INSTANCE") {
    const mc = await n.getMainComponentAsync();
    if (mc) {
      base.componentName = mc.name;
      base.componentSetName = mc.parent?.type === "COMPONENT_SET"
        ? mc.parent.name : null;
    }
  }

  if ("fills" in n) base.fill = extractFill(n.fills);
  if ("strokes" in n && n.strokes.length) base.stroke = extractFill(n.strokes);
  if ("cornerRadius" in n && n.cornerRadius !== figma.mixed) base.radius = n.cornerRadius;

  if ("layoutMode" in n && n.layoutMode !== "NONE") {
    base.layout = {
      direction: n.layoutMode,
      gap: n.itemSpacing,
      paddingTop: n.paddingTop,
      paddingRight: n.paddingRight,
      paddingBottom: n.paddingBottom,
      paddingLeft: n.paddingLeft,
      primaryAlign: n.primaryAxisAlignItems,
      counterAlign: n.counterAxisAlignItems,
    };
  }

  if (n.type === "TEXT") {
    base.text = n.characters;
    base.font = extractFont(n);
    base.fill = extractFill(n.fills);
  }

  if ("children" in n) {
    const visible = n.children.filter((c) => c.visible);
    base.children = [];
    for (const c of visible) {
      base.children.push(await walk(c, depth + 1));
    }
  }

  return base;
}

return await walk(node, 0);
```

## Component mapping table

Match Figma nodes to playground components using these rules. Check in order:
component name first, then structural pattern.

### By Figma component name

| Figma component name (contains) | Consumer (Freya) | Enterprise (MDL) |
|----------------------------------|------------------|-------------------|
| `Button`, `TextButton` | `FreyaButton` | `MdlButton` |
| `Badge`, `Squared badge` | `FreyaBadge` | `MdlBadge` |
| `TextInput`, `SearchInput` | — | `MdlTextInput` |
| `TextArea` | — | `MdlTextInput` |
| `Alert`, `Toast` | — | `MdlAlert` |
| `Avatar` | — | `MdlAvatar` |
| `Modal`, `BottomSheet` | — | `MdlModal` |
| `Header` | `FreyaNavBar` | `MdlHeader` |
| `Footer` | `FreyaFooter` | `MdlFooter` |
| `Tab Item`, `Segmented Control` | `FreyaTabBar` | — |
| `List item`, `Checklist` | — | `MdlListItem` |
| `card-content`, `card-appointment` | `FreyaContentCard` / `FreyaAppointmentCard` | `MdlCard` |
| `card-benefits`, `Tile` | `FreyaTaskCard` | `MdlCard` |
| `Accordion` | `FreyaAccordion` | — |
| `Switch`, `Checkbox`, `Radio` | inline custom | inline custom |

### By structural pattern

| Pattern | Component |
|---------|-----------|
| Top bar with logo + title | `FreyaNavBar` or `MdlHeader` |
| Horizontal tab row | `FreyaTabBar` |
| Card with overline + badge + title + description + CTA | `FreyaTaskCard` |
| Card with provider name + specialty + date | `FreyaAppointmentCard` |
| Card with badge + subject tag + title + time | `FreyaContentCard` |
| Card with icon + title + subtitle + CTA | `FreyaSupportCard` |
| Horizontal scroll container with dot indicators | `FreyaCarousel` |
| Section title with optional "View all" link | `FreyaSectionHeader` |
| Row with label + value + chevron | `MdlListItem` |
| Circle with initials or image | `MdlAvatar` |
| Banner with icon + title + message | `MdlAlert` |
| Bottom bar with "Powered by Maven" | `FreyaFooter` or `MdlFooter` |

## Color-to-token lookup

Map extracted hex values to CSS variable tokens. The agent should normalize hex
to uppercase before matching. If exact match fails, pick the closest semantic
token for the role (text, surface, border, fill).

### Consumer (B2C) tokens

| Hex | Token |
|-----|-------|
| `#191817` | `var(--color-b2c-text-primary)` |
| `#5C5954` | `var(--color-b2c-text-secondary)` |
| `#A6A39E` | `var(--color-b2c-text-tertiary)` |
| `#BAB7B3` | `var(--color-b2c-text-disabled)` |
| `#035748` | `var(--color-b2c-text-link)` |
| `#013126` | `var(--color-b2c-text-link-hover)` |
| `#00826A` | `var(--color-b2c-text-success)` |
| `#DD6A02` | `var(--color-b2c-text-warning)` |
| `#EA2F0D` | `var(--color-b2c-text-error)` |
| `#003D99` | `var(--color-b2c-text-attention)` |
| `#FFFFFF` | `var(--color-b2c-surface-primary)` |
| `#F2F0EC` | `var(--color-b2c-surface-secondary)` |
| `#E9E1D5` | `var(--color-b2c-surface-tertiary)` |
| `#E7FAF3` | `var(--color-b2c-surface-success)` |
| `#FFF5D1` | `var(--color-b2c-surface-warning)` |
| `#FFF0EE` | `var(--color-b2c-surface-error)` |
| `#E5F0FF` | `var(--color-b2c-surface-attention)` |
| `#9BF4C7` | `var(--color-b2c-fill-accent-mint)` |
| `#FEE9CD` | `var(--color-b2c-fill-accent-mango)` |
| `#E3E2E0` | `var(--color-b2c-border-disabled)` |
| `#D2C4AD` | `var(--color-b2c-border-subtle)` |
| `#AA8965` | `var(--color-b2c-icon-natural)` |

### Enterprise (MDL) tokens

| Hex | Token |
|-----|-------|
| `#191817` | `var(--color-enterprise-text-primary)` |
| `#5C5954` | `var(--color-enterprise-text-secondary)` |
| `#A6A39E` | `var(--color-enterprise-text-tertiary)` |
| `#BAB7B3` | `var(--color-enterprise-text-disabled)` |
| `#00826A` | `var(--color-enterprise-text-link)` |
| `#035748` | `var(--color-enterprise-text-link-hover)` |
| `#A41604` | `var(--color-enterprise-text-error)` |
| `#DD6A02` | `var(--color-enterprise-text-warning)` |
| `#003D99` | `var(--color-enterprise-text-attention)` |
| `#FFFFFF` | `var(--color-enterprise-surface-primary)` |
| `#FAF9F7` | `var(--color-enterprise-surface-secondary)` |
| `#F2F0EC` | `var(--color-enterprise-surface-tertiary)` |
| `#013126` | `var(--color-enterprise-surface-brand)` |
| `#E7FAF3` | `var(--color-enterprise-surface-success)` |
| `#FFF5D1` | `var(--color-enterprise-surface-warning)` |
| `#FFF0EE` | `var(--color-enterprise-surface-error)` |
| `#E5F0FF` | `var(--color-enterprise-surface-attention)` |
| `#9BF4C7` | `var(--color-enterprise-fill-accent-mint)` |
| `#FFCCC2` | `var(--color-enterprise-fill-accent-lychee)` |
| `#FEE9CD` | `var(--color-enterprise-fill-accent-mango)` |
| `#EDE6F8` | `var(--color-enterprise-fill-accent-lavender)` |
| `#EDE9E3` | `var(--color-enterprise-fill-button-subtle)` |
| `#E3E2E0` | `var(--color-enterprise-border-disabled)` |
| `#EDE9E3` | `var(--color-enterprise-border-natural)` |
| `#D2C4AD` | `var(--color-enterprise-border-subtle)` |
| `#0066FF` | `var(--color-enterprise-border-attention)` |
| `#AA8965` | `var(--color-enterprise-icon-natural)` |

### Shared font tokens

| Figma font family | Token |
|------------------|-------|
| `Ivar Display` (Consumer context) | `var(--font-family-b2c-emphasis)` |
| `Ivar Display` (Enterprise context) | `var(--font-family-enterprise-emphasis)` |
| `Helvetica Neue` | `var(--font-family-sans)` |
