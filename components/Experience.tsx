import RevealContent from "@/components/ReavealContent";

/* Define the type for Experience component props, ensuring proper type safety. */
type ExperienceProps = {
  post: string; // Job title or role
  dateStart: number; // Start year of the experience
  dateEnd?: number; // Optional end year, defaults to "Auj." (current)
  company: string; // Company name
  children?: React.ReactNode; // Additional content to be displayed
};

/* The Experience component formats and displays a professional experience card. */
function Experience({
  post,
  company,
  dateStart,
  dateEnd,
  children,
}: ExperienceProps) {
  return (
    <>
      <RevealContent
        /* Styling for the experience card: responsive layout, theme-based colors, and padding. */
        style="flex flex-col md:flex-row md:gap-6 gap-1 bg-lightSecondary-300 dark:bg-[#163E6C] shadow-lightCard dark:shadow-darkCard rounded-xl p-6 sm:p-8 md:p-10 lg:w-10/12 self-center"
      >
        <>
          {/* Display the experience duration, with a fallback to "Auj." if no end date is provided. */}
          <div className="flex flex-none text-lightPrimary-700 dark:text-darkPrimary-700">
            {dateStart} - {dateEnd ? dateEnd : "Auj."}
          </div>

          {/* Display job title, company name, and additional content. */}
          <div className="flex flex-col gap-3">
            <h3 className="mb-2 flex font-openSans text-lg font-bold text-lightPrimary-900 dark:text-darkPrimary-900">
              {post} | {company}
            </h3>
            <div className="flex flex-col gap-6 dark:text-[#BCD2EF]">
              {children}
            </div>
          </div>
        </>
      </RevealContent>
    </>
  );
}

export default Experience;
