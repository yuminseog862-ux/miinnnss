"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

import styles from "./main-page-cta.module.css";

export function MainPageCta() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <Link href="/" className={styles.mainPageCta} aria-label="메인 페이지로 이동">
      <Home size={14} aria-hidden="true" />
      <span>Main</span>
    </Link>
  );
}
