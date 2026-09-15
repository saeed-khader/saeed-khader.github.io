import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CTAButton } from "./primitives";
import { CopyEmailButton } from "./CopyEmailButton";
import { useLang } from "@/lib/i18n";
import { content, mailto, MAIL_SUBJECT } from "@/data/portfolio";

const field =
  "w-full rounded-xl border border-input bg-surface-2/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-signal/50";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    type: "",
    email: "",
    message: "",
  });

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

  const body = [
    `${t(content.modal.fields.name)}: ${form.name}`,
    `${t(content.modal.fields.company)}: ${form.company}`,
    `${t(content.modal.fields.role)}: ${form.role}`,
    `${t(content.modal.fields.type)}: ${form.type}`,
    `${t(content.modal.fields.email)}: ${form.email}`,
    "",
    form.message,
  ].join("\n");

  const subject = form.company ? `${MAIL_SUBJECT} — ${form.company}` : MAIL_SUBJECT;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label={t(content.ui.close)}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t(content.modal.title)}
        className="panel relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="display-md text-foreground">{t(content.modal.title)}</h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {t(content.modal.hint)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t(content.ui.close)}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-surface-2/50 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <form
          className="mt-7 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto(subject, body);
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              className={field}
              placeholder={t(content.modal.fields.name)}
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              placeholder={t(content.modal.fields.company)}
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <input
              className={field}
              placeholder={t(content.modal.fields.role)}
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
            <input
              className={field}
              placeholder={t(content.modal.fields.type)}
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            />
          </div>
          <input
            className={field}
            type="email"
            placeholder={t(content.modal.fields.email)}
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className={`${field} min-h-28 resize-y`}
            placeholder={t(content.modal.fields.message)}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <CTAButton type="submit" size="lg">
              {t(content.modal.submit)}
            </CTAButton>
            <CopyEmailButton />
          </div>
        </form>
      </div>
    </div>
  );
}
