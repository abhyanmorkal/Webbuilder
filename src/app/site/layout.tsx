import React from "react";
import Nav from "@/components/layout/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <Nav />
      {children}
    </ClerkProvider>
  );
};

export default layout;
