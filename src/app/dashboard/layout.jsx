'use client'
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useRole } from "@/context/auth";

export default function DashboardLayout({ children }) {
  const { role, setRole } = useRole();
  return (
    <div className="flex h-screen bg-amber-200">
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Navbar tepada */}
        <Navbar />

        {/* Sahifa contenti */}
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
