import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface/60 p-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={cn(
          "rounded-full px-3 py-1.5 text-[0.7rem] font-medium transition-all duration-300 sm:text-xs",
          lang === "ar"
            ? "bg-surface-2 text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        عربي
      </button>

      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "rounded-full px-3 py-1.5 text-[0.7rem] font-medium tracking-wide transition-all duration-300 sm:text-xs",
          lang === "en"
            ? "bg-surface-2 text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        English
      </button>
    </div>
  );
}
