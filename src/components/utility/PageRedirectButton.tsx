import Link from "next/link";

type btnProps = {
  position: "left" | "right";
  page: string;
};

export default function PageRedirectButton({ position, page }: btnProps) {
  const href = page.toLowerCase();

  let hoverTransitionClassName: string = "";

  if (position === "right") {
    hoverTransitionClassName +=
      "before:left-[unset] before:right-0 before:w-0 group-hover:before:left-0 group-hover:before:right-[unset] group-hover:before:w-full focus:before:left-0 focus:before:right-[unset] focus:before:w-full";
  } else if (position === "left") {
    hoverTransitionClassName +=
      "before:right-[unset] before:left-0 before:w-0 group-hover:before:right-0 group-hover:before:left-[unset] group-hover:before:w-full focus:before:right-0 focus:before:left-[unset] focus:before:w-full";
  }

  return (
    <Link href={href}>
      <div
        className={`fixed z-10 group w-[8rem] sm:w-[12rem] ${
          position === "right" ? "right-0" : "left-0"
        } h-10 xl:h-12 bg-light shadow-md shadow-dark border-2 border-dark my-4 flex items-center`}
      >
        <div
          className={`before:transition-all before:ease-in-out before:duration-200 before:content-[''] before:bg-dark before:-z-[1] before:h-full before:absolute before:top-0 ${hoverTransitionClassName} relative z-[1] transition-all ease-in-out duration-200 w-full h-full bg-transparent text-dark flex justify-center items-center`}
        >
          {position === "right" && (
            <p className="w-full font-button font-normal text-center text-dark group-hover:text-light text-[.95rem] sm:text-[1rem] lg:text-[1.125rem]">
              {page}
            </p>
          )}
          <div className="mx-3 xl:mx-4">
            <div
              className={`w-0 h-0 border-t-[.4rem] md:border-t-[.5rem] border-t-transparent border-b-[.4rem] md:border-b-[.5rem] border-b-transparent ${
                position === "right"
                  ? "border-l-[.4rem] md:border-l-[.7rem] border-l-dark group-hover:border-l-light"
                  : "border-r-[.4rem]  md:border-r-[.7rem] border-r-dark group-hover:border-r-light"
              }`}
            ></div>
          </div>
          {position === "left" && (
            <p className="w-full font-button font-normal text-center text-dark group-hover:text-light text-[.95rem] sm:text-[1rem] lg:text-[1.125rem]">
              {page}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
