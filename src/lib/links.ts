import type { ImageMetadata } from "astro";
import CvDocumentIcon from "../assets/icons/cv-document.svg";
import GitHubLogo from "../assets/icons/github.svg";
import LinkedInLogo from "../assets/icons/linkedin.svg";

type SVGComponent = ((_props: astroHTML.JSX.SVGAttributes) => any) & ImageMetadata;

interface Link {
  name: string;
  href: string;
  icon: SVGComponent;
  disabled?: boolean;
}

const links: Link[] = [
  {
    name: "GitHub",
    href: "https://github.com/mohammedyh",
    icon: GitHubLogo,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mohammedyousufhamid",
    icon: LinkedInLogo,
    disabled: true,
  },
  {
    name: "CV",
    href: "/cv.pdf",
    icon: CvDocumentIcon,
    disabled: true,
  },
];

export default links;
