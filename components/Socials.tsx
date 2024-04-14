"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const icons = [
  {
    Icon: RiLinkedinFill,
    link: "https://www.linkedin.com/in/vinicius-carvalho-b5980918b/",
  },
  { Icon: RiGithubFill, link: "https://github.com/ViniciusSCG" },
  {
    Icon: RiInstagramFill,
    link: "https://www.instagram.com/viniciusgirotto_/",
  },
  {
    Icon: RiWhatsappFill,
    link: "https://api.whatsapp.com/send?phone=5544988591475",
  },
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
