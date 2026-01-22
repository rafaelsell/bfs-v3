import { Text, Stack, Span } from "@chakra-ui/react";

export const AboutUsSection = () => {
  return (
    <Stack
      id="aboutus"
      as={"section"}
      w={"full"}
      align={["center", "start"]}
      px={4}
      gap={16}
      minH={"80vh"}
      justify={"center"}
      maxW={"1400px"}
    >
      <Text
        textAlign={["center", "right"]}
        fontSize={["5xl", "6xl"]}
        lineHeight={1.2}
        fontWeight={"light"}
      >
        Sobre nós
      </Text>
      <Stack gap={12}>
        <Text lineHeight={1.4} fontSize={["lg", "2xl"]} fontWeight={"light"}>
          <Span fontWeight={"semibold"}>
            No mercado digital, muitas empresas enfrentam um dilema:
          </Span>{" "}
          contratam agências criativas que entregam sites bonitos (mas com
          código frágil e lento) ou fábricas de software que entregam sistemas
          robustos (mas difíceis de usar e visualmente pobres).
        </Text>

        <Text lineHeight={1.4} fontSize={["lg", "2xl"]} fontWeight={"semibold"}>
          A Blackfox Software existe para eliminar essa lacuna.
        </Text>

        <Text lineHeight={1.4} fontSize={["lg", "2xl"]} fontWeight={"light"}>
          Nós não somos apenas desenvolvedores que 'arriscam' no design, nem
          designers que 'tentam' programar.
          <Span fontWeight={"semibold"}>
            {" "}
            Nossa liderança une 5 anos de Engenharia de Software Full Stack com
            7 anos de base sólida em Design Gráfico e Marketing.
          </Span>
        </Text>

        <Text lineHeight={1.4} fontSize={["lg", "2xl"]} fontWeight={"light"}>
          O que isso significa para o seu negócio? Entregamos soluções digitais
          de alta performance que não apenas funcionam perfeitamente, mas são
          intuitivas e desenhadas para vender.{" "}
          <Span fontWeight={"semibold"}>
            Unimos o rigor acadêmico da engenharia com a persuasão da
            comunicação visual."
          </Span>
        </Text>
      </Stack>
    </Stack>
  );
};
