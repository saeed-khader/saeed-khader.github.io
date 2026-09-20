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

const title = "سعيد خضر الزهراني — تقنية معلومات، شبكات ودعم فني";
const description =
  "الملف الشخصي لسعيد خضر الزهراني: بكالوريوس تقنية المعلومات — إدارة الشبكات وأمنها، خبرة دعم فني، ومشروع MyFCITR. Saeed Khader Alzahrani — IT, networking and technical support portfolio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
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

  useEffect(() => {
    const saved = window.localStorage.getItem("saeed-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    window.localStorage.setItem("saeed-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <LangProvider>
      <HumanGate>
        <div className="min-h-screen bg-background">
          <Navbar onOpenModal={open} dark={dark} onToggleTheme={() => setDark((v) => !v)} />
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
