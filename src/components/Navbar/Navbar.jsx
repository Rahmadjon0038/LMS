"use client";
import Cookies from "js-cookie";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Profile from "../ProfileModal";

export default function Navbar() {
  const role = Cookies.get("role");
  const router = useRouter();

  return (
    <nav className="w- mt-2 bg-white bg-opacity-10 backdrop-blur-md  px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3">
        <span className="font-extrabold  text-2xl tracking-wide text-gray-700">Dashboard</span>
      </div>



      <div className="flex text-gray-700 items-center gap-6">
        <Bell />
        <Image src={'/you.jpg'} alt="logo" width={80} height={70} className="rounded-xl w-[44px] object-cover h-[40px]" />
        <div className="flex gap-1.5">
          <div>
            <h1 className="font-[500]">Rahmadjon Abdullayev</h1>
            <p className="text-[14px]">Super admin</p>
          </div>
          <Profile>
            <ChevronDown className="cursor-pointer"/>
          </Profile>
        </div>
      </div>

    </nav >
  );
}
