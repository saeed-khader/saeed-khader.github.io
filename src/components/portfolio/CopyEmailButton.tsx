import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { CTAButton } from "./primitives";
import { useLang } from "@/lib/i18n";
import { content, EMAIL } from "@/data/portfolio";

export function CopyEmailButton({
  variant = "outline",
  size = "md",
}: {
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
}) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(id);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
  }

  return (
    <span className="relative inline-flex">
      <CTAButton variant={variant} size={size} onClick={copy}>
        {copied ? <Check className="size-4 text-signal" /> : <Copy className="size-4" />}
        {t(content.ui.copyEmail)}
      </CTAButton>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute -top-11 start-0 whitespace-nowrap rounded-full border border-border bg-surface-2/95 px-4 py-2 text-xs text-foreground shadow-[var(--shadow-lift)] transition-all duration-300 ${
          copied ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {copied ? t(content.ui.copied) : ""}
      </span>
    </span>
  );
}
