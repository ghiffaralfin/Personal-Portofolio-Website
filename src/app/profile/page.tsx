import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page",
  description:
    "Provides a comprehensive overview of my professional background, including a concise summary, easy-to-access contact information, a showcase of my soft skills, and a detailed list of my technical expertise across various stacks.",
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
