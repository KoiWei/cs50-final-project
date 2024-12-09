import ProjectCard from "@/components/ProjectCard"; // Import ProjectCard for showcasing individual projects
import RevealContent from "@/components/ReavealContent"; // Import RevealContent for animated section reveal
import SectionBadge from "@/components/SectionBadge"; // (Optional: for any badges associated with the section)

/* Projects component: Displays a list of personal and professional projects with descriptions, technologies, and links */
function Projects() {
  return (
    <>
      {/* Section Title with animation */}
      <RevealContent>
        <>
          <h2
            className="mb-6 text-center font-extrabold md:mb-10"
            style={{ fontSize: "48px" }}
          >
            Personal Projects
          </h2>
        </>
      </RevealContent>

      {/* Project Cards */}
      <div className="flex flex-col gap-12 lg:gap-20">
        {/* Project 1: Intus Care Dashboard Optimization */}
        <ProjectCard
          name={"Intus Care Dashboard Optimization"}
          description={
            "Conducted healthcare data analysis for PACE programs using Python and SQL, identifying $500K in cost-saving opportunities and enhancing care coordination, contributing to a 20% improvement in patient satisfaction. Developed Power BI dashboards for 20+ PACE healthcare organizations, focusing on reducing hospital readmissions and improving service delivery, resulting in a 15% increase in operational efficiency."
          }
          technologies={[
            "Data Analytics",
            "Python",
            "PowerBI",
            "SQL",
            "Jira",
          ]}
          imageSrc={"/images/IntusCareScreenshot.webp"}
          imagePosition={"right"}
          directLink={"https://www.intuscare.com/"}
        />

        {/* Project 2: E-commerce Operations for Moët Hennessy */}
        <ProjectCard
          name={"E-commerce Operations for Moët Hennessy"}
          description={
            "Led collaborations of brand-creator-vendor partnerships for Moët Hennessy's wine and spirits portfolio, securing 4 partnerships that generated ¥2M in revenue in TikTok live streaming sales. Conducted channel and sales performance analysis using Excel and PowerPoint, optimized operational strategies and accelerated progress toward annual brand objectives by 10%."
          }
          technologies={[
            "Digital Marketing",
            "Negotiation",
            "Project Management",
            "Influencer Marketing",
            "B2B Sales",
          ]}
          imageSrc={"/images/hennessy.webp"}
          imagePosition={"left"}
          directLink={"https://www.lvmh.com/our-maisons/wines-spirits"}
        />

        {/* Project 3: TikTok Business Center */}
        <ProjectCard
          name={"TikTok Business Center"}
          description={
            "As the project owner to improve the usability of TikTok Business Center (SaaS), led the entire process from feasibility analysis to implementation and launch for the global market. Usability Study: Conducted client interviews and analyzed 100,000+ data points using Python and SQL to identify key usability issues and prioritize features, resulting in a product roadmap that influenced 60% of product revenue. Project Management: Led a cross-functional team of 20+ members, including engineers, data scientists, designers, and marketers, through the entire product development lifecycle. Successfully managed a 4-month, 3-phase product iteration from ideation to release. Analytics & Metrics Management: Defined and monitored over 200 data trackers, designed 3 key metrics, and conducted A/B testing. Visualized insights as dashboards, assisting in product feedback collection and refinement."
          }
          technologies={["Python", "SQL", "Product Management"]}
          imageSrc={"/images/TTBC.webp"}
          imagePosition={"left"}
          directLink={"https://business.tiktok.com/"}
        />

        {/* Project 4: PUBG AI Highlight Report */}
        <ProjectCard
          name={"PUBG AI Highlight Report"}
          description={
            "Designed and ideated the AI-scoring module for the game PUBG Mobile, transforming player psychological insights into 40+ metrics to serve as AI training guidelines, contributing to feed algorithms improving 500,000 user experience. Conducted competitive analysis using research and user interviews, delivering a 5-page proposal to improve Tencent gaming community strategy."
          }
          technologies={[
            "Product Design",
            "AI Training",
            "UX/UI",
            "Game Design",
          ]}
          imageSrc={"/images/pubgmobile.webp"}
          imagePosition={"left"}
          directLink={"https://www.pubgmobile.com/en-US/home.shtml"}
        />
      </div>
    </>
  );
}

export default Projects;
