/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx,mdx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        magenta: {
          900: "#50003F",
          800: "#891869",
          700: "#a91a90",
          600: "#ca26a5",
          500: "#e142bc",
          400: "#f877d2",
          300: "#fface5",
          200: "#ffcef2",
          100: "#fedff3",
          50: "#feeff9",
        },
        purple: {
          900: "#3a1659",
          800: "#633495",
          700: "#7c3ec3",
          600: "#944de7",
          500: "#a964f7",
          400: "#c490f9",
          300: "#ddb9ff",
          200: "#ebd5ff",
          100: "#f2e3ff",
          50: "#f9f1ff",
        },
        blue: {
          900: "#002661",
          800: "#1948a3",
          700: "#175bcc",
          600: "#266ef1",
          500: "#068bee",
          400: "#6daaFB",
          300: "#a9c9ff",
          200: "#cddffe",
          100: "#dee9fe",
          50: "#eff4fe",
        },
        teal:{
          900: "#002d33",
          800: "#1a535a",
          700: "#016974",
          600: "#007f8c",
          500: "#0095a4",
          400: "#01b8ca",
          300: "#77d5e3",
          200: "#b0e7ef",
          100: "#cdeef3",
          50: "#e2f8fb",
        },
        green: {
          900: "#002f14",
          800: "#0d572d",
          700: "#166c3b",
          600: "#0e8345",
          500: "#009a51",
          400: "#06c167",
          300: "#7fd99a",
          200: "#b1eac2",
          100: "#d3efda",
          50: "#eaf6ed",
        },
        lime: {
          900: "#1b2d00",
          800: "#365310",
          700: "#3f6900",
          600: "#4f7f06",
          500: "#5b9500",
          400: "#77b71c",
          300: "#a6d467",
          200: "#cae6a0",
          100: "#deeec6",
          50: "#eef6e3",
        },
        yellow: {
          900: "#392300",
          800: "#6b4100",
          700: "#845201",
          600: "#9f6402",
          500: "#b97502",
          400: "#d79900",
          300: "#f6bc2f",
          200: "#ffd688",
          100: "#fbe5b6",
          50: "#fdf2dc",
        },
        amber: {
          900: "#3e2000",
          800: "#6b4100",
          700: "#904a07",
          600: "#a95f03",
          500: "#c46e00",
          400: "#df9500",
          300: "#ffb749",
          200: "#ffc67c",
          100: "#ffe4b7",
          50: "#fff1e1",
        },
        orange: {
          900: "#461a00",
          800: "#823006",
          700: "#a33b04",
          600: "#c54600",
          500: "#e65300",
          400: "#fc823a",
          300: "#ffb48c",
          200: "#ffd3bc",
          100: "#fee2d4",
          50: "#fff0e9",
        },
        red: {
          900: "#520810",
          800: "#950f22",
          700: "#bb032a",
          600: "#de1135",
          500: "#f83446",
          400: "#fc7f79",
          300: "#ffb2ab",
          200: "#ffd2cd",
          100: "#ffe1de",
          50: "#fff0ee",
        },
        black: "#000000",
        white: "#ffffff",
        gray: {
          900: "#282828",
          800: "#4b4b4b",
          700: "#5e5e5e",
          600: "#727272",
          500: "#868686",
          400: "#A6A6A6",
          300: "#BBBBBB",
          200: "#DDDDDD",
          100: "#E8E8E8",
          50: "#F3F3F3",
        },
        buttons:{
          "primary-default": "#1F1F1F",
          "primary-pressed": "#000000",
          "primary-disabled": "#A6A6A6",
          "primary-hover": "#4B4B4B",
        }
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
