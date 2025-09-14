import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Let's Go TravelLogo"
                  width={512}
                  height={512}
                  className="w-14 h-auto block md:w-20"
                />
              </div>
            </Link>
            <ul className="flex items-center gap-2.5">
               <li className="text-sm uppercase cursor-pointer">
                <Link href="/travelpackages">Travelpackages</Link>
              </li>
              <li className="text-sm uppercase cursor-pointer">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
  );
}