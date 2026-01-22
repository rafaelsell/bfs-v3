import { type Service } from "@/constants/services";
import { Icon, Stack, Text } from "@chakra-ui/react";
import { HiPlay } from "react-icons/hi2";

interface ServiceCardProps extends Service {
  index: number;
}

export const ServiceCard = ({ description, title }: ServiceCardProps) => {
  return (
    <Stack
      direction={["column", "row"]}
      align={"center"}
      gap={4}
      w={"full"}
      justify={["center", "space-between"]}
      py={8}
      px={8}
      bgColor={"blackAlpha.50"}
      rounded={"lg"}
    >
      <Stack
        direction={"row"}
        align={"center"}
        justify={["center", "start"]}
        gap={[2, 8]}
        w={["full", "max-content"]}
      >
        <Icon size={["md", "lg"]} as={HiPlay} color={"blackAlpha.500"} />
        <Text
          lineHeight={1.4}
          maxW={["full", "300px"]}
          fontSize={["xl", "2xl"]}
          fontWeight={"light"}
          textAlign={["center", "left"]}
        >
          {title}
        </Text>
      </Stack>

      <Text
        lineHeight={1.4}
        maxW={"700px"}
        fontSize={["md", "lg"]}
        textAlign={["center", "right"]}
        fontWeight={"light"}
      >
        {description}
      </Text>
    </Stack>
  );
};
