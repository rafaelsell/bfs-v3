import { Box, Button, Field, Icon, Input, Stack, Text } from "@chakra-ui/react";
import { HiPlay } from "react-icons/hi2";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toaster } from "@/components/ui/toaster";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  companyName: z.string().min(1, { message: "Nome da empresa é obrigatório" }),
  email: z.email({ message: "Email inválido" }),
  phone: z.string().min(11, { message: "Telefone inválido" }),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

type ContactForm = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbyIiGEy1bZdcJ59gWcylXGpaq0fphphBriQ-CkeMtTwHifW1ppfj1Caa3W25inELs7H/exec";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    defaultValues: {
      companyName: "",
      email: "",
      message: "",
      name: "",
      phone: "",
    },
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onContactSubmit = async (data: ContactForm) => {
    const { name, companyName, email, phone, message } = data;
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      body: JSON.stringify({ name, companyName, email, phone, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    reset();
    toaster.create({
      closable: true,
      title: "Logo entraremos em contato",
      type: "success",
    });
  };
  return (
    <Stack
      id="contact"
      as={"section"}
      w={"full"}
      align={["center", "start"]}
      px={4}
      gap={12}
    >
      <Stack gap={12}>
        <Text
          textAlign={["center", "left"]}
          fontSize={["5xl", "6xl"]}
          lineHeight={1.2}
          fontWeight={"light"}
          maxW={"1000px"}
        >
          Entre em contato
        </Text>
        <Text
          textAlign={["center", "left"]}
          fontSize={["lg", "2xl"]}
          lineHeight={1.4}
          fontWeight={"light"}
          color={"brand.subtleGray"}
        >
          Queremos entender o que você precisa, e com base nisso faremos um
          briefing.
        </Text>
      </Stack>
      <Stack
        onSubmit={handleSubmit(onContactSubmit)}
        as={"form"}
        gap={4}
        w={"full"}
      >
        <Field.Root invalid={!!errors.name}>
          <Input
            {...register("name")}
            bgColor={"blackAlpha.50"}
            borderColor={"blackAlpha.100"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            focusRingColor={"brand.royalBlue"}
            focusRingWidth={"2px"}
            size={["xl", "2xl"]}
            placeholder="Nome completo"
          />
          {errors.name && (
            <Field.ErrorText fontSize="sm" fontWeight="light">
              {errors.name.message}
            </Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.companyName}>
          <Input
            {...register("companyName")}
            bgColor={"blackAlpha.50"}
            borderColor={"blackAlpha.100"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            focusRingColor={"brand.royalBlue"}
            focusRingWidth={"2px"}
            size={["xl", "2xl"]}
            placeholder="Nome da empresa"
          />
          {errors.companyName && (
            <Field.ErrorText fontSize="sm" fontWeight="light">
              {errors.companyName.message}
            </Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.email}>
          <Input
            {...register("email")}
            bgColor={"blackAlpha.50"}
            borderColor={"blackAlpha.100"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            focusRingColor={"brand.royalBlue"}
            focusRingWidth={"2px"}
            size={["xl", "2xl"]}
            placeholder="Email"
          />
          {errors.email && (
            <Field.ErrorText fontSize="sm" fontWeight="light">
              {errors.email.message}
            </Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.phone}>
          <Input
            {...register("phone")}
            bgColor={"blackAlpha.50"}
            borderColor={"blackAlpha.100"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            focusRingColor={"brand.royalBlue"}
            focusRingWidth={"2px"}
            size={["xl", "2xl"]}
            placeholder="Telefone (Whatsapp)"
          />
          {errors.phone && (
            <Field.ErrorText fontSize="sm" fontWeight="light">
              {errors.phone.message}
            </Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.message}>
          <Input
            {...register("message")}
            bgColor={"blackAlpha.50"}
            borderColor={"blackAlpha.100"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            focusRingColor={"brand.royalBlue"}
            focusRingWidth={"2px"}
            size={["xl", "2xl"]}
            placeholder="Sua ideia vai aqui!"
          />
          {errors.message && (
            <Field.ErrorText fontSize="sm" fontWeight="light">
              {errors.message.message}
            </Field.ErrorText>
          )}
        </Field.Root>
        <Button
          disabled={isSubmitting}
          loading={isSubmitting}
          type="submit"
          _hover={{
            filter: "brightness(1.1)",
          }}
          bgColor={"brand.royalBlue"}
          size={["xl", "2xl"]}
        >
          Quero um orçamento gratuito
          <Box w={"full"} />
          <Icon size={"md"} as={HiPlay} />
        </Button>
      </Stack>
    </Stack>
  );
};
