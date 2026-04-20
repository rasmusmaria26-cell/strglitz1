import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Categories } from "@/components/Categories";
import { Reels } from "@/components/Reels";
import { Business } from "@/components/Business";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Background } from "@/components/Background";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abdullah · Strglitz — Digital Creator & Influencer" },
      {
        name: "description",
        content:
          "Abdullah (Strglitz) — Instagram influencer crafting viral content through acting, comedy, singing, pranks, and humanity. Founder of VAT's Men Wear & VAT's Queen.",
      },
      { property: "og:title", content: "Abdullah · Strglitz" },
      {
        property: "og:description",
        content:
          "Make it simple. But significant. — Digital creator, storyteller, and entrepreneur.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen w-full bg-transparent overflow-x-hidden">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Categories />
        <Reels />
        <Business />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
