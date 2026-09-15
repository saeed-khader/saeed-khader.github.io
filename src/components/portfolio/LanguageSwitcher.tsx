import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-surface/60 p-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-surface-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          insetInlineStart: "2px",
          transform: lang === "ar" ? "translateX(0)" : "translateX(100%)",
        }}
      />
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={cn(
          "relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
          lang === "ar" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        العربية
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "relative z-10 rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors",
          lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
    </div>
  );
}
