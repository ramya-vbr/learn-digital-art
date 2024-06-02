"use client";
import Link from "next/link";
import { useState } from "react";
import Dialog from "./components/dialog";

export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={openDialog}
        className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300"
      >
        Try Me
      </button>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
      <Link
        legacyBehavior
        href="/art"
        className="w-64 h-32 border border-black"
      >
        <a className="absolute top-5 right-5 px-5 py-2 font-medium text-white group">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative">Go to Art Page</span>
        </a>
      </Link>
    </div>
  );
}
