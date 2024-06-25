"use client"
import Image from "next/image"
import icon from "../assets/menu.jpg";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useState } from "react"


export default function Drawer ({ nav_list }) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
        <button onClick={()=> setIsOpen(!isOpen)}>
        <Image 
        src={isOpen ? logo : icon}
        width={45}
        height={45}
        className="object-contain md:hidden py-2"
        />
        </button>
        {isOpen ? 
             <div className="absolute top-[50px] right-0 w-[80%] h-[500px] bg-white lg:hidden">
               <ls className="flex flex-col items-stretch">
                   <Link href={nav_list[0]}>
                   <ul className="hover:bg-slate-200 focus:ring-2 focus:ring-slate-500 py-3" onFocus={() => {setIsOpen(false)}}>
                       Home 
                    </ul>
                   </Link>
                   <Link href={nav_list[1]}>
                    <ul className="hover:bg-slate-200 focus:ring-2 focus:ring-slate-500 py-3" onFocus={() => {setIsOpen(false)}}>
                       About Us 
                    </ul>
                   </Link > 
                   <Link href={nav_list[2]}>
                    <ul className="hover:bg-slate-200 focus:ring-2 focus:ring-slate-500 py-3">
                       Projects 
                    </ul>
                   </Link> 
                   <Link href={nav_list[3]}>
                    <ul className="hover:bg-slate-200 focus:ring-2 focus:ring-slate-500 py-3">
                       Contact 
                    </ul>
                   </Link> 
                </ls> 
             </div>
        :
        <></>
        }
        </div>
    )
}