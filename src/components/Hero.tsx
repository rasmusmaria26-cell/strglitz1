import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";
import bgGradient from "@/assets/bg-gradient.jpg";
import { Instagram, ArrowDown } from "lucide-react";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  viewport,
} from "@/lib/motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const totalFrames = Math.round(duration / 16);
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round(target * (frame / totalFrames)));
      if (frame === totalFrames) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function Stat({
  val,
  suffix = "",
  label,
}: {
  val: number | string;
  suffix?: string;
  label: string;
}) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(typeof val === "number" ? val : 0, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setTriggered(true); obs.disconnect(); }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-bold text-gold">
        {typeof val === "number" ? `${count}${suffix}` : val}
      </div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

const orbs = [
  { size: 240, top: "2%", left: "-5%", color: "oklch(0.82 0.14 78 / 12%)", dur: 10, delay: 0 },
  { size: 200, bottom: "5%", right: "-5%", color: "oklch(0.78 0.15 70 / 10%)", dur: 14, delay: 3 },
  { size: 180, top: "30%", left: "60%", color: "oklch(0.82 0.14 78 / 8%)", dur: 8, delay: 6 },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Floating orbs */}
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            background: o.color,
            top: o.top,
            left: o.left,
            bottom: (o as any).bottom,
            right: (o as any).right,
          }}
          animate={{
            scale: [1, 1.15, 0.92, 1],
            x: [0, 20, -15, 0],
            y: [0, -20, 15, 0],
            opacity: [0.5, 0.7, 0.4, 0.5],
          }}
          transition={{
            duration: o.dur,
            delay: o.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <img src={bgGradient} alt="" aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        width={1920} height={1080}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="container relative mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          className="order-2 lg:order-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Digital Creator
          </motion.p>

          <motion.h1 variants={fadeUp}
            className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Abdullah
            <br />
            <span className="text-gold italic">Strglitz</span>
          </motion.h1>

          <motion.p variants={fadeUp}
            className="mt-6 max-w-md font-display text-xl italic text-muted-foreground sm:text-2xl"
          >
            "Make it simple. But significant."
          </motion.p>

          <motion.p variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            Influencer &amp; storyteller crafting viral moments through acting,
            comedy, music, and meaningful content.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="https://instagram.com/itzz_abbu"
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px oklch(0.82 0.14 78 / 50%)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </motion.a>
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
              whileHover={{ scale: 1.04, borderColor: "var(--color-primary)" }}
              whileTap={{ scale: 0.97 }}
            >
              Discover More
              <ArrowDown className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp}
            className="mt-12 flex items-center gap-8 border-t border-border/50 pt-8"
          >
            <Stat val={5} suffix="+" label="Content Genres" />
            <div className="h-10 w-px bg-border" />
            <Stat val={2} label="Brands Launched" />
            <div className="h-10 w-px bg-border" />
            <Stat val="∞" label="Stories Told" />
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          className="order-1 lg:order-2"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-accent/20 blur-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-primary/20 shadow-[var(--shadow-cinematic)]">
              <motion.img
                src={heroPortrait}
                alt="Abdullah — Strglitz portrait"
                className="h-full w-full object-cover"
                width={1024} height={1280}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">@itzz_abbu</p>
                <p className="mt-1 font-display text-lg">Cinematic Creator</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
