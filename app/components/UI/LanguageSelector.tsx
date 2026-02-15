"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => {
        setLanguage(language === "fr" ? "en" : "fr");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-bold text-sm min-w-[40px]"
      aria-label={`Switch to ${language === "fr" ? "English" : "French"}`}
    >
      {language === "fr" ? "EN" : "FR"}
    </button>
  );
}
