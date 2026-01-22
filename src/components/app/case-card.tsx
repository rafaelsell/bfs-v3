import {
  Box,
  Button,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { asDate, asText } from "@prismicio/client";
import type { CasesDocument } from "../../../types.generated";
import { HiPlay } from "react-icons/hi2";

interface CaseCardProps {
  caseItem: CasesDocument;
}

export const CaseCard = ({ caseItem }: CaseCardProps) => {
  const title = asText(caseItem.data.title);
  const releaseDate = asDate(caseItem.data.release_date);
  return (
    <Stack
      w={["full", "960px"]}
      h={["480px", "640px"]}
      position={"relative"}
      ml={[0, 8]}
      borderRadius={"md"}
      overflow={"hidden"}
      className="group"
    >
      <Image
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        w={"full"}
        h={"full"}
        objectFit={"cover"}
        src={caseItem.data.featured_image.home_image.url ?? undefined}
        alt={caseItem.data.featured_image.home_image.alt ?? undefined}
        filter={"saturate(0) contrast(0.8) blur(2px)"}
        transition={"all 0.3s ease-in-out"}
        _groupHover={{
          transform: "scale(1.02)",
          filter: "saturate(1) contrast(1) blur(5px)",
        }}
      />
      <Box
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={"to-b"}
        gradientFrom={"transparent"}
        gradientTo={"black"}
      />
      <Stack
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        align={"end"}
        p={[4, 12]}
        direction={"row"}
        justify={"space-between"}
      >
        <Stack
          direction={["column", "row"]}
          justify={"space-between"}
          align={"center"}
          w={"full"}
        >
          <VStack align={"start"} w={["full", "auto"]} pb={[4, 0]}>
            <Text lineHeight={1} color={"white"} fontSize={["2xl", "4xl"]}>
              {title}
            </Text>
            <Text
              lineHeight={1}
              fontSize={["lg", "2xl"]}
              color={"brand.royalBlue"}
            >
              {releaseDate?.getFullYear()}
            </Text>
          </VStack>
          <Button
            w={["full", "auto"]}
            onClick={() =>
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              window.open(caseItem.data.link_to_page.url ?? undefined, "_blank")
            }
            _hover={{
              filter: "brightness(1.1)",
            }}
            gap={4}
            size={["md", "xl"]}
            bgColor={"brand.royalBlue"}
          >
            Visitar projeto <Icon as={HiPlay} />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
