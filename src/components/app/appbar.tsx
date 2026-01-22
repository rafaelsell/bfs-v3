import {
  Button,
  CloseButton,
  Drawer,
  Text,
  HStack,
  Icon,
  IconButton,
  Image,
  Portal,
  SimpleGrid,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { useIsTop } from "../../hooks";
import { appbarItems } from "@/constants/appbar";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { HiPlay } from "react-icons/hi2";
import { openExternalLink } from "@/lib/openExternalLink";
import { scrollToView } from "@/lib/scrollToView";

export const Appbar = () => {
  const isTop = useIsTop();
  const [open, setOpen] = useState(false);
  return (
    <Stack
      as={"nav"}
      transition={"all 0.6s ease-in-out"}
      bgColor={isTop ? "transparent" : "whiteAlpha.700"}
      backdropFilter={isTop ? "none" : "blur(10px)"}
      direction={"row"}
      justify={"space-between"}
      align={"center"}
      px={8}
      py={4}
      top={8}
      borderRadius={"lg"}
      maxW={isTop ? "1400px" : "800px"}
      w={"100%"}
      zIndex={"docked"}
      position={"fixed"}
    >
      <Image
        h={["20px", "25px"]}
        objectFit={"contain"}
        src="/logo-full.svg"
        alt="Blackfox Software - Fabrica de software e Consultoria"
      />

      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Drawer.Trigger asChild>
          <IconButton variant={"plain"}>
            <Icon size={["md", "xl"]} as={LuMenu} />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop backdropFilter={"blur(10px) saturate(0)"} />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Body bgColor={"brand.justWhite"}>
                <Stack h={"full"} py={4} align={"center"} w={"full"}>
                  <SimpleGrid pt={12} w={"full"} gap={2}>
                    {appbarItems.map((item) => (
                      <Button
                        onClick={() => {
                          setOpen(false);
                          setTimeout(() => {
                            scrollToView(item.href, {
                              behavior: "smooth",
                              block: "center",
                              inline: "nearest",
                            });
                          }, 100);
                        }}
                        transition={"all 0.2s ease-in-out"}
                        bgColor={"transparent"}
                        color={"brand.justBlack"}
                        key={item.href}
                        textAlign={"start"}
                        w={"full"}
                        justifyContent={"space-between"}
                        className="group"
                        _hover={{
                          color: "brand.royalBlue",
                        }}
                      >
                        {item.label}
                        <Icon
                          transition={"all 0.4s ease-in-out"}
                          opacity={0}
                          transform={"translateX(-10px)"}
                          color={"brand.justBlack"}
                          _groupHover={{
                            opacity: 1,
                            transform: "translateX(0)",
                            color: "brand.royalBlue",
                          }}
                          h={"12px"}
                          w={"12px"}
                          as={HiPlay}
                        />
                      </Button>
                    ))}
                  </SimpleGrid>
                  <Box h={"full"} />
                  <HStack>
                    <IconButton
                      className="group"
                      size={"2xl"}
                      variant={"plain"}
                      onClick={() =>
                        openExternalLink("https://wa.me/5547996477278")
                      }
                    >
                      <Icon
                        _groupHover={{ color: "brand.royalBlue" }}
                        as={FaWhatsapp}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        openExternalLink(
                          "https://instagram.com/blackfoxsoftware",
                        )
                      }
                      className="group"
                      size={"2xl"}
                      variant={"plain"}
                    >
                      <Icon
                        _groupHover={{ color: "brand.royalBlue" }}
                        as={FaInstagram}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        openExternalLink(
                          "https://linkedin.com/company/blackfoxsoftware",
                        )
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
                  <Text textAlign={"center"} fontWeight={"light"}>
                    {new Date().getFullYear()} Blackfox Software. Todos os
                    direitos reservados. &copy;
                  </Text>
                </Stack>
              </Drawer.Body>

              <Drawer.CloseTrigger asChild>
                <CloseButton
                  color={"brand.justBlack"}
                  _hover={{ color: "brand.royalBlue" }}
                  size="sm"
                />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Stack>
  );
};
