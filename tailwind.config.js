/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx,mdx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        magenta: {
          900: "#50003F",
          800: "#691869",
          700: "#A21998",
          600: "#C26AA5",
          500: "#E142BC",
          400: "#F877D2",
          300: "#FFACE5",
          200: "#FFCEF2",
          100: "#FFDFE3",
          50: "#FEFEF9",
        },
        purple: {
          900: "#3A1659",
          800: "#633A95",
          700: "#7C3EC3",
          600: "#9D44E7",
          500: "#A964F7",
          400: "#C49CF9",
          300: "#DDB9FF",
          200: "#EED5FF",
          100: "#F2E3FF",
          50: "#F9F1FF",
        },
        blue: {
          900: "#002661",
          800: "#194A83",
          700: "#175BCC",
          600: "#266EF1",
          500: "#068BEE",
          400: "#6DAAFB",
          300: "#A9C9FF",
          200: "#CDDEFF",
          100: "#DEE9FE",
          50: "#EFF4FE",
        },
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          900: "#282828",
          800: "#4B4B4B",
          700: "#5E5E5E",
          600: "#727272",
          500: "#868686",
          400: "#A6A6A6",
          300: "#BBBBBB",
          200: "#DDDDDD",
          100: "#E8E8E8",
          50: "#F3F3F3",
        },
        primaryA: "#000000",
        primaryB: "#ffffff",
        accent: "#068BEE",
        negative: "#D32F2F", 
        warning: "#FBC02D", 
        positive: "#388E3C",
        
        backgroundPrimary: "#ffffff", 
        backgroundSecondary: "#e0e0e0", 
        backgroundTertiary: "#bdbdbd",
        backgroundInversePrimary: "#000000", 
        backgroundInverseSecondary: "#424242",

        
        contentPrimary: "#000000", 
        contentSecondary: "#616161",
        contentTertiary: "#9e9e9e",
        contentInversePrimary: "#ffffff",
        contentInverseSecondary: "#bdbdbd",
        contentInverseTertiary: "#757575",

        
        borderOpaque: "#bdbdbd",
        borderTransparent: "rgba(0,0,0,0.1)",
        borderSelected: "#ffffff",
        borderInverseOpaque: "#424242",
        borderInverseTransparent: "rgba(255,255,255,0.1)",
        borderInverseSelected: "#ffffff",
        backgroundStatusDisabled: "#e0e0e0",
        backgroundOverlayArt: "#1a1a1a",
        backgroundOverlayDark: "#3d3d3d",
        backgroundOverlayLight: "#f2f2f2",
        backgroundOverlayElevation: "#e5e5e5",
        backgroundAccent: "#1e88e5",
        backgroundNegative: "#d32f2f",
        backgroundWarning: "#fbc02d",
        backgroundPositive: "#388e3c",
        backgroundLightAccent: "#e3f2fd",
        backgroundLightNegative: "#ffebee",
        backgroundLightWarning: "#fffde7",
        backgroundLightPositive: "#e8f5e9",
        backgroundAlwaysDark: "#000000",
        backgroundAlwaysLight: "#ffffff",

      
        contentStatusDisabled: "#9e9e9e",
        contentOnColor: "#ffffff",
        contentOnColorInverse: "#000000",
        contentAccent: "#1e88e5",
        contentNegative: "#d32f2f",
        contentWarning: "#fbc02d",
        contentPositive: "#388e3c",

        
        borderStatusDisabled: "#e0e0e0",
        borderAccent: "#1e88e5",
        borderNegative: "#d32f2f",
        borderWarning: "#fbc02d",
        borderPositive: "#388e3c",
        borderAccentLight: "#90caf9",

        
          safety: "#1e88e5",
          oats: "#388e3c",
          freight: "#1565c0",
          rewardsTier1: "#1e88e5",
          rewardsTier2: "#FDC045",
          rewardsTier3: "#B0B0B0",
          rewardsTier4: "#000000",
          membership: "#FBC02D",



          fontFamily: {
            ubuntu: ['Ubuntu Sans', 'sans-serif'],
          },
          fontSize: {
            large: '96px',
          },
          lineHeight: {
            large: '112px',
          },
          fontWeight: {
            bold: 700,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans', 'sans-serif'],
          },
          fontSize: {
            large: '96px',
          },
          lineHeight: {
            large: '112px',
          },
          fontWeight: {
            bold: 700,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans', 'sans-serif'],
            uber: ['Uber Move', 'sans-serif'],
          },
          fontSize: {
            large: '96px',
            small: '44px',
          },
          lineHeight: {
            large: '112px',
            small: '52px',
          },
          fontWeight: {
            bold: 700,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans', 'sans-serif'],
            uber: ['Uber Move', 'sans-serif'],
          },
          fontSize: {
            large: '96px',
            small: '44px',
            xsmall: '36px',
          },
          lineHeight: {
            large: '112px',
            small: '52px',
            xsmall: '44px',
          },
          fontWeight: {
            bold: 700,
          },



          fontFamily: {
            ubuntu: ['Ubuntu Sans', 'sans-serif'],
            uber: ['Uber Move', 'sans-serif'],
          },
          fontSize: {
            large: '96px',
            small: '44px',
            xsmall: '36px',
            xxlarge: '40px',
          },
          lineHeight: {
            large: '112px',
            small: '52px',
            xsmall: '44px',
            xxlarge: '52px',
          },
          fontWeight: {
            bold: 700,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans', 'sans-serif'],
            uber: ['Uber Move', 'sans-serif'],
          },
          fontSize: {
            large: '96px',
            small: '44px',
            xsmall: '36px',
            xxlarge: '40px',
            xlarge: '36px',
          },
          lineHeight: {
            large: '112px',
            small: '52px',
            xsmall: '44px',
            xxlarge: '52px',
            xlarge: '44px',
          },
          fontWeight: {
            bold: 700,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans', 'sans-serif'],
            uber: ['Uber Move', 'sans-serif'],
          },
          fontSize: {
            large: '32px',
            small: '44px',
            xsmall: '36px',
            xxlarge: '40px',
            xlarge: '36px',
          },
          lineHeight: {
            large: '40px',
            small: '52px',
            xsmall: '44px',
            xxlarge: '52px',
            xlarge: '44px',
          },
          fontWeight: {
            bold: 700,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans', 'sans-serif'],
            uber: ['Uber Move', 'sans-serif'],
          },
          fontSize: {
            large: '32px',
            medium: '28px',
            small: '44px',
            xsmall: '36px',
            xxlarge: '40px',
            xlarge: '36px',
          },
          lineHeight: {
            large: '40px',
            medium: '36px',
            small: '52px',
            xsmall: '44px',
            xxlarge: '52px',
            xlarge: '44px',
          },
          fontWeight: {
            bold: 700,
          },

          fontFamily: {
            uber: ['Uber Move', 'sans-serif'],
          },
          fontSize: {
            small: '24px',
          },
          lineHeight: {
            small: '32px',
          },
          fontWeight: {
            bold: 700,
          },

          fontFamily: {
            uber: ['Uber Move', 'sans-serif'],
          },
          fontSize: {
            xsmall: '20px',
          },
          lineHeight: {
            xsmall: '28px',
          },
          fontWeight: {
            bold: 700,
          },



          fontFamily: {
            ubuntu: ['Ubuntu Sans Text', 'sans-serif'],
          },
          fontSize: {
            large: '18px',
          },
          lineHeight: {
            large: '24px',
          },
          fontWeight: {
            medium: 500,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans Text', 'sans-serif'],
          },
          fontSize: {
            large: '18px',
            medium: '16px',
          },
          lineHeight: {
            large: '24px',
            medium: '20px',
          },
          fontWeight: {
            medium: 500,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans Text', 'sans-serif'],
          },
          fontSize: {
            large: '18px',
            medium: '16px',
            small: '14px',
          },
          lineHeight: {
            large: '24px',
            medium: '20px',
            small: '16px',
          },
          fontWeight: {
            medium: 500,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans Text', 'sans-serif'],
          },
          fontSize: {
            large: '18px',
            medium: '16px',
            small: '14px',
            'x-small': '12px',
          },
          lineHeight: {
            large: '24px',
            medium: '20px',
            small: '16px',
            'x-small': '16px',
          },
          fontWeight: {
            medium: 500,
          },


          fontFamily: {
            ubuntu: ['Ubuntu Sans Text', 'sans-serif'],
          },
          fontSize: {
            large: '18px',
          },
          lineHeight: {
            large: '28px',
          },
          fontWeight: {
            normal: 400,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans Text', 'sans-serif'],
          },
          fontSize: {
            medium: '16px',
          },
          lineHeight: {
            medium: '24px',
          },
          fontWeight: {
            normal: 400,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans Text', 'sans-serif'],
          },
          fontSize: {
            small: '14px',
          },
          lineHeight: {
            small: '20px',
          },
          fontWeight: {
            normal: 400,
          },

          fontFamily: {
            ubuntu: ['Ubuntu Sans Text', 'sans-serif'],
          },
          fontSize: {
            'x-small': '12px',
          },
          lineHeight: {
            'x-small': '20px',
          },
          fontWeight: {
            normal: 400,
          },

      },
    },
  },
  plugins: [],
};
