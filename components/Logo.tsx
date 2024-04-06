import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Logo" width={160} height={120} />
    </Link>
  );
};

export default Logo;
