import type { Config } from "prismic-ts-codegen";

const config: Config = {
  output: "./types.generated.ts",
  models: {
    fetchFromRepository: true,
  },
  repositoryName: "blackfoxsoftware",
  customTypesAPIToken: "",
};

export default config;
