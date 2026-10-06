import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LangProvider } from "@/lib/i18n";
import { Navbar } from "@/components/portfolio/Navbar";
import { ContactModal } from "@/components/portfolio/ContactModal";
import { CvModal } from "@/components/portfolio/CvModal";
import { HumanGate } from "@/components/portfolio/HumanGate";
import {
  About,
  Certifications,
  Contact,
  Experience,
  Footer,
  Hero,
  HireMatch,
  Process,
  Project,
  Skills,
} from "@/components/portfolio/sections";

const THEME_KEY = "saeed-theme-v2";

const title = "سعيد الزهراني — تقنية المعلومات";
const description = "الموقع الشخصي لسعيد الزهراني — تقنية المعلومات.";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://saeed-khader.github.io/" }],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://saeed-khader.github.io/" },
      { property: "og:locale", content: "ar_SA" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://saeed-khader.github.io/brand/social-card.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "1200" },
      {
        name: "twitter:image",
        content: "https://saeed-khader.github.io/brand/social-card.jpg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const open = () => setModalOpen(true);
  const openCv = () => setCvModalOpen(true);

  // الوضع الليلي هو الافتراضي دائمًا؛ يُحفظ اختيار الزائر فقط إذا غيّره بنفسه.
  useEffect(() => {
    try {
      setDark(window.localStorage.getItem(THEME_KEY) !== "light");
    } catch {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    try {
      window.localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      /* ignore storage errors */
    }
  };

  return (
    <LangProvider>
      <HumanGate>
        <div className="min-h-screen bg-background">
          <Navbar onOpenModal={open} dark={dark} onToggleTheme={toggleTheme} />
          <main>
            <Hero onOpenModal={open} onOpenCv={openCv} />
            <About />
            <Experience onOpenModal={open} />
            <Skills />
            <Process />
            <Project onOpenModal={open} />
            <Certifications />
            <HireMatch />
            <Contact onOpenModal={open} onOpenCv={openCv} />
          </main>
          <Footer />
          <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
          <CvModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
        </div>
      </HumanGate>
    </LangProvider>
  );
}
