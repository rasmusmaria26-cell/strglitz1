import { motion } from "framer-motion";

const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * -20,
}));

export function Background() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Dynamic particles using Framer Motion (more reliable than canvas in some SSR/Hydration setups) */}
            <div className="absolute inset-0 z-0">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-gold/30 blur-[2px]"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: p.left,
                            top: p.top,
                        }}
                        animate={{
                            y: [0, -150, 0, 150, 0],
                            x: [0, 80, 0, -80, 0],
                            opacity: [0.15, 0.5, 0.15],
                            scale: [1, 1.8, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Film grain overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    opacity: 0.025,
                    mixBlendMode: "overlay",
                }}
            />

            {/* Subtle global gradient mesh */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,_oklch(0.82_0.14_78_/_3%)_0%,_transparent_50%),radial-gradient(circle_at_80%_80%,_oklch(0.78_0.15_70_/_3%)_0%,_transparent_50%)]" />

            {/* Dot grid */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, oklch(0.82 0.14 78 / 8%) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    opacity: 0.2,
                    maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
                }}
            />
        </div>
    );
}
