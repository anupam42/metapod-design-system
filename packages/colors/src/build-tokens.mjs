import fs from "fs";
import path from "path";
import * as ColorsModule from "./colors.ts";
import { semanticTokens } from "./semantic-tokens.ts";
import { darkThemeOverrides } from "./dark-theme.ts";

const Colors = ColorsModule.Colors;

const dist = path.join(process.cwd(), "src");

function resolveToken(ref) {
  if (!ref.startsWith("color")) return ref;
  const [, palette, shade] = ref.split(".");
  return Colors[palette][shade];
}

function flatten(obj, prefix = []) {
  let out = {};
  for (const key in obj) {
    const value = obj[key];
    const name = [...prefix, key];

    if (typeof value === "string") {
      out[name.join("-")] = resolveToken(value);
    } else {
      out = { ...out, ...flatten(value, name) };
    }
  }
  return out;
}

// Palette variables
const paletteVars = {};
for (const [palette, shades] of Object.entries(Colors)) {
  for (const [shade, hex] of Object.entries(shades)) {
    paletteVars[`color-${palette}-${shade}`] = hex;
  }
}

// Semantic variables
const semanticVars = flatten(semanticTokens);

// Dark theme variables
const darkVars = flatten(darkThemeOverrides);

// CSS Output
const css = [
  ":root {",
  ...Object.entries({ ...paletteVars, ...semanticVars }).map(
    ([k, v]) => `  --ds-${k}: ${v};`
  ),
  "}"
].join("\n");

const cssDark = [
  `[data-theme="dark"] {`,
  ...Object.entries(darkVars).map(
    ([k, v]) => `  --ds-${k}: ${v};`
  ),
  "}"
].join("\n");

fs.writeFileSync(path.join(dist, "tokens.css"), css);
fs.writeFileSync(path.join(dist, "tokens.dark.css"), cssDark);

// SCSS Output
const scss = Object.entries({ ...paletteVars, ...semanticVars })
  .map(([k, v]) => `$ds-${k}: ${v};`)
  .join("\n");

fs.writeFileSync(path.join(dist, "tokens.scss"), scss);

// TS Output
const ts = Object.entries({ ...paletteVars, ...semanticVars })
  .map(([k, v]) => `export const DS_${k.replace(/-/g, "_").toUpperCase()} = "${v}";`)
  .join("\n");

fs.writeFileSync(path.join(dist, "tokens.ts"), ts);

console.log("✔ Tokens generated successfully!");
