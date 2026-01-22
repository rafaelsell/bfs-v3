import {
  Icon,
  IconButton,
  Span,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useGetCases } from "@/hooks";
import { useEffect, useRef } from "react";
import Slider, { type Settings } from "react-slick";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { CaseCard } from "@/components/app/case-card";

export const CasesSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sliderRef = useRef<Slider>(null);

  const settingsBMobile: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    variableWidth: true,
  };

  const goToPrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const { data: cases } = useGetCases();

  useEffect(() => {
    console.log(cases);
  }, [cases]);
  return (
    <Stack
      id="cases"
      as={"section"}
      w={"full"}
      align={"center"}
      gap={12}
      px={[4, 0]}
    >
      <Stack justify={"left"} w={"full"} gap={12} maxW={"1400px"}>
        <Text
          textAlign={["center", "left"]}
          fontSize={["3xl", "6xl"]}
          lineHeight={1.2}
          fontWeight={"light"}
          maxW={"1000px"}
        >
          Se tempo é dinheiro, a prioridade é a
          <Span color={"brand.royalBlue"}> entrega sem contras!</Span>
        </Text>
        <Text
          fontSize={["lg", "2xl"]}
          lineHeight={1.4}
          fontWeight={"light"}
          color={"brand.subtleGray"}
          textAlign={["center", "left"]}
        >
          Aqui está a vitrine com nossos melhores projetos, tudo que fizemos até
          então é prelúdio do seu produto de sucesso. Encorajamos você a dar uma
          boa olhada, tomar inspiração e instigar sua criatividade.
        </Text>
      </Stack>

      <Stack w={"full"}>
        <Slider ref={sliderRef} {...(isMobile ? settingsBMobile : settings)}>
          {cases?.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </Slider>
      </Stack>
      <Stack
        maxW={"1400px"}
        direction={"row"}
        gap={4}
        w={"full"}
        justify={"center"}
      >
        <IconButton
          _hover={{
            bgColor: "blackAlpha.200",
          }}
          className="group"
          borderWidth={"1px"}
          borderColor={"blackAlpha.50"}
          transition={"all 0.2s ease-in-out"}
          bgColor={"blackAlpha.100"}
          color={"brand.justBlack"}
          onClick={goToPrevious}
        >
          <Icon
            _groupHover={{
              color: "brand.royalBlue",
            }}
            as={LuArrowLeft}
          />
        </IconButton>
        <IconButton
          _hover={{
            bgColor: "blackAlpha.200",
          }}
          className="group"
          borderWidth={"1px"}
          borderColor={"blackAlpha.50"}
          transition={"all 0.2s ease-in-out"}
          bgColor={"blackAlpha.100"}
          color={"brand.justBlack"}
          onClick={goToNext}
        >
          <Icon
            _groupHover={{
              color: "brand.royalBlue",
            }}
            as={LuArrowRight}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};
