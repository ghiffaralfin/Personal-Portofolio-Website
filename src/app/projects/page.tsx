import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Page",
  description:
    "Ghiffar has undertaken a range of projects, such as developing a bug reporting application, conducting performance testing of database encryption, crafting an AES/RSA encryption tool, performing organizational risk assessments, and deploying a DDOS attack application.",
};

import PageRedirectButton from "@/components/utility/PageRedirectButton";
import AnimatedProjectpage from "@/components/projectspage/AnimatedProjectpage";

export default function Projects() {
  return (
    <>
      <PageRedirectButton position="left" page="Profile" />
      <section className="absolute top-0 left-0 right-0">
        <AnimatedProjectpage />
      </section>
    </>
  );
}
