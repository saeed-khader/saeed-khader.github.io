import { useEffect, useMemo, useState } from "react";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Mail,
  MessageCircle,
  Send,
  User,
  X,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { content, EMAIL, mailto } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WHATSAPP = "966546447644";

const OPPORTUNITY_TYPES = [
  { value: "full-time", ar: "دوام كامل", en: "Full-time" },
  { value: "part-time", ar: "دوام جزئي", en: "Part-time" },
  { value: "freelance", ar: "فريلانس / عمل حر", en: "Freelance" },
  { value: "internship", ar: "تدريب", en: "Internship" },
  { value: "consulting", ar: "استشارة تقنية", en: "Consultation" },
  { value: "other", ar: "أخرى", en: "Other" },
];

type FormState = {
  name: string;
  company: string;
  role: string;
  type: string;
  email: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  company: "",
  role: "",
  type: OPPORTUNITY_TYPES[0]!.value,
  email: "",
  message: "",
};

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, lang } = useLang();
  const m = content.modal;
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;

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

  useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => {
        setForm(EMPTY_FORM);
        setTouched(false);
        setSent(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [open]);

  const typeLabel = useMemo(
    () => OPPORTUNITY_TYPES.find((o) => o.value === form.type)?.[lang] ?? "",
    [form.type, lang],
  );

  if (!open) return null;

  const isValid = form.name.trim().length > 1 && form.message.trim().length > 3;

  const openEmail = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    const subject = `${typeLabel} — ${form.name}`;

    const body =
      lang === "ar"
        ? `مرحبًا سعيد،

الاسم: ${form.name}
${form.company ? `الشركة: ${form.company}\n` : ""}${form.role ? `المسمى الوظيفي: ${form.role}\n` : ""}نوع الفرصة: ${typeLabel}
${form.email ? `للتواصل: ${form.email}\n` : ""}
الرسالة:
${form.message}`
        : `Hi Saeed,

Name: ${form.name}
${form.company ? `Company: ${form.company}\n` : ""}${form.role ? `Role: ${form.role}\n` : ""}Opportunity type: ${typeLabel}
${form.email ? `Reach me at: ${form.email}\n` : ""}
Message:
${form.message}`;

    window.location.href = mailto(subject, body);
    setSent(true);
  };

  const field = (key: keyof typeof m.fields) => t(m.fields[key]);

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
        aria-label={t({ ar: "تواصل معي", en: "Contact me" })}
        className={cn(
          "premium-panel accent-ring atmos relative z-10 max-h-[92dvh] w-full max-w-lg overflow-y-auto p-6 transition-all duration-300 ease-out sm:p-8",
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

        {sent ? (
          <div className="flex flex-col items-center px-2 py-8 text-center">
            <div className="grid size-16 place-items-center rounded-full border border-ok/30 bg-ok/10 text-ok">
              <CheckCircle2 className="size-8" />
            </div>
            <h2 className="display-md mt-5 text-foreground">
              {t({ ar: "تم فتح تطبيق البريد!", en: "Your mail app is open!" })}
            </h2>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "أرسل الرسالة من هناك لإتمام التواصل، وبيرد عليك سعيد بأقرب وقت.",
                en: "Send it from there to finish up — Saeed will get back to you soon.",
              })}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full border border-border bg-surface-2/60 px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-signal/40"
            >
              {t({ ar: "تمام", en: "Got it" })}
            </button>
          </div>
        ) : (
          <>
            <span className="meta-label">{t({ ar: "تواصل", en: "Contact" })}</span>
            <h2 className="display-md mt-2 text-foreground">{t(m.title)}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(m.hint)}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={openEmail}
                className="group flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface-2/30 px-3 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:bg-surface-2/60"
              >
                <Mail className="size-4 text-signal" />
                {t({ ar: "إيميل مباشر", en: "Email" })}
              </button>
              <button
                type="button"
                onClick={openWhatsApp}
                className="group flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface-2/30 px-3 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:bg-surface-2/60"
              >
                <MessageCircle className="size-4 text-signal" />
                {t({ ar: "واتساب", en: "WhatsApp" })}
              </button>
            </div>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-hairline" />
              <span className="meta-label shrink-0">
                {t({ ar: "أو التفاصيل كاملة", en: "or full details" })}
              </span>
              <span className="h-px flex-1 bg-hairline" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label
                    htmlFor="cm-name"
                    className="flex items-center gap-1.5 text-muted-foreground"
                  >
                    <User className="size-3.5" /> {field("name")}
                  </Label>
                  <Input
                    id="cm-name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={cn(
                      "bg-surface-2/40",
                      touched &&
                        !form.name.trim() &&
                        "border-destructive/60 focus-visible:ring-destructive/50",
                    )}
                    placeholder={t({ ar: "مثال: عبدالله", en: "e.g. John" })}
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label
                    htmlFor="cm-email"
                    className="flex items-center gap-1.5 text-muted-foreground"
                  >
                    <Mail className="size-3.5" /> {field("email")}
                  </Label>
                  <Input
                    id="cm-email"
                    type="email"
                    dir="ltr"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="bg-surface-2/40 text-start"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label
                    htmlFor="cm-company"
                    className="flex items-center gap-1.5 text-muted-foreground"
                  >
                    <Building2 className="size-3.5" /> {field("company")}
                  </Label>
                  <Input
                    id="cm-company"
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    className="bg-surface-2/40"
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label
                    htmlFor="cm-role"
                    className="flex items-center gap-1.5 text-muted-foreground"
                  >
                    <Briefcase className="size-3.5" /> {field("role")}
                  </Label>
                  <Input
                    id="cm-role"
                    value={form.role}
                    onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                    className="bg-surface-2/40"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="cm-type" className="text-muted-foreground">
                  {field("type")}
                </Label>
                <div className="relative">
                  <select
                    id="cm-type"
                    value={form.type}
                    onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                    className="flex h-9 w-full appearance-none rounded-md border border-input bg-surface-2/40 px-3 py-1 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {OPPORTUNITY_TYPES.map((o) => (
                      <option key={o.value} value={o.value} className="bg-popover text-foreground">
                        {o[lang]}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute inset-y-0 end-3 my-auto size-4 text-muted-foreground" />
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="cm-message" className="text-muted-foreground">
                  {field("message")}
                </Label>
                <Textarea
                  id="cm-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={cn(
                    "bg-surface-2/40",
                    touched &&
                      form.message.trim().length <= 3 &&
                      "border-destructive/60 focus-visible:ring-destructive/50",
                  )}
                  placeholder={t({
                    ar: "اكتب نبذة عن الفرصة أو ما تحتاجه…",
                    en: "Tell me a bit about the opportunity…",
                  })}
                />
              </div>

              <button
                type="submit"
                className="group mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_18px_45px_-20px_var(--signal)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-18px_var(--signal)] active:translate-y-0"
              >
                <Send className="size-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                {t(m.submit)}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
