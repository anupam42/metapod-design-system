//
// Light Theme: Concrete token values for light mode.
// These resolve semantic tokens into actual palette values.
// Generated based on semanticTokens + your palette files.
//

export const lightTheme = {
  surface: {
    base: 'color.neutral.50',
    raised: 'color.neutral.100',
    sunken: 'color.neutral.200',
  },

  text: {
    base: 'color.neutral.900',
    subtle: 'color.neutral.700',
    muted: 'color.neutral.600',
    inverted: 'color.neutral.50',
  },

  border: {
    subtle: 'color.neutral.200',
    base: 'color.neutral.300',
    strong: 'color.neutral.400',
  },

  // Brand – Lucario palette
  brand: {
    primary: 'color.lucario.500',
    primaryHover: 'color.lucario.600',
    primaryActive: 'color.lucario.700',
    subtle: 'color.lucario.100',
  },

  // Accent – Pikachu palette
  accent: {
    base: 'color.pikachu.500',
    hover: 'color.pikachu.600',
    active: 'color.pikachu.700',
    subtle: 'color.pikachu.100',
  },

  // Status Palettes
  success: {
    base: 'color.bulbasaur.500',
    hover: 'color.bulbasaur.600',
    active: 'color.bulbasaur.700',
    subtle: 'color.bulbasaur.100'
  },

  danger: {
    base: 'color.charizard.500',
    hover: 'color.charizard.600',
    active: 'color.charizard.700',
    subtle: 'color.charizard.100'
  },

  warning: {
    base: 'color.pikachu.400',
    hover: 'color.pikachu.500',
    active: 'color.pikachu.600',
    subtle: 'color.pikachu.100'
  },

  info: {
    base: 'color.squirtle.500',
    hover: 'color.squirtle.600',
    active: 'color.squirtle.700',
    subtle: 'color.squirtle.100'
  },

  // Focus
  focus: {
    ring: 'color.lucario.500',
    ringStrong: 'color.lucario.700'
  }
};
