"use client";

import Image from "next/image";
import BackgrounImage from "/img/background-login.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
