"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const role = Cookies.get("role");
  const router = useRouter()

  return (
    <nav className="w-full bg-white shadow px-6 py-3 flex justify-between">
      <span className="font-bold text-lg">📚 Online Education</span>
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">Role: {role}</span>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => {
            Cookies.remove("role");
            router.push('/')
          }}>
          Logout
        </button>
      </div>
    </nav>
  );
}
