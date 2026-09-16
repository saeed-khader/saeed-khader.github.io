import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { CTAButton, MetaLabel, Reveal, Section, SectionHeading } from "./primitives";
import { CopyEmailButton } from "./CopyEmailButton";
import { useLang } from "@/lib/i18n";
import { content, mailto } from "@/data/portfolio";

/* ---------------- HERO ---------------- */

export function Hero({ onOpenModal, onOpenCv }: { onOpenModal: () => void; onOpenCv: () => void }) {
  const { t } = useLang();
  const e = content.education;

  return (
    <section
      id="home"
      className="atmos relative overflow-hidden px-5 pt-32 pb-14 sm:px-8 md:pt-36 md:pb-20 lg:px-12"
    >
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <div className="character-stage relative mx-auto flex w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[2rem] border border-signal/20 bg-surface/55 p-12 shadow-[0_30px_90px_-45px_var(--signal)] sm:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,color-mix(in_oklab,var(--signal)_18%,transparent),transparent_55%)]" />
              <img
                src="/brand/logo-sk.webp"
                alt="شعار سعيد خضر الزهراني — SK"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_20px_45px_color-mix(in_oklab,var(--signal)_35%,transparent)]"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2" dir="rtl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/5 px-4 py-1.5 text-xs font-medium text-signal">
                  <span aria-hidden className="status-dot size-1.5 rounded-full bg-ok" />
                  {t(content.ui.availability)}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/25 bg-signal/5 px-3.5 py-1.5 text-[0.7rem] font-medium text-signal">
                  <GraduationCap className="size-3.5" />
                  {t(content.ui.freshGrad)}
                </span>
              </div>
            </Reveal>
            <Reveal delay={80} className="mt-7">
              <MetaLabel>{t(content.hero.kicker)}</MetaLabel>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="hero-name display-xl mt-4 max-w-3xl text-foreground">
                {t(content.name)}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-lg font-semibold text-signal sm:text-xl">
                {t(content.heroTagline)}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="body-lg mt-6 max-w-2xl text-muted-foreground">
                أساعد في حل المشكلات التقنية، دعم المستخدمين، وتشخيص أعطال الأنظمة والشبكات — مع
                خلفية أكاديمية في تقنية المعلومات وإدارة الشبكات وأمنها.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap gap-3">
                <CTAButton
                  size="lg"
                  onClick={() =>
                    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t(content.ui.exploreCta)} <ArrowRight className="size-4 rtl:rotate-180" />
                </CTAButton>
                <CTAButton size="lg" variant="outline" onClick={onOpenCv}>
                  <Download className="size-4" /> {t(content.ui.cvCta)}
                </CTAButton>
                <CTAButton size="lg" variant="outline" onClick={onOpenModal}>
                  <Mail className="size-4" /> {t(content.ui.contactCta)}
                </CTAButton>
              </div>
            </Reveal>

            <button
              type="button"
              onClick={() =>
                window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })
              }
              aria-label={t({ ar: "انزل للتعرف علي", en: "Scroll down to learn more" })}
              className="scroll-cue mx-auto mt-8 grid size-11 place-items-center rounded-full border border-signal/30 bg-signal/10 text-signal lg:hidden"
            >
              <ChevronDown className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={100}>
            <div className="panel lift p-5">
              <MetaLabel>GPA</MetaLabel>
              <p className="mt-3 font-mono text-3xl font-semibold">
                {e.gpa}
                <span className="text-sm text-muted-foreground"> / {e.gpaMax}</span>
              </p>
              <p className="mt-1 text-xs text-signal">{t(e.honors)}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="panel lift p-5">
              <MetaLabel>{t(content.experience.label)}</MetaLabel>
              <p className="mt-3 text-2xl font-bold">7 أشهر</p>
              <p className="mt-1 text-xs text-muted-foreground">نوفمبر 2025 — مايو 2026</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="panel lift p-5">
              <MetaLabel>{t(e.label)}</MetaLabel>
              <p className="mt-3 text-lg font-bold">{t(e.degree)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t(e.university)} · {e.year}
              </p>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="panel lift p-5">
              <MetaLabel>PROJECT</MetaLabel>
              <p className="mt-3 text-2xl font-bold text-signal">MyFCITR</p>
              <p className="mt-1 text-xs text-muted-foreground">
                منصة رقمية لخدمات الطلاب الأكاديمية
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="tool-strip mt-4 panel flex flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 py-4 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">التقنيات والأدوات</span>
            <span>Windows</span>
            <span>Linux</span>
            <span>Networking</span>
            <span>Troubleshooting</span>
            <span>Microsoft 365</span>
            <span>Python</span>
            <span>SQL Server</span>
            <span>Git</span>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <button
            type="button"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="scroll-cue group mx-auto mt-12 flex flex-col items-center gap-1.5"
            aria-label={t({ ar: "انزل للتعرف علي", en: "Scroll down to learn more" })}
          >
            <span className="scroll-cue-text text-xs font-semibold tracking-wide text-signal">
              {t({ ar: "انزل للتعرف علي", en: "Scroll to learn more" })}
            </span>
            <ChevronDown className="size-5 text-signal" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <Section id="about" label={t(content.about.label)}>
      <SectionHeading title={t(content.about.title)} lead={t(content.about.philosophy)} />
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {content.about.body.map((p, i) => (
          <Reveal key={i} delay={i * 110}>
            <div className="relative ps-5">
              <span aria-hidden className="absolute inset-y-1 start-0 w-px bg-signal/30" />
              <p className="text-sm leading-relaxed text-muted-foreground">{t(p)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- EXPERIENCE ---------------- */

export function Experience({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLang();
  return (
    <Section id="experience" label={t(content.experience.label)}>
      <SectionHeading title={t(content.experience.title)} />
      <div className="mt-12 space-y-5">
        {content.experience.items.map((item, i) => (
          <Reveal key={i} delay={i * 110}>
            <article className="panel lift p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="display-md text-foreground">{t(item.title)}</h3>
                  <p className="mt-1.5 text-sm text-signal">{t(item.org)}</p>
                </div>
                <span className="meta-label">{t(item.period)}</span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground/80">{t(item.meta)}</p>
              {item.points.length ? (
                <>
                  <div className="my-6 h-px bg-border/70" />
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-signal/70"
                        />
                        {t(p)}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function InlineCta({ text, onOpenModal }: { text: string; onOpenModal: () => void }) {
  const { t } = useLang();
  return (
    <Reveal delay={120}>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface/40 px-6 py-5">
        <p className="text-sm text-foreground">{text}</p>
        <CTAButton onClick={onOpenModal}>
          {t(content.ui.sendOpportunity)}
          <ArrowRight className="size-4 rtl:rotate-180" />
        </CTAButton>
      </div>
    </Reveal>
  );
}

/* ---------------- SKILLS ---------------- */

export function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" label={t(content.skills.label)}>
      <SectionHeading title={t(content.skills.title)} />
      <div className="mt-12 space-y-12">
        {content.skills.groups.map((g, gi) => (
          <div key={gi}>
            <Reveal>
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-semibold tracking-wide text-foreground">{t(g.name)}</h3>
                <span aria-hidden className="h-px flex-1 bg-border/70" />
                <span className="meta-label">{String(g.items.length).padStart(2, "0")}</span>
              </div>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="panel lift h-full p-5">
                    <p className="text-sm font-medium text-foreground">{t(it.n)}</p>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      {t(it.d)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROCESS ---------------- */

export function Process() {
  const { t } = useLang();
  return (
    <Section label={t(content.process.label)} className="atmos">
      <SectionHeading title={t(content.process.title)} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.process.steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="panel lift h-full p-6">
              <span className="font-mono text-xs text-signal">{s.n}</span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{t(s.t)}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{t(s.d)}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <ol className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
          {content.process.flow.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-xs text-muted-foreground">
                {t(f)}
              </span>
              {i < content.process.flow.length - 1 ? (
                <span aria-hidden className="size-1.5 rounded-full bg-signal/45" />
              ) : null}
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

/* ---------------- PROJECT ---------------- */

export function Project({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLang();
  const p = content.project;
  return (
    <Section id="project" label={t(p.label)}>
      <SectionHeading title={p.name} lead={t(p.title)} />
      <Reveal delay={100}>
        <p className="mt-5 max-w-2xl text-sm text-muted-foreground/85">{t(p.context)}</p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {p.blocks.map((b, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="panel lift h-full p-6">
              <MetaLabel>{t(b.k)}</MetaLabel>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(b.v)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {p.modules.map((m, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="panel lift h-full p-6">
              <h3 className="text-base font-semibold text-foreground">{t(m.t)}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{t(m.d)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CERTIFICATIONS + AI ---------------- */

export function Certifications() {
  const { t } = useLang();
  return (
    <Section id="certifications" label={t(content.certifications.label)}>
      <SectionHeading title={t(content.certifications.title)} />
      <div className="mt-12 overflow-hidden rounded-2xl border border-border/80 bg-surface/25">
        {content.certifications.items.map((c, i) => (
          <Reveal as="div" key={i} delay={i * 60}>
            <div className="group flex items-center justify-between gap-5 border-b border-border/70 px-5 py-5 last:border-b-0 sm:px-6">
              <div className="flex min-w-0 items-center gap-4">
                <span className="font-mono text-xs text-signal/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium text-foreground transition-colors group-hover:text-signal">
                  {t(c.t)}
                </p>
              </div>
              <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">
                {t(c.i)}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="panel mt-12 p-6 sm:p-8">
          <MetaLabel>{t(content.ai.label)}</MetaLabel>
          <h3 className="mt-4 display-md text-foreground">{t(content.ai.title)}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t(content.ai.body)}
          </p>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground/75">
            {t(content.ai.note)}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {content.ai.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-surface-2/40 px-3.5 py-1.5 text-xs text-muted-foreground"
              >
                {t(tag)}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- HIRE MATCH ---------------- */

export function HireMatch() {
  const { t } = useLang();
  const [active, setActive] = useState(content.hire.options[0]!.k);
  const current = content.hire.options.find((o) => o.k === active)!;

  return (
    <Section label={t(content.hire.label)} className="atmos">
      <SectionHeading title={t(content.hire.title)} lead={t(content.hire.cardHint)} />
      <Reveal delay={100}>
        <div className="panel mt-12 p-6 sm:p-8">
          <h3 className="text-base font-semibold text-foreground">{t(content.hire.cardTitle)}</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {content.hire.options.map((o) => (
              <button
                key={o.k}
                type="button"
                onClick={() => setActive(o.k)}
                aria-pressed={active === o.k}
                className={`rounded-full border px-4 py-2 text-xs transition-all duration-300 ${
                  active === o.k
                    ? "border-signal/50 bg-signal/10 text-foreground"
                    : "border-border bg-surface-2/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(o.label)}
              </button>
            ))}
          </div>
          <div className="my-7 h-px bg-border/70" />
          <p className="text-sm leading-relaxed text-foreground">{t(current.answer)}</p>
          <div className="mt-6">
            <CTAButton href={mailto(t(current.subject))}>
              <Mail className="size-4" />
              {t(content.ui.sendOpportunity)}
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- CONTACT + FOOTER ---------------- */

export function Contact({
  onOpenModal,
  onOpenCv,
}: {
  onOpenModal: () => void;
  onOpenCv: () => void;
}) {
  const { t } = useLang();
  return (
    <Section id="contact" label={t(content.contact.label)} className="atmos">
      <Reveal>
        <h2 className="display-lg max-w-3xl text-foreground">{t(content.cta.beforeFooter)}</h2>
      </Reveal>
      <Reveal delay={90}>
        <p className="body-lg mt-5 max-w-2xl text-muted-foreground">
          {t(content.contact.statement)}
        </p>
      </Reveal>
      <Reveal delay={160}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <CTAButton size="lg" onClick={onOpenModal}>
            {t(content.contact.cta)}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </CTAButton>
          <CopyEmailButton size="lg" />
          <CTAButton size="lg" variant="outline" onClick={onOpenCv}>
            <Download className="size-4" />
            {t(content.ui.cvCtaPdf)}
          </CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">{t(content.footer.tagline)}</p>
        <p className="meta-label">{t(content.footer.copyright)}</p>
      </div>
    </footer>
  );
}

export function FloatingCta() {
  return null;
}
