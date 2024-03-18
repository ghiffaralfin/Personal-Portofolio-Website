"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen flex flex-col gap-4 justify-center items-center bg-light font-normal scroll-smooth`}
      >
        <h2 className="text-dark text-[1.25rem]">Something went wrong!</h2>
        {error.digest && (
          <p className="container w-full text-justify">{error.digest}</p>
        )}
        <button
          className="transition-all ease-in-out duration-200 bg-light hover:bg-dark border border-dark hover:border-light text-dark hover:text-light text-[1rem] py-2 px-4 "
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
