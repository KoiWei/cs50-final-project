import RevealContent from "@/components/ReavealContent";

/* Define the props for the Icons component, specifying the required icon name and size. */
type IconsProps = {
  name: string; // The name of the icon to display
  size: number; // The size of the icon in pixels
};

function Icons({ name, size }: IconsProps) {
  const svgStyling =
    "transition duration-300 fill-[#84645c] dark:fill-darkPrimary-900 hover:opacity-70";
  /* Common styling for all SVG icons, including transition effects and theme-based colors. */

  const icons: { [key: string]: JSX.Element } = {
    /* Define the available icons using JSX. Each key corresponds to an icon name. */
    github: (
      <svg
        height={size}
        viewBox="0 0 42 40"
        xmlns="http://www.w3.org/2000/svg"
        className={svgStyling}
      >
        <path d="M18.3568 0.142794C8.82562..." />
      </svg>
    ),
    linkedin: (
      <svg
        height={size}
        viewBox="0 0 41 40"
        xmlns="http://www.w3.org/2000/svg"
        className={svgStyling}
      >
        <path d="M35.9115 0H4.80039..." />
      </svg>
    ),
    mail: (
      <svg
        height={size}
        viewBox="0 0 38 30"
        xmlns="http://www.w3.org/2000/svg"
        className={svgStyling}
      >
        <path d="M4.25 0C2.33 0..." />
      </svg>
    ),
    lien: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,256,256"
        height={size}
        className={svgStyling}
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M5,3c-1.105,0 -2,0.895..." />
        </g>
      </svg>
    ),
  };

  /* Render the icon based on the provided name prop. */
  return <>{icons[name]}</>;
}

export default Icons;
