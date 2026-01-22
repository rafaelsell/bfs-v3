import {
  createSystem,
  defaultConfig,
  defineConfig,
  type SystemConfig,
} from "@chakra-ui/react";

const config: SystemConfig = defineConfig({
  globalCss: {
    "html, body": {
      fontFamily: "Poppins, sans-serif",
      textRendering: "geometricPrecision",
      bgColor: "brand.justWhite",
      color: "brand.justBlack",
    },
  },
  theme: {
    tokens: {
      fonts: {
        poppins: { value: "Poppins, sans-serif" },
      },
      colors: {
        brand: {
          justBlack: {
            value: "#1B1B1B",
          },
          royalBlue: {
            value: "#0177FB",
          },
          subtleGray: {
            value: "#323238",
          },
          superLightGray: {
            value: "#E8E6E3",
          },
          justWhite: {
            value: "#F5F5F5",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
