import Image from 'next/image'
import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

function Teams() {
    const teachers = [
        {
            id: 1,
            avatar: "/me.jpg",
            surname: "Rahmadjon",
            firstname: "Abdullayev",
            lavozim: "Web Designer",
            bio: "O‘quvchilar bilan ishlashni yaxshi ko‘raman va ITni amaliy yo‘nalishda o‘rgataman.",
            socials: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        },
        {
            id: 2,
            avatar: "/you.jpg",
            surname: "Hojiakbar",
            firstname: "Murodillayev",
            lavozim: "Frontend Developer",
            bio: "O‘quvchilarni qiziqarli va amaliy mashg‘ulotlar bilan o‘rgataman.",
            socials: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        },
         {
            id: 2,
            avatar: "/you.jpg",
            surname: "Hojiakbar",
            firstname: "Murodillayev",
            lavozim: "Frontend Developer",
            bio: "O‘quvchilarni qiziqarli va amaliy mashg‘ulotlar bilan o‘rgataman.",
            socials: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        }, {
            id: 2,
            avatar: "/you.jpg",
            surname: "Hojiakbar",
            firstname: "Murodillayev",
            lavozim: "Frontend Developer",
            bio: "O‘quvchilarni qiziqarli va amaliy mashg‘ulotlar bilan o‘rgataman.",
            socials: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        },
        
    ]

    return (
        <div id='teams' className="px-6 py-20 bg-[#F9FAFB]">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
                Bizning Jamoamiz
            </h1>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                Markazimizdagi har bir o‘qituvchi o‘z sohasida professional bo‘lib, sizga ITni amaliy va qiziqarli tarzda o‘rgatishga tayyor. 
                Bizning jamoamiz sizning bilim olish yo‘lingizni yanada samarali qiladi.
            </p>

            {/* Teacher Cards */}
            <div className="max-w-6xl mx-auto p-6 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="bg-white rounded-xl shadow-lg overflow-hidden  p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                        
                        {/* Avatar */}
                        <div className="w-32 h-32 relative mb-4">
                            <Image 
                                src={teacher.avatar} 
                                alt={`${teacher.firstname} ${teacher.surname}`} 
                                fill 
                                className="rounded-full object-cover border-2 border-pink-200"
                            />
                        </div>

                        {/* Name & Bio */}
                        <h2 className="text-xl font-semibold text-gray-800">{teacher.surname} {teacher.firstname}</h2>
                        <p className="text-gray-500 mt-2 text-sm">{teacher.bio}</p>
                        <p className="text-gray-800 mt-3 font-medium">{teacher.lavozim}</p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-4">
                            <a href={teacher.socials.facebook} className="text-gray-500 hover:text-blue-600"><Facebook size={20}/></a>
                            <a href={teacher.socials.twitter} className="text-gray-500 hover:text-blue-400"><Twitter size={20}/></a>
                            <a href={teacher.socials.instagram} className="text-gray-500 hover:text-pink-500"><Instagram size={20}/></a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Teams
