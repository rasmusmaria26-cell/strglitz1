import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { fadeUp, staggerContainerFast, viewport } from "@/lib/motion";

const reels = [
  { tag: "Acting", id: "mZkXKke6DX4", href: "https://youtube.com/shorts/mZkXKke6DX4" },
  { tag: "Lifestyle", id: "VbGao1d8ATE", href: "https://youtube.com/shorts/VbGao1d8ATE" },
  { tag: "Prank", id: "PUCykOaByCg", href: "https://youtube.com/shorts/PUCykOaByCg" },
  { tag: "Comedy", id: "ipJ2GkMESmM", href: "https://youtube.com/shorts/ipJ2GkMESmM" },
  { tag: "Singing", id: "YJv8jGHQ0hA", href: "https://youtube.com/shorts/YJv8jGHQ0hA" },
  { tag: "Humanity", id: "yLxAwuO_QV8", href: "https://youtube.com/shorts/yLxAwuO_QV8" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Reels() {
  return (
    <section id="reels" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Follow My Journey</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Viral <span className="text-gold italic">Shorts</span>
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Real moments, real reactions — watch the content that connects.
            </p>
          </div>
          <motion.a
            href="https://youtube.com/@strglitz"
            target="_blank" rel="noreferrer"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            whileHover={{ x: 4 }}
          >
            View all on YouTube →
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3"
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              variants={cardVariant}
              whileHover={{ y: -6, boxShadow: "0 0 40px -10px oklch(0.82 0.14 78 / 50%)" }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Tag pill */}
              <div className="absolute left-3 top-3 z-10 rounded-full bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-md">
                {reel.tag}
              </div>

              {/* YouTube embed */}
              <div className="aspect-[9/16] w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${reel.id}?rel=0&modestbranding=1`}
                  title={`${reel.tag} short`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Watch overlay */}
              <motion.a
                href={reel.href}
                target="_blank" rel="noreferrer"
                className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-background/90 to-transparent px-3 py-4 text-xs font-semibold text-primary"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                Open on YouTube ↗
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
