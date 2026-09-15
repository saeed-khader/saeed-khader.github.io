import { useEffect } from "react";
import { Mail, MessageCircle, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EMAIL = "saeeedkhzh@gmail.com";
const WHATSAPP = "966546447644";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const openEmail = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label={t({ ar: "إغلاق", en: "Close" })}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t({ ar: "تواصل معي", en: "Contact me" })}
        className="panel relative z-10 w-full max-w-md p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="display-md text-foreground">
              {t({ ar: "تواصل معي", en: "Contact me" })}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "اختر الطريقة المناسبة للتواصل معي.",
                en: "Choose your preferred way to get in touch.",
              })}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t({ ar: "إغلاق", en: "Close" })}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-surface-2/50 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-7 grid gap-3">
          <button
            type="button"
            onClick={openEmail}
            className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-surface-2/30 p-4 text-start transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:bg-surface-2/60"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-background text-foreground transition-colors group-hover:border-signal/40 group-hover:text-signal">
              <Mail className="size-5" />
            </div>

            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground">
                {t({ ar: "البريد الإلكتروني", en: "Email" })}
              </div>

              <div className="mt-1 truncate text-xs text-muted-foreground">{EMAIL}</div>
            </div>
          </button>

          <button
            type="button"
            onClick={openWhatsApp}
            className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-surface-2/30 p-4 text-start transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:bg-surface-2/60"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-background text-foreground transition-colors group-hover:border-signal/40 group-hover:text-signal">
              <MessageCircle className="size-5" />
            </div>

            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground">
                {t({ ar: "واتساب", en: "WhatsApp" })}
              </div>

              <div className="mt-1 text-xs text-muted-foreground" dir="ltr">
                0546447644
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
