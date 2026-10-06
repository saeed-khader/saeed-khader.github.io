import { useEffect, useMemo, useState } from "react";
import { Circle, Diamond, Hexagon, ShieldCheck, Square, Star, Triangle } from "lucide-react";
import { cn } from "@/lib/utils";

const SHAPES = [
  { key: "circle", Icon: Circle, label: "دائرة", en: "Circle" },
  { key: "square", Icon: Square, label: "مربع", en: "Square" },
  { key: "triangle", Icon: Triangle, label: "مثلث", en: "Triangle" },
  { key: "diamond", Icon: Diamond, label: "معين", en: "Diamond" },
  { key: "hexagon", Icon: Hexagon, label: "سداسي", en: "Hexagon" },
  { key: "star", Icon: Star, label: "نجمة", en: "Star" },
] as const;

const STORAGE_KEY = "saeed-human-verified";

type Shape = (typeof SHAPES)[number];

function shuffle<T>(arr: readonly T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = tmp;
  }
  return copy;
}

export function HumanGate({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false);
  const [passed, setPassed] = useState(false);
  const [closing, setClosing] = useState(false);
  const [shakeSeed, setShakeSeed] = useState(0);
  const [order, setOrder] = useState<Shape[]>(SHAPES as unknown as Shape[]);
  const [targetKey, setTargetKey] = useState<Shape["key"]>(SHAPES[0].key);

  useEffect(() => {
    const already = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    if (already) {
      setPassed(true);
    } else {
      const shuffled = shuffle(SHAPES);
      setOrder(shuffled);
      setTargetKey(shuffled[Math.floor(Math.random() * shuffled.length)]!.key);
    }
    setChecked(true);
    document.body.style.overflow = already ? "" : "hidden";
  }, []);

  const target = useMemo(() => SHAPES.find((s) => s.key === targetKey) ?? SHAPES[0], [targetKey]);

  const handlePick = (key: string) => {
    if (key === targetKey) {
      setClosing(true);
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      document.body.style.overflow = "";
      window.setTimeout(() => setPassed(true), 480);
      return;
    }
    setShakeSeed((s) => s + 1);
    const reshuffled = shuffle(SHAPES);
    setOrder(reshuffled);
    setTargetKey(reshuffled[Math.floor(Math.random() * reshuffled.length)]!.key);
  };

  if (!checked || passed) return <>{children}</>;

  const TargetIcon = target.Icon;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[200] flex overflow-y-auto bg-background px-4 py-4 transition-opacity duration-500",
          closing ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
        <div
          key={shakeSeed}
          className={cn(
            "premium-panel accent-ring atmos relative z-10 m-auto w-full max-w-lg p-6 text-center [@media(max-height:700px)]:p-4 transition-transform duration-300 sm:p-9",
            shakeSeed > 0 && "animate-[gate-shake_0.4s_ease-in-out]",
            closing && "scale-95 opacity-0",
          )}
        >
          <span className="mx-auto grid size-14 place-items-center rounded-full border border-signal/30 bg-signal/10 text-signal [@media(max-height:700px)]:hidden">
            <ShieldCheck className="size-7" />
          </span>

          <span className="mt-4 block text-sm font-semibold tracking-wide text-muted-foreground [@media(max-height:700px)]:mt-0">
            تحقق أمني · Security check
          </span>
          <h2 className="mt-2 text-2xl font-bold leading-snug text-foreground sm:text-3xl [@media(max-height:700px)]:mt-1 [@media(max-height:700px)]:text-xl">
            خطوة وحدة بسيطة قبل الدخول
          </h2>
          <p dir="ltr" className="mt-1 text-lg font-medium text-muted-foreground">
            One quick step before you enter
          </p>

          <div className="mt-6 rounded-2xl border border-signal/30 bg-signal/10 px-4 py-5 [@media(max-height:700px)]:mt-3 [@media(max-height:700px)]:py-3">
            <p className="text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
              اضغط على هذا الشكل بالأسفل
            </p>
            <div className="my-4 flex flex-col items-center gap-3 [@media(max-height:700px)]:my-2 [@media(max-height:700px)]:gap-1">
              <span className="grid size-20 [@media(max-height:700px)]:size-14 place-items-center rounded-full border-2 border-signal/50 bg-background/60 text-signal shadow-[0_0_40px_-10px_var(--signal)]">
                <TargetIcon
                  className="size-11 [@media(max-height:700px)]:size-8"
                  strokeWidth={2.2}
                />
              </span>
              <span className="text-3xl font-extrabold text-signal">{target.label}</span>
              <span dir="ltr" className="-mt-1 text-xl font-bold text-signal/90">
                {target.en}
              </span>
            </div>
            <p
              dir="ltr"
              className="text-lg font-semibold leading-relaxed text-foreground sm:text-xl"
            >
              Tap this shape below
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 [@media(max-height:700px)]:mt-3 [@media(max-height:700px)]:gap-3">
            {order.map(({ key, Icon, label, en }) => (
              <button
                key={key}
                type="button"
                onClick={() => handlePick(key)}
                aria-label={`${label} - ${en}`}
                data-shape={key}
                className="group grid aspect-square place-items-center rounded-2xl border-2 border-border bg-surface-2/40 text-foreground transition-all hover:-translate-y-0.5 hover:border-signal/60 hover:bg-surface-2/70 hover:text-signal active:scale-95"
              >
                <Icon
                  className="size-12 transition-transform group-hover:scale-110"
                  strokeWidth={2}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none h-0 overflow-hidden opacity-0">
        {children}
      </div>
    </>
  );
}
