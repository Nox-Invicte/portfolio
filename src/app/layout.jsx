// Project: portfolio
"use client";
import React from "react";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: "url('https://www.hdwallpapers.in/download/landscape_view_of_city_buildings_in_dark_purple_starry_sky_background_hd_synthwave-1366x768.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150vh",}}>
        {/* NavBar */}
        
        <nav className="bg-black text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center text-lg">
          <div className="text-2xl md:text-3xl font-bold font-serif">S.S.</div>
          <button
            className="md:hidden text-lg px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-700 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}
          >
            <li><a className="text-lg px-4 md:px-9 rounded-md cursor-pointer hover:bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-colors duration-1000" href="/..">Home</a></li>
            <li><a className="text-lg px-4 md:px-9 rounded-md cursor-pointer hover:bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-colors duration-1000" href="/about-me">About Me</a></li>
            <li><a className="text-lg px-4 md:px-9 rounded-md cursor-pointer hover:bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-colors duration-1000" href="/projects">Projects</a></li>
          </ul>
        </nav>
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}