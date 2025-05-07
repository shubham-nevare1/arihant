"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi"; // icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/80 fixed w-full top-0 z-50 flex justify-between items-center h-[70px] md:h-[50px] lg:h-[90px] px-4 xl:px-24 backdrop-blur">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/logo.png"
              width={150}
              height={30}
              alt="Logo"
              className="object-contain "
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="text-black hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <Link href="/">What We Offer</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Learning</Link>
            <Link href="/">Support</Link>
            <Link href="/">About</Link>
            <Link href="/">Partner</Link>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="https://web.arihantplus.com/base/login-password">
            <button className="text-black border border-black rounded-[10px] h-[45px] w-[120px] text-sm cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link href="https://signup.arihantplus.com/mobile-verify?params=">
            <button className="border border-black rounded-[10px] h-[45px] w-[150px] bg-black text-white text-sm cursor-pointer">
              Open Account
            </button>
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 lg:hidden">
          <FiSearch size={24} className="text-black" />
          {/* Toggle between Menu and Close icon */}
          {menuOpen ? (
            <FiX
              size={28}
              className="text-black"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              size={28}
              className="text-black"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`text-black fixed top-17 md:top-22 right-0 w-[80%] max-w-[500px] h-full bg-white z-50 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-900 ease-in-out `}
      >
        {/* Links */}
        <div className="flex flex-col gap-6 md:gap-3 p-6 text-lg font-medium">
          <Link href="/">What We Offer</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Learning</Link>
          <Link href="/">About</Link>
          <Link href="/">Partner</Link>
        </div>

        {/* Bottom Buttons */}
        <div className="p-6 mt-auto flex flex-col md:flex-row  gap-4">
          <Link
            href="https://web.arihantplus.com/base/login-password"
            className="w-full md:w-1/4"
          >
            <button className="border text-black border-black rounded-[10px] h-[45px] w-full text-sm hover:bg-[#CFE66F]">
              Sign In
            </button>
          </Link>
          <Link
            href="https://signup.arihantplus.com/mobile-verify?params="
            className="w-full md:w-1/4"
          >
            <button className="border border-black rounded-[10px] h-[45px] w-full bg-black text-white text-sm">
              Open Demat Account
            </button>
          </Link>
        </div>
      </div>

      {/* Background Overlay when menu open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
