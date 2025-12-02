import fs from 'fs';
import path from 'path';

// Import palettes + semantic system
import { Colors } from "./colors.js";
import { lightTheme } from "./light-theme.js";
import { darkThemeOverrides } from "./dark-theme.js";

// ---------- Helper: resolve "color.x.y" to HEX ----------
function resolveColor(ref) {
  if (!ref.startsWith("color.")) return ref;

  // Extract: color.lucario.500
  const [, palette, shade] = ref.split(".");

  return Colors[palette]?.[shade] ?? ref;
}

// ---------- Helper: flatten theme object ----------
function flattenTheme(obj, prefix = "") {
  let result = {};

  for (const key of Object.keys(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (typeof obj[key] === "object") {
      Object.assign(result, flattenTheme(obj[key], newKey));
    } else {
      result[newKey] = resolveColor(obj[key]);
    }
  }
  return result;
}

// ---------- Generate Light Theme ----------
function generateLightCSS() {
  const flat = flattenTheme(lightTheme);

  let css = `:root {\n`;
  for (const key of Object.keys(flat)) {
    css += `  --ds-${key}: ${flat[key]};\n`;
  }
  css += `}\n`;

  return css;
}

// ---------- Generate Dark Theme ----------
function generateDarkCSS() {
  // merge light + dark overrides
  const merged = JSON.parse(JSON.stringify(lightTheme));

  function deepMerge(target, source) {
    for (const key in source) {
      if (typeof source[key] === "object") {
        target[key] = deepMerge(target[key] ?? {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }

  const finalDark = deepMerge(merged, darkThemeOverrides);

  const flat = flattenTheme(finalDark);

  let css = `:root.dark {\n`;
  for (const key of Object.keys(flat)) {
    css += `  --ds-${key}: ${flat[key]};\n`;
  }
  css += `}\n`;

  return css;
}

//------------------------------------------------------------
// SCSS GENERATION
//------------------------------------------------------------

function generateLightSCSS() {
  const flat = flattenTheme(lightTheme);

  let scss = `$ds-light-theme: (\n`;
  for (const key of Object.keys(flat)) {
    scss += `  "${key}": ${flat[key]},\n`;
  }
  scss += `);\n`;

  return scss;
}

function generateDarkSCSS() {
  // merge light + override
  const merged = JSON.parse(JSON.stringify(lightTheme));

  function deepMerge(target, source) {
    for (const key in source) {
      if (typeof source[key] === "object") {
        target[key] = deepMerge(target[key] ?? {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }

  const finalDark = deepMerge(merged, darkThemeOverrides);

  const flat = flattenTheme(finalDark);

  let scss = `$ds-dark-theme: (\n`;
  for (const key of Object.keys(flat)) {
    scss += `  "${key}": ${flat[key]},\n`;
  }
  scss += `);\n`;

  return scss;
}

// Write SCSS files
fs.writeFileSync(path.join("src", "tokens.light.scss"), generateLightSCSS());
fs.writeFileSync(path.join("src", "tokens.dark.scss"), generateDarkSCSS());

// ---------- Write output files ----------
const outLight = path.join("src", "tokens.light.css");
const outDark  = path.join("src", "tokens.dark.css");

fs.writeFileSync(outLight, generateLightCSS());
fs.writeFileSync(outDark, generateDarkCSS());

console.log("✔ tokens.light.css + tokens.dark.css generated!");
