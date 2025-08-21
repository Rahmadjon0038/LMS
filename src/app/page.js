'use client'
import GuestNav from '@/components/guestNavbar/GuestNav';
import Home from '@/components/home/Home';
import { useRole } from '@/context/auth'
import React from 'react'

function page() {
  const { role, setRole } = useRole();
  return (
    <div>
      <GuestNav/>
      <Home/>
    </div>
  )
}

export default page