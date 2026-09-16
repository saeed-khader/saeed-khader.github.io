import { useEffect, useState } from "react";
import { FileDown, Globe2, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { content, CV_PATH_AR, CV_PATH_EN } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function CvModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();
  const m = content.cvModal;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    setMounted(false);
    const raf = requestAnimationFrame(() => setMounted(true));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-3 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label={t({ ar: "إغلاق", en: "Close" })}
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300",
          mounted ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t(m.title)}
        className={cn(
          "premium-panel accent-ring atmos relative z-10 w-full max-w-lg overflow-hidden p-6 transition-all duration-300 ease-out sm:p-8",
          mounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.97] opacity-0",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t({ ar: "إغلاق", en: "Close" })}
          className="absolute end-5 top-5 grid size-9 shrink-0 place-items-center rounded-full border border-border bg-surface-2/50 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        <span className="meta-label">{t({ ar: "السيرة الذاتية", en: "CV" })}</span>
        <h2 className="display-md mt-2 text-foreground">{t(m.title)}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(m.hint)}</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={CV_PATH_AR}
            download
            onClick={onClose}
            className="group flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-surface-2/30 px-4 py-6 text-center transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:bg-surface-2/60"
          >
            <span className="grid size-11 place-items-center rounded-full border border-signal/25 bg-signal/10 text-signal">
              <FileDown className="size-5" />
            </span>
            <span className="text-sm font-semibold text-foreground">{t(content.ui.cvArabic)}</span>
            <span className="text-[0.7rem] text-muted-foreground">PDF</span>
          </a>

          <a
            href={CV_PATH_EN}
            download
            onClick={onClose}
            className="group flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-surface-2/30 px-4 py-6 text-center transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:bg-surface-2/60"
          >
            <span className="grid size-11 place-items-center rounded-full border border-signal/25 bg-signal/10 text-signal">
              <Globe2 className="size-5" />
            </span>
            <span className="text-sm font-semibold text-foreground">{t(content.ui.cvEnglish)}</span>
            <span className="text-[0.7rem] text-muted-foreground">PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
