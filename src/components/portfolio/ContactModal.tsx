import { useEffect, useMemo, useRef, useState } from "react";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clipboard,
  ClipboardCheck,
  Loader2,
  Mail,
  MessageCircle,
  RotateCcw,
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
  const [sending, setSending] = useState(false);
  const [fallback, setFallback] = useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const blurHandlerRef = useRef<(() => void) | null>(null);

  const clearPendingCheck = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (blurHandlerRef.current) {
      window.removeEventListener("blur", blurHandlerRef.current);
      blurHandlerRef.current = null;
    }
  };

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
      clearPendingCheck();
      const timeout = setTimeout(() => {
        setForm(EMPTY_FORM);
        setTouched(false);
        setSent(false);
        setSending(false);
        setFallback(null);
        setCopied(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [open]);

  useEffect(() => clearPendingCheck, []);

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

  const buildMessage = () => {
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

    return { subject, body };
  };

  const attemptMailto = (subject: string, body: string) => {
    clearPendingCheck();
    setSending(true);
    setCopied(false);

    let settled = false;

    const finishSuccess = () => {
      if (settled) return;
      settled = true;
      clearPendingCheck();
      setSending(false);
      setSent(true);
      setFallback(null);
    };

    const onBlur = () => finishSuccess();
    blurHandlerRef.current = onBlur;
    window.addEventListener("blur", onBlur);

    // Some browsers/OSes navigate away silently even without a "blur" event,
    // and some show no mail client at all — we can't know for certain, so we
    // give it a moment, and if the page never lost focus we assume no mail
    // app is configured and fall back to a copy-able message instead of
    // lying to the user about it having worked.
    timeoutRef.current = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      clearPendingCheck();
      setSending(false);
      setFallback({ subject, body });
    }, 1200);

    window.location.href = mailto(subject, body);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    const { subject, body } = buildMessage();
    attemptMailto(subject, body);
  };

  const handleCopy = async () => {
    if (!fallback) return;
    const text = `${lang === "ar" ? "الموضوع" : "Subject"}: ${fallback.subject}\n\n${fallback.body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
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
        ) : fallback ? (
          <div className="flex flex-col px-1 py-2 text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-full border border-signal/30 bg-signal/10 text-signal">
              <Mail className="size-8" />
            </div>
            <h2 className="display-md mt-5 text-foreground">
              {t({ ar: "ما لقينا تطبيق بريد على جهازك", en: "No mail app found on this device" })}
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "ما مشكلة — انسخ الرسالة وأرسلها يدويًا على البريد التالي، أو تواصل عبر واتساب.",
                en: "No worries — copy the message and send it manually to the email below, or reach out on WhatsApp instead.",
              })}
            </p>

            <div
              dir="ltr"
              className="mt-5 max-h-40 overflow-y-auto whitespace-pre-wrap rounded-2xl border border-border bg-surface-2/40 p-4 text-start text-xs leading-relaxed text-muted-foreground"
            >
              <span className="font-semibold text-foreground">{fallback.subject}</span>
              {"\n\n"}
              {fallback.body}
            </div>

            <div
              className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"
              dir="ltr"
            >
              <Mail className="size-3.5" />
              {EMAIL}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-signal/15"
              >
                {copied ? (
                  <ClipboardCheck className="size-4 text-ok" />
                ) : (
                  <Clipboard className="size-4" />
                )}
                {copied
                  ? t({ ar: "تم النسخ", en: "Copied" })
                  : t({ ar: "نسخ الرسالة", en: "Copy message" })}
              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface-2/40 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-signal/40"
              >
                <MessageCircle className="size-4" />
                {t({ ar: "واتساب", en: "WhatsApp" })}
              </button>

              <button
                type="button"
                onClick={() => attemptMailto(fallback.subject, fallback.body)}
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface-2/40 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-signal/40"
              >
                <RotateCcw className="size-4" />
                {t({ ar: "حاول مرة ثانية", en: "Try again" })}
              </button>
            </div>
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
                disabled={sending}
                className="group mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_18px_45px_-20px_var(--signal)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-18px_var(--signal)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {t({ ar: "جارٍ المحاولة…", en: "Trying…" })}
                  </>
                ) : (
                  <>
                    <Send className="size-4 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                    {t(m.submit)}
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
