"use client";

import { PATH_AUTH } from "@/common/constants/path.constants";
import { useSelector } from "@/common/redux/store";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoyaltyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useSelector((state) => state.authLogin);
  const router = useRouter();
  if (!isLoggedIn) {
    router.push(PATH_AUTH.login);
  }
  return <>{children}</>;
}

