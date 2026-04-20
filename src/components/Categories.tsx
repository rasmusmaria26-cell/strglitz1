import { motion } from "framer-motion";
import { Drama, Laugh, Music, Sparkles, Heart } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/motion";

const categories = [
  { icon: Drama, title: "Acting", desc: "Short-form performances showcasing emotions, storytelling, and character roles." },
  { icon: Laugh, title: "Spot Comedy", desc: "Relatable and spontaneous humor that resonates with everyday life." },
  { icon: Music, title: "Singing", desc: "Expressive musical content connecting with audience emotions." },
  { icon: Sparkles, title: "Prank Videos", desc: "Light-hearted entertainment with creative twists and surprises." },
  { icon: Heart, title: "Humanity", desc: "Videos that inspire kindness, awareness, and social responsibility." },
];

export function Categories() {
  return (
    <section id="content" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">What I Create</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Content <span className="text-gold italic">Categories</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group glass-card relative overflow-hidden rounded-3xl p-8 cursor-default"
              >
                <motion.div
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
                  whileHover={{ scale: 1.5, opacity: 0.3 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="relative">
                  <motion.div
                    className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary"
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold">{cat.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
