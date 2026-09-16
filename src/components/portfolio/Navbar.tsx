import { useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "@/lib/i18n";
import { content, nav } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function AvatarImg({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <span className="grid size-full place-items-center bg-signal/15 text-[0.7em] font-bold text-signal">
        س
      </span>
    );
  }

  return <img className={className} onError={() => setBroken(true)} {...props} />;
}

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

        if (visible) setActive(visible.target.id);
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

  const closeMenu = () => setOpen(false);

  const mobileMenu = open
    ? createPortal(
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label={t(content.ui.close)}
            onClick={closeMenu}
            className="absolute inset-0 bg-background/45 backdrop-blur-xl"
          />

          <div
            className="absolute inset-x-3 top-3 max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl border border-border/80 bg-background/95 shadow-[0_30px_100px_-35px_var(--signal)] backdrop-blur-2xl sm:inset-x-6 sm:top-4"
            role="dialog"
            aria-modal="true"
            aria-label={t(content.ui.menu)}
          >
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
              <span className="flex min-w-0 items-center gap-2.5 text-sm font-semibold text-foreground">
                <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-surface/70">
                  <AvatarImg
                    src="/brand/logo-sk.webp"
                    alt="شعار سعيد خضر الزهراني"
                    className="size-full object-contain p-1.5"
                  />
                </span>
                <span className="truncate">{t(content.shortName)}</span>
              </span>

              <button
                type="button"
                onClick={closeMenu}
                aria-label={t(content.ui.close)}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-surface/70 text-foreground transition-colors hover:border-signal/40 sm:size-10"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="px-4 pb-6 sm:px-6 sm:pb-8">
              <ul className="flex flex-col">
                {nav.map((item, index) => (
                  <li key={item.id} className="border-b border-border/60 last:border-b-0">
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center gap-3 py-3.5 text-lg font-medium transition-colors sm:py-4 sm:text-xl",
                        active === item.id ? "text-signal" : "text-foreground hover:text-signal",
                      )}
                    >
                      <span className="meta-label w-6 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{t(item.label)}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-border/70 bg-surface/40 p-3.5 sm:mt-7 sm:p-4">
                <div className="mb-3 text-[0.7rem] font-medium text-muted-foreground">
                  {t({ ar: "اللغة والمظهر", en: "Language & appearance" })}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <LanguageSwitcher />

                  <button
                    type="button"
                    onClick={onToggleTheme}
                    aria-label={dark ? "الوضع النهاري" : "الوضع الليلي"}
                    className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-surface/70 text-foreground transition-colors hover:border-signal/40 sm:size-10"
                  >
                    {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenModal();
                }}
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm font-semibold text-foreground transition-all hover:border-signal/50 hover:bg-signal/15 sm:mt-4"
              >
                {t(content.ui.contactCta)}
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "border-b border-border/80 bg-background/78 py-2.5 backdrop-blur-2xl"
            : "border-b border-transparent bg-background/35 py-4 backdrop-blur-sm",
        )}
      >
        <nav
          aria-label={t({ ar: "التنقل الرئيسي", en: "Main navigation" })}
          className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-8 lg:px-12"
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-2.5"
            aria-label={t(content.name)}
          >
            <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-border/80 bg-surface/80 transition-all duration-300 sm:size-10 group-hover:border-signal/40 group-hover:shadow-[0_0_30px_-12px_var(--signal)]">
              <AvatarImg
                src="/brand/logo-sk.webp"
                alt="شعار سعيد خضر الزهراني"
                className="size-full object-contain p-1.5"
              />
            </span>

            <span className="hidden max-w-[150px] truncate text-xs font-semibold tracking-tight text-foreground sm:block sm:text-sm">
              {t(content.shortName)}
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "rounded-full px-3 py-2 text-[0.76rem] transition-colors",
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

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={dark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
              className="grid size-9 place-items-center rounded-full border border-border bg-surface/75 text-foreground transition-all duration-300 hover:border-signal/45 hover:shadow-[0_0_28px_-12px_var(--signal)] sm:size-10"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t(content.ui.menu)}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-full border border-border bg-surface/70 text-foreground transition-colors hover:border-signal/40 sm:size-10 lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      {mobileMenu}
    </>
  );
}
