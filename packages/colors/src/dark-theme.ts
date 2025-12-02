export const darkThemeOverrides = {
  surface: {
    base: "color.neutral.900",
    hover: "color.neutral.800",
    active: "color.neutral.700",
  },

  border: {
    subtle: "color.neutral.700",
    base: "color.neutral.600",
    strong: "color.neutral.500",
  },

  content: {
    primary: "color.neutral.50",
    secondary: "color.neutral.300",
    disabled: "color.neutral.500",
  },

  brand: {
    primary: "color.blue.400",
    primaryHover: "color.blue.300",
  }
} as const;
