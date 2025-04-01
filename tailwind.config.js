/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./dist/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        /* Magenta */
        magenta: {
          900: "var(--color-magenta-900)",
          800: "var(--color-magenta-800)",
          700: "var(--color-magenta-700)",
          600: "var(--color-magenta-600)",
          500: "var(--color-magenta-500)",
          400: "var(--color-magenta-400)",
          300: "var(--color-magenta-300)",
          200: "var(--color-magenta-200)",
          100: "var(--color-magenta-100)",
          50: "var(--color-magenta-50)",
        },

        /* Purple */
        purple: {
          900: "var(--color-purple-900)",
          800: "var(--color-purple-800)",
          700: "var(--color-purple-700)",
          600: "var(--color-purple-600)",
          500: "var(--color-purple-500)",
          400: "var(--color-purple-400)",
          300: "var(--color-purple-300)",
          200: "var(--color-purple-200)",
          100: "var(--color-purple-100)",
          50: "var(--color-purple-50)",
        },

        /* Blue */
        blue: {
          900: "var(--color-blue-900)",
          800: "var(--color-blue-800)",
          700: "var(--color-blue-700)",
          600: "var(--color-blue-600)",
          500: "var(--color-blue-500)",
          400: "var(--color-blue-400)",
          300: "var(--color-blue-300)",
          200: "var(--color-blue-200)",
          100: "var(--color-blue-100)",
          50: "var(--color-blue-50)",
        },

        /* Teal */
        teal: {
          900: "var(--color-teal-900)",
          800: "var(--color-teal-800)",
          700: "var(--color-teal-700)",
          600: "var(--color-teal-600)",
          500: "var(--color-teal-500)",
          400: "var(--color-teal-400)",
          300: "var(--color-teal-300)",
          200: "var(--color-teal-200)",
          100: "var(--color-teal-100)",
          50: "var(--color-teal-50)",
        },

        /* Green */
        green: {
          900: "var(--color-green-900)",
          800: "var(--color-green-800)",
          700: "var(--color-green-700)",
          600: "var(--color-green-600)",
          500: "var(--color-green-500)",
          400: "var(--color-green-400)",
          300: "var(--color-green-300)",
          200: "var(--color-green-200)",
          100: "var(--color-green-100)",
          50: "var(--color-green-50)",
        },

        /* Lime */
        lime: {
          900: "var(--color-lime-900)",
          800: "var(--color-lime-800)",
          700: "var(--color-lime-700)",
          600: "var(--color-lime-600)",
          500: "var(--color-lime-500)",
          400: "var(--color-lime-400)",
          300: "var(--color-lime-300)",
          200: "var(--color-lime-200)",
          100: "var(--color-lime-100)",
          50: "var(--color-lime-50)",
        },

        /* Yellow */
        yellow: {
          900: "var(--color-yellow-900)",
          800: "var(--color-yellow-800)",
          700: "var(--color-yellow-700)",
          600: "var(--color-yellow-600)",
          500: "var(--color-yellow-500)",
          400: "var(--color-yellow-400)",
          300: "var(--color-yellow-300)",
          200: "var(--color-yellow-200)",
          100: "var(--color-yellow-100)",
          50: "var(--color-yellow-50)",
        },

        /* Amber */
        amber: {
          900: "var(--color-amber-900)",
          800: "var(--color-amber-800)",
          700: "var(--color-amber-700)",
          600: "var(--color-amber-600)",
          500: "var(--color-amber-500)",
          400: "var(--color-amber-400)",
          300: "var(--color-amber-300)",
          200: "var(--color-amber-200)",
          100: "var(--color-amber-100)",
          50: "var(--color-amber-50)",
        },

        /* Orange */
        orange: {
          900: "var(--color-orange-900)",
          800: "var(--color-orange-800)",
          700: "var(--color-orange-700)",
          600: "var(--color-orange-600)",
          500: "var(--color-orange-500)",
          400: "var(--color-orange-400)",
          300: "var(--color-orange-300)",
          200: "var(--color-orange-200)",
          100: "var(--color-orange-100)",
          50: "var(--color-orange-50)",
        },

        /* Red */
        red: {
          900: "var(--color-red-900)",
          800: "var(--color-red-800)",
          700: "var(--color-red-700)",
          600: "var(--color-red-600)",
          500: "var(--color-red-500)",
          400: "var(--color-red-400)",
          300: "var(--color-red-300)",
          200: "var(--color-red-200)",
          100: "var(--color-red-100)",
          50: "var(--color-red-50)",
        },

        /* White and Gray */
        white: "var(--color-white)",
        gray: {
          900: "var(--color-gray-900)",
          800: "var(--color-gray-800)",
          700: "var(--color-gray-700)",
          600: "var(--color-gray-600)",
          500: "var(--color-gray-500)",
          400: "var(--color-gray-400)",
          300: "var(--color-gray-300)",
          200: "var(--color-gray-200)",
          100: "var(--color-gray-100)",
          50: "var(--color-gray-50)",
        },

        /* Buttons */
        buttons: {
          "primary-default": "var(--color-black)", // Reuse --color-black
          "primary-pressed": "var(--color-black)", // Reuse --color-black
          "primary-disabled": "var(--color-gray-500)", // Reuse --color-gray-500
          "primary-hover": "#4b4b4b", // New value (no variable)
          "secondary-default": "var(--color-white)", // Reuse --color-white
          "secondary-default-border": "var(--color-black)", // Reuse --color-black
          "secondary-pressed": "var(--color-gray-100)", // Reuse --color-gray-100
          "secondary-pressed-border": "var(--color-black)", // Reuse --color-black
          "secondary-hover": "var(--color-white)", // Reuse --color-white
          "secondary-hover-border": "#4b4b4b", // New value (no variable)
          "secondary-disabled": "var(--color-gray-500)", // Reuse --color-gray-500
        },

        /* Other Colors */
        primaryA: "var(--color-black)", // Reuse --color-black
        primaryB: "var(--color-white)", // Reuse --color-white
        accent: "var(--color-accent)",
        negative: "var(--color-negative)",
        warning: "var(--color-warning)",
        positive: "var(--color-positive)",

        /* Backgrounds */
        backgroundPrimary: "var(--color-white)", // Reuse --color-white
        backgroundSecondary: "#e0e0e0", // New value (no variable)
        backgroundTertiary: "#bdbdbd", // New value (no variable)
        backgroundInversePrimary: "var(--color-black)", // Reuse --color-black
        backgroundInverseSecondary: "#424242", // New value (no variable)

        /* Content */
        contentPrimary: "var(--color-black)", // Reuse --color-black
        contentSecondary: "#616161", // New value (no variable)
        contentTertiary: "#9e9e9e", // New value (no variable)
        contentInversePrimary: "var(--color-white)", // Reuse --color-white
        contentInverseSecondary: "var(--color-gray-200)", // Reuse --color-gray-200
        contentInverseTertiary: "#757575", // New value (no variable)

        /* Borders */
        borderOpaque: "var(--color-gray-200)", // Reuse --color-gray-200
        borderTransparent: "rgba(0, 0, 0, 0.1)", // New value (no variable)
        borderSelected: "var(--color-white)", // Reuse --color-white
        borderInverseOpaque: "#424242", // New value (no variable)
        borderInverseTransparent: "rgba(255, 255, 255, 0.1)", // New value (no variable)
        borderInverseSelected: "var(--color-white)", // Reuse --color-white

        /* Status Backgrounds */
        backgroundStatusDisabled: "var(--color-gray-100)", // Reuse --color-gray-100
        backgroundOverlayArt: "#1a1a1a", // New value (no variable)
        backgroundOverlayDark: "#3d3d3d", // New value (no variable)
        backgroundOverlayLight: "#f2f2f2", // New value (no variable)
        backgroundOverlayElevation: "#e5e5e5", // New value (no variable)
        backgroundAccent: "var(--color-accent)",
        backgroundNegative: "var(--color-negative)",
        backgroundWarning: "var(--color-warning)",
        backgroundPositive: "var(--color-positive)",
        backgroundLightAccent: "#e3f2fd", // New value (no variable)
        backgroundLightNegative: "#ffebee", // New value (no variable)
        backgroundLightWarning: "#fffde7", // New value (no variable)
        backgroundLightPositive: "#e8f5e9", // New value (no variable)
        backgroundAlwaysDark: "var(--color-black)", // Reuse --color-black
        backgroundAlwaysLight: "var(--color-white)", // Reuse --color-white

        /* Status Content */
        contentStatusDisabled: "var(--color-gray-500)", // Reuse --color-gray-500
        contentOnColor: "var(--color-white)", // Reuse --color-white
        contentOnColorInverse: "var(--color-black)", // Reuse --color-black
        contentAccent: "var(--color-accent)",
        contentNegative: "var(--color-negative)",
        contentWarning: "var(--color-warning)",
        contentPositive: "var(--color-positive)",

        /* Status Borders */
        borderStatusDisabled: "var(--color-gray-100)", // Reuse --color-gray-100
        borderAccent: "var(--color-accent)",
        borderNegative: "var(--color-negative)",
        borderWarning: "var(--color-warning)",
        borderPositive: "var(--color-positive)",
        borderAccentLight: "#90caf9", // New value (no variable)

        /* Other */
        safety: "var(--color-safety)",
        oats: "var(--color-oats)",
        freight: "var(--color-freight)",
        rewardsTier1: "var(--color-rewards-tier1)",
        rewardsTier2: "var(--color-rewards-tier2)",
        rewardsTier3: "var(--color-rewards-tier3)",
        rewardsTier4: "var(--color-black)", // Reuse --color-black
        membership: "var(--color-membership)",
      },
      fontFamily: {
        ubuntu: ['Ubuntu Sans', 'sans-serif'],
        'ubuntu-text': ['Ubuntu Sans Text', 'sans-serif'],
        uber: ['Uber Move', 'sans-serif'],
      },
      fontSize: {
        xsmall: '20px',
        small: '24px',
        medium: '28px',
        large: '32px',
        xsmall: '20px',
        xxlarge: '40px',
        xlarge: '36px',
        displaylarge: '96px',
        displaymedium: '52px',
        displaysmall: '44px',
        displayxsmall: '36px',
        labellarge: '18px',
        labelmedium: '16px',
        labelsmall: '14px',
        labelxsmall: '12px',
      },
      lineHeight: {
        'x-small': '16px',
        small: '20px',
        medium: '24px',
        large: '64px',
        xsmall: '28px',
        xxlarge: '52px',
        xlarge: '44px',
        displaylarge: '112px',
        displaymedium: '64px',
        displaysmall: '52px',
        displayxsmall: '44px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    const typographyStyles = {
        ".typography-display-large": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-display-large)",
          lineHeight: "var(--lh-display-large)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-display-medium": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-display-medium)",
          lineHeight: "var(--lh-display-medium)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-display-small": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-display-small)",
          lineHeight: "var(--lh-display-small)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-display-xsmall": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-display-xsmall)",
          lineHeight: "var(--lh-display-xsmall)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-heading-xxlarge": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-heading-xxlarge)",
          lineHeight: "var(--lh-heading-xxlarge)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-heading-xlarge": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-heading-xlarge)",
          lineHeight: "var(--lh-heading-xlarge)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-heading-large": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-heading-large)",
          lineHeight: "var(--lh-heading-large)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-heading-medium": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-heading-medium)",
          lineHeight: "var(--lh-heading-medium)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-heading-small": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-heading-small)",
          lineHeight: "var(--lh-heading-small)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-heading-xsmall": {
          fontFamily: "var(--typography-2)",
          fontSize: "var(--fs-heading-xsmall)",
          lineHeight: "var(--lh-heading-xsmall)",
          fontWeight: "var(--fw-bold)",
        },
        ".typography-label-large": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-label-large)",
          lineHeight: "var(--lh-label-large)",
          fontWeight: "var(--fw-medium)",
        },
        ".typography-label-medium": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-label-medium)",
          lineHeight: "var(--lh-label-medium)",
          fontWeight: "var(--fw-medium)",
        },
        ".typography-label-small": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-label-small)",
          lineHeight: "var(--lh-label-small)",
          fontWeight: "var(--fw-medium)",
        },
        ".typography-label-xsmall": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-label-xsmall)",
          lineHeight: "var(--lh-label-xsmall)",
          fontWeight: "var(--fw-medium)",
        },
        ".typography-paragraph-large": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-paragraph-large)",
          lineHeight: "var(--lh-paragraph-large)",
          fontWeight: "var(--fw-regular)",
        },
        ".typography-paragraph-medium": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-paragraph-medium)",
          lineHeight: "var(--lh-paragraph-medium)",
          fontWeight: "var(--fw-regular)",
        },
        ".typography-paragraph-small": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-paragraph-small)",
          lineHeight: "var(--lh-paragraph-small)",
          fontWeight: "var(--fw-regular)",
        },
        ".typography-paragraph-xsmall": {
          fontFamily: "var(--typography-1)",
          fontSize: "var(--fs-paragraph-xsmall)",
          lineHeight: "var(--lh-paragraph-xsmall)",
          fontWeight: "var(--fw-regular)",
        },
      };
      addUtilities(typographyStyles);
      const buttonUtilities = {
        /* Secondary Button States */
        '.btn-secondary-default': {
          backgroundColor: 'var(--color-buttons-secondary-default)',
          borderColor: 'var(--color-buttons-secondary-default-border)',
          borderWidth: '1px',
        },
        '.btn-secondary-pressed': {
          backgroundColor: 'var(--color-buttons-secondary-pressed)',
          borderColor: 'var(--color-buttons-secondary-pressed-border)',
          borderWidth: '1px',
        },
        '.btn-secondary-hover': {
          backgroundColor: 'var(--color-buttons-secondary-hover)',
          borderColor: 'var(--color-buttons-secondary-hover-border)',
          borderWidth: '1px',
        },
        '.btn-secondary-disabled': {
          backgroundColor: 'var(--color-buttons-secondary-disabled)',
          // No border for disabled state
        },
        '.btn-secondary-loading': {
          backgroundColor: 'var(--color-buttons-secondary-default)',
          borderColor: 'var(--color-buttons-secondary-default-border)',
          borderWidth: '1px',
        },
      };

      addUtilities(buttonUtilities);
    },
  ],
};
