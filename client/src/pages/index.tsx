import { AiAssistantCTA } from "@/components/ai/AiAssistantCTA";
import { SEO } from "@/components/common/SEO";
import { BestSellers } from "@/components/home/BestSellers";
import { BrandStory } from "@/components/home/BrandStory";
import { Categories } from "@/components/home/Categories";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <SEO canonicalPath="/" />
      <Hero />
      <Categories />
      <BestSellers />
      <AiAssistantCTA />
      <BrandStory />
    </>
  );
}
