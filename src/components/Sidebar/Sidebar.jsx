"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUsers, FaBook, FaChalkboardTeacher, FaChartBar, FaHome, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const role = Cookies.get("role"); // admin / teacher / student
  const pathname = usePathname();

  const menuItems = {
    admin: [
      { label: "Users", href: "/dashboard/admin/users", icon: <FaUsers /> },
      { label: "Courses", href: "/dashboard/admin/courses", icon: <FaBook /> },
      { label: "Teachers", href: "/dashboard/admin/teachers", icon: <FaChalkboardTeacher /> },
      { label: "Stats", href: "/dashboard/admin/stats", icon: <FaChartBar /> },
    ],
    teacher: [
      { label: "Subjects", href: "/dashboard/teacher/subjects", icon: <FaBook /> },
      { label: "Groups", href: "/dashboard/teacher/groups", icon: <FaUsers /> },
      { label: "Stats", href: "/dashboard/teacher/stats", icon: <FaChartBar /> },
    ],
    student: [
      { label: "Subjects", href: "/dashboard/student/subjects", icon: <FaBook /> },
      { label: "Groups", href: "/dashboard/student/groups", icon: <FaUsers /> },
      { label: "Stats", href: "/dashboard/student/stats", icon: <FaChartBar /> },
    ],
  };

  return (
    <aside className="w-64 bg-[#FAFAFA] h-screen flex flex-col justify-between  shadow-xl">
      {/* Brand / Logo */}
      <div className="flex  items-center mt-2 mb-10">
        <Image src={'/logo.png'} alt="logo" width={100} height={100}/> 
        <span className="text-2xl text-[#9C0603] font-bold text-center">Taraqqiyot</span>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col flex-1">
        {menuItems[role]?.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="group relative w-full">
              <Link
                href={item.href}
                className={`flex items-center text-gray-700 gap-4 px-6 mx-3 py-2 hover:text-white text-lg mb-4 transition-all duration-300 rounded hover:bg-[#9C0603] ${
                  isActive ? "bg-[#9C0603] text-white" : ""
                }`}>
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      
    </aside>
  );
}
