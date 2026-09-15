import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span" | "p";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      className={cn("reveal", inView && "reveal-in", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

export function MetaLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("meta-label inline-flex items-center gap-2", className)}>
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-signal/75 shadow-[0_0_14px_-2px_var(--signal)]" />
      {children}
    </span>
  );
}

export function Section({
  id,
  children,
  className,
  label,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 lg:px-12", className)}
    >
      <div className="mx-auto w-full max-w-6xl">
        {label ? (
          <Reveal className="mb-8">
            <MetaLabel>{label}</MetaLabel>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  lead,
  className,
}: {
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <h2 className="display-lg text-foreground">{title}</h2>
      </Reveal>
      {lead ? (
        <Reveal delay={90}>
          <p className="body-lg mt-5 text-muted-foreground">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

type CtaProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  download?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit";
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 ease-out will-change-transform disabled:opacity-50";

const variants: Record<string, string> = {
  solid:
    "bg-signal text-accent-foreground hover:brightness-110 hover:shadow-[0_18px_50px_-20px_var(--signal)]",
  outline:
    "border border-border bg-surface/50 text-foreground hover:border-signal/45 hover:bg-surface-2/70",
  ghost: "text-muted-foreground hover:text-foreground",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

export function CTAButton({
  children,
  href,
  onClick,
  variant = "solid",
  size = "md",
  className,
  download,
  ariaLabel,
  type = "button",
}: CtaProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(download ? { download: "" } : {})}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
