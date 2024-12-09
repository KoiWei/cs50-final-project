import { motion } from "framer-motion";

/* SkillsBadge component: Displays a set of skills with animation effects */
function SkillsBadge() {
  const skills = [
    "Data Analysis",
    "Digital Marketing",
    "Product Management",
    "Java",
    "SQL",
    "Python",
    "Power BI",
    "React.JS",
    "Next.JS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React testing",
    "Git",
    "Github",
    "Figma",
  ];
  const shuffledSkills = skills.sort(() => Math.random() - 0.5); // Randomize skill order for variety

  /* Define animation variants for the motion div */
  const animationVariants = {
    initial: {
      opacity: 0, // Start with opacity 0
      y: 20, // Position slightly below its final position
    },
    animate: (index: number) => ({
      opacity: 1, // Fade in to full opacity
      y: 0, // Move to its original position
      transition: {
        delay: 1 + 0.1 * index, // Stagger animation based on skill index
      },
    }),
  };

  return (
    <div className="flex overflow-hidden">
      {/* Map over the shuffled skills array to render each skill with animations */}
      {shuffledSkills.map((skill, index) => (
        <motion.div
          key={index}
          variants={animationVariants} // Attach animation variants
          initial="initial" // Define initial animation state
          animate="animate" // Define animation state
          whileInView="animate" // Trigger animation when in view
          viewport={{
            once: true, // Animate once per scroll
          }}
          custom={index} // Pass the index for staggered animation delay
          className="mx-2 my-3 cursor-default overflow-hidden rounded-md bg-[#84645c] px-4 py-1 text-lg font-semibold text-white shadow-none"
        >
          {skill} {/* Display the skill name */}
        </motion.div>
      ))}
    </div>
  );
}

export default SkillsBadge;
