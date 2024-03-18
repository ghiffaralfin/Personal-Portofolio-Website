type btnProps = {
  targetSectionPosition: "top" | "bottom";
  section: string;
};

export default function ChangeSectionButton({
  targetSectionPosition,
  section,
}: btnProps) {
  const href = section.toLowerCase();

  let hoverTransitionClassName: string = "";

  if (targetSectionPosition === "bottom") {
    hoverTransitionClassName +=
      "before:left-0 before:top-[unset] before:bottom-0 before:h-0 group-hover:before:top-0 group-hover:before:bottom-[unset] group-hover:before:h-full focus:before:top-0 focus:before:bottom-[unset] focus:before:h-full";
  } else if (targetSectionPosition === "top") {
    hoverTransitionClassName +=
      "before:left-0 before:bottom-[unset] before:top-0 before:h-0 group-hover:before:bottom-0 group-hover:before:top-[unset] group-hover:before:h-full focus:before:bottom-0 focus:before:top-[unset] focus:before:h-full";
  }

  return (
    <a href={`#${href}`}>
      <section
        className={`sticky z-10 left-0 ${
          targetSectionPosition === "bottom" ? "bottom-0" : "top-0"
        } py-2`}
      >
        <div
          className="group w-[8rem] sm:w-[12rem]
            h-10 xl:h-12 bg-light shadow-md shadow-dark border-2 border-dark my-6 flex items-center"
        >
          <div
            className={`before:transition-all before:ease-in-out before:duration-200 before:content-[''] before:bg-dark before:-z-[1] before:w-full before:absolute ${hoverTransitionClassName} relative z-[1] transition-all ease-in-out duration-200 w-full h-full bg-light text-dark flex justify-center items-center`}
          >
            <p className="w-full font-button font-normal text-center text-dark group-hover:text-light text-[.95rem] sm:text-[1rem] lg:text-[1.125rem]">
              {section}
            </p>
            <div className="mx-3 xl:mx-4">
              <div
                className={`w-0 h-0 border-l-[.4rem] md:border-l-[.5rem] border-l-transparent border-r-[.4rem] md:border-r-[.5rem] border-r-transparent ${
                  targetSectionPosition === "bottom"
                    ? "border-t-[.4rem] md:border-t-[.7rem] border-t-dark group-hover:border-t-light"
                    : "border-b-[.4rem] md:border-b-[.7rem] border-b-dark group-hover:border-b-light"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </a>
  );
}
