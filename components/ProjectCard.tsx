import RevealContent from "@/components/ReavealContent";
import Image from "next/image";
import Icons from "./Icons";
import TechnoBadge from "./TechnoBadge";

/* Props definition for the ProjectCard component */
type ProjectCardProps = {
  name: string; // Name of the project
  description: string; // Description of the project
  directLink?: string; // Optional direct link to the project
  githubLink?: string; // Optional GitHub link for the project
  technologies: string[]; // List of technologies used in the project
  imageSrc: string; // Path to the project's image
  imagePosition: "left" | "right"; // Position of the image (left or right)
};

/* ProjectCard component: Displays project details with an optional image and links */
function ProjectCard({
  name,
  description,
  directLink,
  githubLink,
  imageSrc,
  imagePosition,
  technologies = [],
}: ProjectCardProps) {
  /* Render the card with the image on the left */
  if (imagePosition === "left") {
    return (
      <RevealContent style="flex items-center relative flex-row-reverse xl:min-h-[500px]">
        <>
          {/* Card content: Title, description, technologies, and links */}
          <div className="z-10 flex h-min w-full flex-col gap-6 rounded-[10px] bg-[#dcccbc] p-11 shadow-lightCard dark:bg-[#08203E] dark:shadow-darkCard md:w-7/12">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-[#4B5563]">{description}</p>
            <div className="flex flex-wrap gap-x-2">
              {technologies.map((technology, index) => (
                <TechnoBadge key={index} sectionName={technology} />
              ))}
            </div>
            {/* Links to external resources (if provided) */}
            {(directLink || githubLink) && (
              <div className="flex items-center gap-4">
                {directLink && (
                  <a href={directLink} target="_blank">
                    <Icons name="lien" size={30} />
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank">
                    <Icons name="github" size={25} />
                  </a>
                )}
              </div>
            )}
          </div>
          {/* Image displayed on the left */}
          <div className="left-0 top-1/2 hidden w-7/12 -translate-y-1/2 md:absolute md:block">
            <Image
              alt={`Screenshot of the project titled ${name}`}
              height={800}
              width={800}
              src={imageSrc}
              className="rounded-[10px] brightness-75"
            />
          </div>
        </>
      </RevealContent>
    );
  }

  /* Render the card with the image on the right */
  if (imagePosition === "right") {
    return (
      <RevealContent style="flex items-center relative xl:min-h-[500px]">
        <>
          {/* Image displayed on the right */}
          <div className="right-0 top-1/2 hidden w-7/12 -translate-y-1/2 md:absolute md:block">
            <Image
              alt={`Screenshot of the project titled ${name}`}
              height={800}
              width={800}
              src={imageSrc}
              className="rounded-[10px] brightness-75"
            />
          </div>
          {/* Card content: Title, description, technologies, and links */}
          <div className="z-10 flex h-min w-full flex-col gap-6 rounded-[10px] bg-[#dcccbc] p-11 shadow-lightCard dark:bg-[#08203E] dark:shadow-darkCard md:w-7/12">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-[#4B5563]">{description}</p>
            <div className="flex flex-wrap gap-x-2">
              {technologies.map((technology, index) => (
                <TechnoBadge key={index} sectionName={technology} />
              ))}
            </div>
            {/* Links to external resources (if provided) */}
            {(directLink || githubLink) && (
              <div className="flex items-center gap-4">
                {directLink && (
                  <a href={directLink} target="_blank">
                    <Icons name="lien" size={30} />
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank">
                    <Icons name="github" size={25} />
                  </a>
                )}
              </div>
            )}
          </div>
        </>
      </RevealContent>
    );
  }
}

export default ProjectCard;
