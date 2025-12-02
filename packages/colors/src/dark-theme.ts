export const darkThemeOverrides = {
  // Surfaces become darker
  surface: {
    base: 'color.neutral.900',
    raised: 'color.neutral.800',
    sunken: 'color.neutral.700',
  },

  // Neutral text changes
  text: {
    base: 'color.neutral.50',
    subtle: 'color.neutral.200',
    muted: 'color.neutral.300',
    inverted: 'color.neutral.900',
  },

  // Borders get softer
  border: {
    subtle: 'color.neutral.700',
    base: 'color.neutral.600',
    strong: 'color.neutral.500',
  },

  // Brand tokens slightly brighten in dark mode
  brand: {
    primary: 'color.lucario.400',
    primaryHover: 'color.lucario.300',
    primaryActive: 'color.lucario.200',
    subtle: 'color.lucario.800'
  },

  // Accent (Pikachu)
  accent: {
    base: 'color.pikachu.400',
    hover: 'color.pikachu.300',
    active: 'color.pikachu.200',
    subtle: 'color.pikachu.800',
  },

  // Danger (Charizard)
  danger: {
    base: 'color.charizard.400',
    hover: 'color.charizard.300',
    active: 'color.charizard.200',
    subtle: 'color.charizard.800'
  },

  // Success (Bulbasaur)
  success: {
    base: 'color.bulbasaur.400',
    hover: 'color.bulbasaur.300',
    active: 'color.bulbasaur.200',
    subtle: 'color.bulbasaur.800'
  },

  // Info (Squirtle)
  info: {
    base: 'color.squirtle.400',
    hover: 'color.squirtle.300',
    active: 'color.squirtle.200',
    subtle: 'color.squirtle.800'
  },

  // Warning (Pikachu)
  warning: {
    base: 'color.pikachu.300',
    hover: 'color.pikachu.200',
    active: 'color.pikachu.100',
    subtle: 'color.pikachu.800'
  },

  // Focus ring shifts a bit lighter
  focus: {
    ring: 'color.lucario.400',
    ringStrong: 'color.lucario.300'
  }
};
