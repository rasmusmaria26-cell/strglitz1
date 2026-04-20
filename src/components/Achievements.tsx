import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Briefcase } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/motion";

const items = [
  { icon: TrendingUp, title: "Viral Growth", text: "Multiple viral Instagram videos in 2024 reaching millions of viewers." },
  { icon: Users, title: "Engaged Community", text: "A loyal audience growing daily across reels, stories, and collaborations." },
  { icon: Award, title: "Multi-Genre Creator", text: "Recognized for versatility across acting, comedy, music, and humanity content." },
  { icon: Briefcase, title: "Fashion Entrepreneur", text: "Founder of VAT's — building two successful clothing brands in under a year." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Highlights</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="text-gold italic">Achievements</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{
                  y: -4,
                  borderColor: "var(--color-primary)",
                  backgroundColor: "oklch(0.18 0.012 60 / 70%)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex gap-5 rounded-2xl border border-border/60 bg-card/40 p-6 cursor-default"
              >
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
