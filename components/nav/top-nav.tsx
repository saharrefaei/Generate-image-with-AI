import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between p-5 shadow">
      <div className="text-2xl font-bold">
        <Link href="/">
          <Image
            src="/logos/logo.svg"
            alt="ai image generator logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Button>login</Button>
      </div>
    </div>
  );
}
