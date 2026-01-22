import type { FAQ } from "@/constants/faq";
import { Box, Collapsible, Span, Stack, Text } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";

interface FAQCardProps extends FAQ {
  index: number;
}

export const FAQCard = ({ question, answer, index }: FAQCardProps) => {
  return (
    <Collapsible.Root w={"full"} borderRadius={"md"}>
      <Collapsible.Trigger
        bgColor={"blackAlpha.50"}
        borderRadius={"md"}
        p={[4, 6]}
        display="flex"
        w={"full"}
        gap="2"
        alignItems="center"
        cursor="pointer"
        textAlign={"start"}
        lineHeight={1.4}
        _hover={{
          bgColor: "blackAlpha.100",
        }}
        _open={{
          borderBottomRadius: "none",
        }}
        fontSize={["md", "lg"]}
      >
        <Span fontWeight={"semibold"} textAlign={"start"}>
          0{index + 1}.
        </Span>
        {question}
        <Box flex="1" />
        <Collapsible.Indicator
          transition="transform 0.2s"
          _open={{ transform: "rotate(90deg)" }}
        >
          <LuChevronRight />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Content w={"full"} bgColor={"blackAlpha.50"}>
        <Stack padding={[4, 6]} borderWidth="1px">
          <Text
            lineHeight={1.4}
            fontWeight={"light"}
            color={"brand.subtleGray"}
            fontSize={"md"}
          >
            {answer}
          </Text>
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
