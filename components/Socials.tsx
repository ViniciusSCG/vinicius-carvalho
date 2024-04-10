"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  { Icon: RiYoutubeFill, link: "https://www.youtube.com" },
  { Icon: RiLinkedinFill, link: "https://www.linkedin.com" },
  { Icon: RiGithubFill, link: "https://www.github.com" },
  { Icon: RiFacebookFill, link: "https://www.facebook.com" },
  { Icon: RiInstagramFill, link: "https://www.instagram.com" },
];

const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map(({ Icon, link }) => (
        <Link
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary/90"
        >
          <Icon className={`${iconStyles}`} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
