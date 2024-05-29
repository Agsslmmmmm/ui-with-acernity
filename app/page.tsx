import Image from "next/image";
import styles from "./page.module.css";
import { LampDemo } from "@/components/ui/lamp";
import { FlipWordsDemo } from "@/components/ui/flip-words-demo";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/components/ui/hero";
import { BentoGridThirdDemo } from "@/components/ui/grid";
import { TabsDemo } from "@/components/ui/tabs-prod";
import { TypewriterEffect } from "@/components/ui/type-writer";
import { TypewriterEffectSmoothDemo } from "@/components/ui/type";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <TypewriterEffectSmoothDemo />
      <section className="mt-24 container px-4">
      <HeroParallax products={products}/>
      <FlipWordsDemo />
      <LampDemo />
      <BentoGridThirdDemo />
      <TabsDemo />
      </section>
    </main>
  );
}
