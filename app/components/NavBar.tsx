"use client"

import React, { useState } from "react";
import { Menu } from 'lucide-react';
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F7F7F7] satoshi sticky top-0 z-50 border border-white px-5">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[80px]">
        
        <div className="flex items-center gap-2">
          <div className="w-[32px] h-[32px] rounded-full bg-[#003631]" />
          <p className="text-[#181818] font-bold text-lg">Brand Name</p>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <p className="text-[#181818] text-[16px]">How it Works</p>
          <p className="text-[#181818] text-[16px]">Features</p>
          <p className="text-[#181818] text-[16px]">FAQs</p>
          <p className="text-[#181818] text-[16px]">Supports</p>
        </div>

        <button className="hidden md:block py-3 px-6 rounded-full bg-[#003631] text-white text-sm font-medium hover:bg-[#004d45] transition">
          Get Started
        </button>

        <button
          className="md:hidden text-[#181818]"
          onClick={() => setOpen(!open)}
        >
          <Menu size="24" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#F7F7F7] border-t border-white px-5 py-4 flex flex-col gap-4">
          <p className="text-[#181818]">How it Works</p>
          <p className="text-[#181818]">Features</p>
          <p className="text-[#181818]">FAQs</p>
          <p className="text-[#181818]">Supports</p>

          <button className="mt-2 py-3 rounded-full bg-[#003631] text-white text-sm font-medium">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;