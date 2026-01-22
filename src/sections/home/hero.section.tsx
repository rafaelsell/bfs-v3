import { Model } from "@/components/app/Fox35_walk";
import { Box, Icon, Span, Stack, Text } from "@chakra-ui/react";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { HiPlay } from "react-icons/hi2";
import * as THREE from "three";
import { useBreakpointValue } from "@chakra-ui/react";

export const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [mycam, setMycam] = useState<THREE.PerspectiveCamera | null>();
  return (
    <Stack
      id="hero"
      as={"main"}
      w={"full"}
      align={"center"}
      px={4}
      py={[32, 0]}
      gap={12}
      minH={"95vh"}
      maxW={"1400px"}
    >
      <Stack
        direction={["column", "row"]}
        w={"full"}
        justify={"end"}
        align={"center"}
        flex={1}
        position={"relative"}
      >
        <Box
          left={["unset", 0]}
          position={["unset", "absolute"]}
          w={["100%", "1000px"]}
          h={["400px", "1400px"]}
          rounded={"sm"}
          overflow={"hidden"}
        >
          <Canvas style={{ pointerEvents: "none" }} shadows>
            <PerspectiveCamera ref={setMycam} position={[0, 0, 0]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.1} />
            <Suspense fallback={null}>
              <Model
                castShadow
                receiveShadow
                scale={isMobile ? 0.08 : 0.05}
                position={[-1.1, -0.2, 0]}
                rotation={isMobile ? [0, 0.7, 0] : [0, 1.1, 0]}
              />
              <Environment preset="sunset" />
            </Suspense>
            {mycam && <CameraControls makeDefault camera={mycam} />}
          </Canvas>
        </Box>
        <Text
          textAlign={["center", "right"]}
          fontSize={["5xl", "92px"]}
          lineHeight={1.4}
          fontWeight={"light"}
        >
          Impacto <br /> através de <br />
          <Span fontStyle={"italic"} color={"brand.royalBlue"}>
            tecnologia
          </Span>{" "}
          <br />
          usabilidade <br />{" "}
          <Span color={"brand.royalBlue"}>extraordinária</Span>
        </Text>
      </Stack>
      <Stack
        direction={["column", "row"]}
        align={"center"}
        justify={"space-between"}
        w={"full"}
        gap={[12, 0]}
      >
        <Text
          fontSize={["md", "lg"]}
          textAlign={["center", "left"]}
          lineHeight={1.4}
          fontWeight={"light"}
          color={"brand.subtleGray"}
          maxW={"900px"}
        >
          Não criamos apenas "presença online". Desenvolvemos softwares robustos
          e designs estratégicos que transformam sua ideia em uma máquina de
          vendas. Engenharia de ponta a ponta, sem dores de cabeça.
        </Text>

        <Box animation={"bounce 2s infinite"}>
          <Icon
            transform={"rotate(90deg)"}
            color={"brand.royalBlue"}
            size={"lg"}
            as={HiPlay}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
