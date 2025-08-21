"use client";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Sidebar() {
  const role = Cookies.get("role"); // teacher / student / superadmin

  return (
    <aside className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      <ul className="space-y-2">
        {role === "admin" && (
          <>
            <li><Link href="/dashboard/admin/users">Users</Link></li>
            <li><Link href="/dashboard/admin/courses">Courses</Link></li>
            <li><Link href="/dashboard/admin/teachers">Teachers</Link></li>
            <li><Link href="/dashboard/admin/stats">Stats</Link></li>
          </>
        )}

        {role === "teacher" && (
          <>
            <li><Link href="/dashboard/teacher/profile">Profile</Link></li>
            <li><Link href="/dashboard/teacher/subjects">Subjects</Link></li>
            <li><Link href="/dashboard/teacher/groups">Groups</Link></li>
            <li><Link href="/dashboard/teacher/stats">Stats</Link></li>
          </>
        )}

        {role === "student" && (
          <>
            <li><Link href="/dashboard/student/profile">Profile</Link></li>
            <li><Link href="/dashboard/student/subjects">Subjects</Link></li>
            <li><Link href="/dashboard/student/groups">Groups</Link></li>
            <li><Link href="/dashboard/student/stats">Stats</Link></li>
          </>
        )}
      </ul>
    </aside>
  );
}
