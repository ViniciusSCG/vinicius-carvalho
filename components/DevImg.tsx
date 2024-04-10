import Image from "next/image";

const DevImg = () => {
  return (
    <div className="dev-img">
      <Image src="/devImg.jpg" alt="Desenvolvedor" width={300} height={300} />
    </div>
  );
};

export default DevImg;
