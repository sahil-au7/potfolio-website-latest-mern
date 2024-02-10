import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

function LeftSider() {
  const { portfolioData } = useSelector((state) => state.root);
  const { socialMediaLinks } = portfolioData;
  const { facebook, github, gmail, linkedin, instagram } = socialMediaLinks;
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static ">
      <div className="flex flex-col items-center gap-1">
        <div className="flex flex-col text-secondary sm:flex-row">
          <IconButton onClick={() => window.open(facebook, "_blank")}>
            <FacebookIcon className="text-secondary link" />
          </IconButton>
          <IconButton onClick={() => window.open(instagram, "_blank")}>
            <InstagramIcon className="text-secondary link" />
          </IconButton>
          <IconButton onClick={() => window.open(gmail, "_blank")}>
            <EmailIcon className="text-secondary link" />
          </IconButton>
          <IconButton onClick={() => window.open(linkedin, "_blank")}>
            <LinkedInIcon className="text-secondary link" />
          </IconButton>
          <IconButton onClick={() => window.open(github, "_blank")}>
            <GitHubIcon className="text-secondary link" />
          </IconButton>
        </div>
        <div className=" w-[1px] h-32 bg-[#F97316] sm:w-32 sm:py-10 sm:h-[1px]"></div>
      </div>
    </div>
  );
}

export default LeftSider;
