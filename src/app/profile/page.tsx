import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page",
  description:
    "Provides a detailed look into Ghiffar's professional background, featuring a succinct summary, readily available contact information, a demonstration of Ghiffar's soft skills, and an exhaustive list of Ghiffar's technical proficiencies across different stacks.",
};

import HeroSection from "@/components/profilepage/HeroSection";
import SkillsSection from "@/components/profilepage/SkillsSection";
import PageRedirectButton from "@/components/utility/PageRedirectButton";

export default function Profile() {
  return (
    <>
      <PageRedirectButton position="right" page="Projects" />
      <section className="absolute w-full mt-16 sm:mt-20">
        <HeroSection />
        <SkillsSection />
      </section>
    </>
  );
}
