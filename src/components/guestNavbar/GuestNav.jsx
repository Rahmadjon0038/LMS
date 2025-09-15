'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import Login from '../authModals/Login';
import Register from '../authModals/Register';
import UserProfileModal from '../ProfileModal';
import { useRole } from '@/context/auth';
import { useRouter } from 'next/navigation';

function GuestNav() {
  const { role } = useRole();
  const router = useRouter();


  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center cursor-pointer space-x-3">
        <Image src={logo} alt="logo" width={60} height={60} />
        <div className="text-[#9c0603]">
          <h1 className="font-bold text-xl">Taraqqiyot</h1>
          <p className="text-xs font-semibold">Teaching Center</p>
        </div>
      </div>

      <div className="hidden md:flex gap-10 font-medium text-gray-700">
        <Link href={'/'} className="hover:text-[#9c0603] transition">Home</Link>
        <Link href={'#about'} className="hover:text-[#9c0603] transition">About</Link>
        <Link href={'#courses'} className="hover:text-[#9c0603] transition">Courses</Link>
        <Link href={'#teams'} className="hover:text-[#9c0603] transition">Teams</Link>
        <Link href={'#contact'} className="hover:text-[#9c0603] transition">Contact</Link>
      </div>

      {role === 'user' ? (
        <UserProfileModal>
          <h1>User Profile</h1>
        </UserProfileModal>
      ) : role === 'admin' || role === 'teacher' || role === 'student' ? (
        <div className="flex gap-4">
          <button
            onClick={() => router.replace(`/dashboard/${role}`)} // push emas replace
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 transition"
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Login>
            <button className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 transition">
              Login
            </button>
          </Login>
          <Register>
            <button className="px-4 py-2 rounded bg-[#9c0603] text-white font-semibold hover:bg-[#7a0402] transition">
              Register
            </button>
          </Register>
        </div>
      )}
    </nav>
  );
}

export default GuestNav;
