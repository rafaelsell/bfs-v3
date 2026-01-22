import * as prismic from "@prismicio/client";
import type { AllDocumentTypes } from "../../types.generated";

export const repositoryName = "blackfoxsoftware";

const endpoint = prismic.getRepositoryEndpoint(repositoryName);

export const routes: prismic.Route[] = [{ type: "page", path: "/:slug" }];

const createClient = (config?: prismic.ClientConfig) => {
  return prismic.createClient<AllDocumentTypes>(endpoint, {
    ...config,
  });
};

export const prismicClient: prismic.Client<AllDocumentTypes> = createClient();
