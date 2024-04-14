import Image from "next/image";

const DevImg = () => {
  return (
    <div className="dev-img">
      <Image
        src="/devImgNew1.jpg"
        alt="Desenvolvedor"
        width={300}
        height={300}
      />
    </div>
  );
};

export default DevImg;
