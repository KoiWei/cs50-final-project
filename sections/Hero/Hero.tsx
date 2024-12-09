"use client";

import { motion } from "framer-motion";
import SkillsBadge from "@/components/SkillsBadge"; // Import the SkillsBadge component

/* Hero component: Displays the main introduction section with animations and interactive buttons */
function Hero() {
  return (
    <div className="flex h-full flex-col items-start justify-center">
      {/* Hero Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} /* Animation starts with opacity 0 and slight vertical offset */
        animate={{ opacity: 1, y: 0 }} /* Fade-in and move to final position */
        transition={{ delay: 0.5, duration: 1 }} /* Delayed animation for a smooth appearance */
        className="text-left"
      >
        <h1 className="text-6xl font-extrabold leading-tight">Jinlin Wei</h1>
        {/* Title with large font size and bold weight */}
        <p className="text-4xl font-bold mt-4">
          Brown MSc in Innovation Management and Entrepreneurship 25' | Healthcare | Tech x Marketing | Consulting
        </p>
        {/* Description with smaller font and emphasis */}
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} /* Same animation for buttons */
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }} /* Longer delay to appear after title/description */
        className="mt-12 flex flex-col items-start gap-9 sm:flex-row"
      >
        {/* Button 1: Email contact */}
        <a href="mailto:weijinlinkoi@gmail.com">
          <button className="bg-[#4B2E2E] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#3E2727] transition">
            Get in touch with me
          </button>
        </a>

        {/* Button 2: Resume download */}
        <a
          href="https://drive.google.com/file/d/1uePShqOvthRCx1tGUZO7px45hvThSxY2/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#F5F5DC] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#EAE0C8] transition">
            Download my Resume
          </button>
        </a>

        {/* Button 3: LinkedIn profile */}
        <a
          href="https://www.linkedin.com/in/jinlin-wei-koi19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#dcccbc] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#EAE0C8] transition">
            Connect with me on LinkedIn
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
