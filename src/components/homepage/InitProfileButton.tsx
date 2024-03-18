import Link from "next/link";

export default function InitProfileButton() {
  return (
    <Link href="/profile">
      <button
        type="button"
        className="before:transition-all before:ease-in-out before:duration-200 before:content-[''] before:bg-dark before:-z-[1] before:h-full before:absolute before:top-0 before:left-[unset] before:right-0 before:w-0 hover:before:left-0 hover:before:right-[unset] hover:before:w-full focus:before:left-0 focus:before:right-[unset] focus:before:w-full relative z-[1] transition-all ease-in-out duration-200 bg-transparent text-dark hover:text-light focus:text-light border-2 border-dark shadow-lg shadow-dark  font-button font-normal text-center text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] px-10 py-3 md:px-16 md:py-4 mt-12 sm:mt-4"
      >
        Init. Profile
      </button>
    </Link>
  );
}
