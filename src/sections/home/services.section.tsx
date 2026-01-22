import { ServiceCard } from "@/components/app/service-card";
import { services } from "@/constants/services";
import { HStack, SimpleGrid, Span, Stack, Text } from "@chakra-ui/react";

export const ServicesSection = () => {
  return (
    <Stack
      id="services"
      as={"section"}
      w={"full"}
      align={"start"}
      px={4}
      gap={12}
      maxW={"1400px"}
    >
      <HStack justify={["center", "right"]} w={"full"}>
        <Text
          textAlign={["center", "right"]}
          fontSize={["5xl", "6xl"]}
          lineHeight={1.2}
          fontWeight={"light"}
        >
          Excelência com <br />{" "}
          <Span color={"brand.royalBlue"}> zero riscos</Span>
        </Text>
      </HStack>
      <SimpleGrid gap={8} w={"full"}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
