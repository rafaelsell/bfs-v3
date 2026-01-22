import { openExternalLink } from "@/lib/openExternalLink";
import { scrollToView } from "@/lib/scrollToView";
import {
  Stack,
  Image,
  HStack,
  IconButton,
  Icon,
  Text,
  Button,
  Separator,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { HiPlay } from "react-icons/hi2";

export const Footer = () => {
  return (
    <Stack as={"footer"} w={"full"} maxW={"1400px"} px={4} zIndex={2} gap={12}>
      <Stack
        direction={["column", "row"]}
        w={"full"}
        justify={"space-between"}
        align={"center"}
        gap={[12, 0]}
      >
        <Image
          h={"25px"}
          objectFit={"contain"}
          src="/logo-full.svg"
          alt="Blackfox Software - Fabrica de software e Consultoria"
        />
        <HStack>
          <IconButton
            className="group"
            size={"2xl"}
            variant={"plain"}
            onClick={() => openExternalLink("https://wa.me/5547996477278")}
          >
            <Icon _groupHover={{ color: "brand.royalBlue" }} as={FaWhatsapp} />
          </IconButton>
          <IconButton
            onClick={() =>
              openExternalLink("https://instagram.com/blackfoxsoftware")
            }
            className="group"
            size={"2xl"}
            variant={"plain"}
          >
            <Icon _groupHover={{ color: "brand.royalBlue" }} as={FaInstagram} />
          </IconButton>
          <IconButton
            onClick={() =>
              openExternalLink("https://linkedin.com/company/blackfoxsoftware")
            }
            className="group"
            size={"2xl"}
            variant={"plain"}
          >
            <Icon
              _groupHover={{ color: "brand.royalBlue" }}
              as={FaLinkedinIn}
            />
          </IconButton>
        </HStack>
      </Stack>
      <Separator borderColor={"blackAlpha.200"} />
      <Stack
        direction={["column", "row"]}
        justify={"space-between"}
        align={"center"}
        gap={[12, 0]}
      >
        <Text textAlign={["center", "left"]}>
          {new Date().getFullYear()} Blackfox Software. Todos os direitos
          reservados. &copy;
        </Text>
        <Button
          w={["full", "auto"]}
          onClick={() => {
            scrollToView("hero", {
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }}
          _hover={{
            bgColor: "blackAlpha.300",
          }}
          borderWidth={"1px"}
          borderColor={"blackAlpha.200"}
          transition={"all 0.2s ease-in-out"}
          bgColor={"blackAlpha.100"}
          color={"brand.justBlack"}
        >
          Voltar ao topo{" "}
          <Icon transform={"rotate(-90deg)"} size={"sm"} as={HiPlay} />
        </Button>
      </Stack>
    </Stack>
  );
};
