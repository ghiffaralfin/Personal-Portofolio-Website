"use client";

import LoaderSpinner from "@/components/utility/LoaderSpinner";

export default function Loading() {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <LoaderSpinner />
    </section>
  );
}
