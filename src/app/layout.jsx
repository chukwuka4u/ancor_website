import { Inter } from "next/font/google";
import Link from "next/link"
import Drawer from "./utils/drawer.jsx"
import "./globals.css";

import Image from "next/image";
import logo from "./assets/logo.png";

const inter = Inter({ subsets: ["latin"] });

export 
const metadata = {
  title: "Home - Advertisee",
  description: "Advertisee - the Home of social media marketing",
};

export default function RootLayout({ children }) {

  const list = ["/", "/about_us", "/our_services", "/contact"];

  return (
    <html lang="en">
      
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
      </head>

      <body className="">
        <div className="flex flex-row justify-between px-2 w-full h-[50px] "> 
             <Link href="/" >
                 <Image 
              src= {logo}
              width={200}
              height={50}
              className="object-contain"
              alt="logo icon"
              />
              </Link>
              <Drawer nav_list={list}/>
              {/*destop menu */}
              <div className="flex justify-between items-center w-[50%] max-md:hidden">
                <Link
                  href="/" className="hover:bg-slate-200 focus:ring-2 focus:ring-default"
                ><div>Home</div></Link>
                <Link href={"/about_us"} className="hover:bg-slate-200 focus:ring-2 focus:ring-default"><div>About Us</div></Link>
                <Link href="/our_services" className="hover:bg-slate-200 focus:ring-2 focus:ring-default"><div>Our Services</div></Link>
                <Link href="/contact" className="hover:bg-slate-200 focus:ring-2 focus:ring-default"><div>Contact</div></Link>
              </div>
        </div>
        {children}
        </body>
    </html>
  );
}
