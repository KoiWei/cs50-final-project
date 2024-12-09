import Icons from "../components/Icons"; // Import Icons component for rendering social media icons

/* Socials component: Displays social media links with corresponding icons */
function Socials() {
  return (
    <div className="mb-[50px] flex items-center gap-12">
      {/* GitHub link */}
      <a href="https://github.com/KoiWei" target="_blank">
        <Icons name={"github"} size={30} /> {/* Render GitHub icon with size 30 */}
      </a>

      {/* LinkedIn link */}
      <a href="https://www.linkedin.com/in/jinlin-wei-koi19/" target="_blank">
        <Icons name={"linkedin"} size={30} /> {/* Render LinkedIn icon with size 30 */}
      </a>

      {/* Email link */}
      <a href="mailto:weijinlinkoi@gmail.com" target="_blank">
        <Icons name={"mail"} size={25} /> {/* Render Mail icon with size 25 */}
      </a>
    </div>
  );
}

export default Socials;
