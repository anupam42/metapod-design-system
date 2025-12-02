export const semanticTokens = {
  // Backgrounds
  surface: {
    base: "color.neutral.50",
    hover: "color.neutral.100",
    active: "color.neutral.200",
  },

  // Borders
  border: {
    subtle: "color.neutral.200",
    base: "color.neutral.300",
    strong: "color.neutral.400",
  },

  // Content
  content: {
    primary: "color.neutral.900",
    secondary: "color.neutral.600",
    disabled: "color.neutral.400",
  },

  // Brand Tokens
  brand: {
    primary: "color.blue.600",
    primaryHover: "color.blue.700",
  }
} as const;
