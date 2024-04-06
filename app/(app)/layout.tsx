"use client";

import Image from "next/image";
import BackgrounImage from "/img/background-login.jpg";
import Header from "@/components/Header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
