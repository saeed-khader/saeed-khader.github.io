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
            "premium-panel accent-ring atmos relative z-10 m-auto w-full max-w-md p-7 text-center transition-transform duration-300 sm:p-9",
            shakeSeed > 0 && "animate-[gate-shake_0.4s_ease-in-out]",
            closing && "scale-95 opacity-0",
          )}
        >
          <span className="mx-auto grid size-14 place-items-center rounded-full border border-signal/30 bg-signal/10 text-signal">
            <ShieldCheck className="size-7" />
          </span>

          <span className="meta-label mt-4 block">تحقق أمني · Security check</span>
          <h2 className="display-md mt-2 text-foreground">خطوة وحدة بسيطة قبل الدخول</h2>
          <p dir="ltr" className="mt-1 text-sm text-muted-foreground">
            One quick step before you enter
          </p>

          <p className="mt-4 text-base leading-relaxed text-foreground">
            اضغط على شكل{" "}
            <span className="inline-flex items-center gap-1.5 text-lg font-bold text-signal">
              <TargetIcon className="size-5" />
              {target.label}
            </span>{" "}
            بالأسفل
          </p>
          <p dir="ltr" className="mt-1 text-sm text-muted-foreground">
            Tap the{" "}
            <span className="inline-flex items-center gap-1 font-bold text-signal">
              <TargetIcon className="size-4" />
              {target.en}
            </span>{" "}
            shape below
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {order.map(({ key, Icon, label, en }) => (
              <button
                key={key}
                type="button"
                onClick={() => handlePick(key)}
                aria-label={`${label} - ${en}`}
                data-shape={key}
                className="group grid aspect-square place-items-center rounded-2xl border border-border bg-surface-2/40 text-foreground transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:bg-surface-2/70 hover:text-signal"
              >
                <Icon className="size-9 transition-transform group-hover:scale-110" />
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
