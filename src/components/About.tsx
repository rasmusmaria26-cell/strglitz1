import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, staggerContainerFast, viewport } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">About</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            The Story Behind <span className="text-gold italic">Strglitz</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-card rounded-3xl p-8 sm:p-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.15 }}
        >
          <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
            Abdullah, known online as{" "}
            <span className="text-gold italic">Strglitz</span>, is a rising
            Instagram influencer and content creator who gained attention in
            2024 through engaging and relatable videos.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            His content blends acting, spot comedy, prank videos, singing, and
            humanity-driven stories — connecting deeply with audiences across
            cultures. Beyond the screen, Abdullah is also an entrepreneur,
            building fashion brands that reflect confidence, style, and
            individuality.
          </p>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-3"
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              { label: "Founded", value: "2024" },
              { label: "Based In", value: "Worldwide" },
              { label: "Niche", value: "Lifestyle • Comedy" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ scale: 1.04, borderColor: "var(--color-primary)" }}
                className="rounded-2xl border border-border/60 bg-card/40 p-5 cursor-default"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                <p className="mt-1 font-display text-xl text-gold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
