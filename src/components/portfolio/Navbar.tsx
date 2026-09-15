import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "@/lib/i18n";
import { content, nav } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({
  onOpenModal,
  dark,
  onToggleTheme,
}: {
  onOpenModal: () => void;
  dark: boolean;
  onToggleTheme: () => void;
}) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: [0.25, 0.5],
        rootMargin: "-20% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "border-b border-border/80 bg-background/78 py-2.5 backdrop-blur-2xl"
          : "border-b border-transparent bg-background/35 py-4 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label={t({
          ar: "التنقل الرئيسي",
          en: "Main navigation",
        })}
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
      >
        <a href="#home" className="group flex items-center gap-3" aria-label={t(content.name)}>
          <span className="grid size-10 place-items-center overflow-hidden rounded-xl border border-border/80 bg-surface/80 transition-all duration-300 group-hover:border-signal/40 group-hover:shadow-[0_0_30px_-12px_var(--signal)]">
            <img
              src="/brand/saeed-avatar.png"
              alt="سعيد خضر الزهراني"
              className="size-full object-cover"
            />
          </span>

          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
            {t(content.shortName)}
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-3 py-2 text-[0.8rem] transition-colors",
                  active === item.id
                    ? "bg-surface/80 text-foreground"
                    : "text-muted-foreground hover:bg-surface/50 hover:text-foreground",
                )}
              >
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={dark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface/75 text-foreground transition-all duration-300 hover:border-signal/45 hover:shadow-[0_0_28px_-12px_var(--signal)]"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t(content.ui.menu)}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface/70 text-foreground transition-colors hover:border-signal/40 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label={t(content.ui.close)}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/65 backdrop-blur-xl"
          />

          <div
            className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-border/80 bg-background/95 shadow-2xl backdrop-blur-2xl"
            dir="auto"
          >
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <span className="grid size-9 place-items-center overflow-hidden rounded-lg border border-border bg-surface/70">
                  <img
                    src="/brand/saeed-avatar.png"
                    alt="سعيد خضر الزهراني"
                    className="size-full object-cover"
                  />
                </span>

                {t(content.shortName)}
              </span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t(content.ui.close)}
                className="grid size-10 place-items-center rounded-full border border-border bg-surface/70 text-foreground transition-colors hover:border-signal/40"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="px-5 pb-8 sm:px-8">
              <ul className="flex flex-col">
                {nav.map((item, index) => (
                  <li key={item.id} className="border-b border-border/60">
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-4 py-4 text-xl font-medium transition-colors",
                        active === item.id
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <span className="meta-label w-7 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{t(item.label)}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl border border-border/70 bg-surface/40 p-4">
                <div className="mb-3 text-xs font-medium text-muted-foreground">
                  {t({
                    ar: "اللغة والمظهر",
                    en: "Language & appearance",
                  })}
                </div>

                <div className="flex items-center gap-3">
                  <LanguageSwitcher />

                  <button
                    type="button"
                    onClick={onToggleTheme}
                    aria-label={dark ? "الوضع النهاري" : "الوضع الليلي"}
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface/70 text-foreground transition-colors hover:border-signal/40"
                  >
                    {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenModal();
                }}
                className="mt-4 flex w-full items-center justify-center rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm font-semibold text-foreground transition-all hover:bg-signal/15"
              >
                {t(content.ui.contactCta)}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
