import { prismicClient } from "@/lib/prismic";
import type { CasesDocument } from "../../types.generated";

export const getCases = async () => {
  const response = await prismicClient.getAllByType("cases");
  return response as CasesDocument[];
};
