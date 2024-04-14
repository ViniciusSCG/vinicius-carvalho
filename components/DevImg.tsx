import Image from "next/image";

type DevImgProps = {
  src: string;
  alt: string;
  containerStyles: string;
};

const DevImg = ({ containerStyles, src, alt }: DevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image fill priority src={src} alt={alt} />
    </div>
  );
};

export default DevImg;
