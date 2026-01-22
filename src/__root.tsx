import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Appbar, Footer } from "@/components/app";
import { NoiseOverlay } from "@/components/app/noise-overlay";
import { Toaster } from "./components/ui/toaster";

export const RootLayout = () => {
  return (
    <Stack w={"100%"} minH={"100vh"} align={"center"} pb={12}>
      <Toaster />
      <Appbar />
      <Outlet />
      <NoiseOverlay />
      <Footer />
    </Stack>
  );
};
