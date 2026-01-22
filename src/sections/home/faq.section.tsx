import { FAQCard } from "@/components/app/faq-card";
import { faq } from "@/constants/faq";
import { SimpleGrid, Stack, Text } from "@chakra-ui/react";

export const FAQSection = () => {
  return (
    <Stack id="faq" as={"section"} w={"full"} align={"start"} px={4} gap={12}>
      <Text
        textAlign={["center", "left"]}
        fontSize={["5xl", "6xl"]}
        lineHeight={1.2}
        fontWeight={"light"}
        color={"brand.royalBlue"}
        textWrap={["wrap", "nowrap"]}
      >
        Perguntas frequentes
      </Text>
      <Text
        textAlign={["center", "left"]}
        fontSize={["xl", "2xl"]}
        lineHeight={1.4}
        fontWeight={"light"}
        color={"brand.subtleGray"}
      >
        Você deve estar com algumas perguntas, aqui estão as mais comuns entre
        elas.
      </Text>
      <SimpleGrid gap={4} w={"full"}>
        {faq.map((item, index) => (
          <FAQCard key={item.question} {...item} index={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
