import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "@/lib/i18n";
import { content, nav } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({ onOpenModal, dark, onToggleTheme }: { onOpenModal: () => void; dark: boolean; onToggleTheme: () => void }) {
  const { t, lang } = useLang();
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
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-20% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
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
        aria-label={t({ ar: "ط§ظ„طھظ†ظ‚ظ„ ط§ظ„ط±ط¦ظٹط³ظٹ", en: "Main navigation" })}
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
      >
        <a href="#home" className="group flex items-center gap-3" aria-label={t(content.name)}>
          <span className="grid size-10 place-items-center overflow-hidden rounded-xl border border-border/80 bg-surface/80 transition-all duration-300 group-hover:border-signal/40 group-hover:shadow-[0_0_30px_-12px_var(--signal)]">
            <img src="/saeed-portfolio-v2/brand/saeed-avatar.png" alt="ط³ط¹ظٹط¯ ط®ط¶ط± ط§ظ„ط²ظ‡ط±ط§ظ†ظٹ" className="size-full object-cover" />
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
          <button type="button" onClick={onToggleTheme} aria-label={dark ? "طھظپط¹ظٹظ„ ط§ظ„ظˆط¶ط¹ ط§ظ„ظ†ظ‡ط§ط±ظٹ" : "طھظپط¹ظٹظ„ ط§ظ„ظˆط¶ط¹ ط§ظ„ظ„ظٹظ„ظٹ"} className="grid size-10 place-items-center rounded-full border border-border bg-surface/75 text-foreground transition-all duration-300 hover:border-signal/45 hover:shadow-[0_0_28px_-12px_var(--signal)]">
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

      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/97 backdrop-blur-2xl transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-5 py-5 sm:px-8">
          <span className="flex items-center gap-3 text-sm font-semibold">
            <span className="grid size-9 place-items-center overflow-hidden rounded-lg border border-border">
              <img src="/saeed-portfolio-v2/brand/saeed-avatar.png" alt="ط³ط¹ظٹط¯ ط®ط¶ط± ط§ظ„ط²ظ‡ط±ط§ظ†ظٹ" className="size-full object-cover" />
            </span>
            {t(content.shortName)}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t(content.ui.close)}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface/60"
          >
            <X className="size-5" />
          </button>
        </div>
        <ul className="mt-6 flex flex-col gap-1 px-5 sm:px-8">
          {nav.map((item, i) => (
            <li key={item.id} className="border-b border-border/60">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4 text-xl font-medium text-foreground"
              >
                <span className="meta-label">{String(i + 1).padStart(2, "0")}</span>
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 px-5 sm:px-8">
          <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button type="button" onClick={onToggleTheme} aria-label={dark ? "ط§ظ„ظˆط¶ط¹ ط§ظ„ظ†ظ‡ط§ط±ظٹ" : "ط§ظ„ظˆط¶ط¹ ط§ظ„ظ„ظٹظ„ظٹ"} className="grid size-10 place-items-center rounded-full border border-border bg-surface/70">
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}

