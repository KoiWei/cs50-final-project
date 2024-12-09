"use client";

import SkillsBadge from "@/components/SkillsBadge"; // Import SkillsBadge component for displaying skill badges
import Marquee from "react-fast-marquee"; // Import Marquee for creating scrolling text or elements

/* MarqueeSection component: Creates a marquee effect to showcase skills dynamically */
function MarqueeSection({}) {
  return (
    <div className="flex flex-col mt-[-160px]">
      {/* Conditional rendering for light mode */}
      <div className="block dark:hidden">
        {/* First marquee scrolls left */}
        <Marquee
          speed={15} /* Sets the scroll speed */
          gradient /* Enables gradient effect at the edges */
          gradientColor="#f3f3e3" /* Sets gradient color for a seamless background */
          gradientWidth={50} /* Width of the gradient fade */
          autoFill /* Automatically fills the marquee with content */
        >
          <SkillsBadge /> {/* Displays a list of skill badges */}
        </Marquee>

        {/* Second marquee scrolls right */}
        <Marquee
          speed={15} /* Matches speed with the first marquee */
          gradient
          gradientColor="#f3f3e3"
          gradientWidth={50}
          autoFill
          direction="right" /* Reverses the scroll direction */
        >
          <SkillsBadge />
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;
