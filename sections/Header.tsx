"use client";

import AlertDot from "../components/AlertDot"; // Import AlertDot component for notifications or indicators
import BrandLogo from "@/components/BrandLogo"; // Import BrandLogo for displaying a branding logo
import { motion } from "framer-motion";

/* Header component: Creates a motion-animated header for branding and alerts */
function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }} /* Starts off-screen with zero opacity */
      animate={{ opacity: 1, y: 0 }} /* Animates into view with fade-in and slide-down */
      transition={{ duration: 0.5 }} /* Smooth transition over half a second */
      className="mt-[50px] flex items-center" /* Adds top margin and centers content horizontally */
    >
      {/* Intentionally left empty, suggesting space for logo or navigation in future */}
    </motion.header>
  );
}

export default Header;
