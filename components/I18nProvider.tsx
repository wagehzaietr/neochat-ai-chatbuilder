"use client";

import { ReactNode, useEffect } from "react";
import "@/lib/i18n"; // ensures i18n is initialized
import i18n from "i18next";

export default function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const applyDir = () => {
      const lang = i18n.language || "en";
      const dir = lang.startsWith("ar") ? "rtl" : "ltr";
      const html = document.documentElement;
      html.setAttribute("lang", lang);
      html.setAttribute("dir", dir);
    };

    applyDir();
    i18n.on("languageChanged", applyDir);
    return () => {
      i18n.off("languageChanged", applyDir);
    };
  }, []);

  return <>{children}</>;
}
