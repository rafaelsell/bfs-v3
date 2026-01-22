import { SimpleGrid, Stack } from "@chakra-ui/react";
import {
  AboutUsSection,
  CasesSection,
  ContactSection,
  FAQSection,
  HeroSection,
  ServicesSection,
} from "@/sections";

export const HomePage = () => {
  return (
    <Stack gap={48} w={"full"} align={"center"} pb={24} zIndex={2}>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <CasesSection />
      <SimpleGrid columns={[1, 2]} w={"full"} gap={[48, 12]} maxW={"1400px"}>
        <ContactSection />
        <FAQSection />
      </SimpleGrid>
    </Stack>
  );
};
