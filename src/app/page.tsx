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
        Open Art
      </button>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
      <Link
        legacyBehavior
        href="/art"
        className="relative w-64 h-32 border border-black"
      >
        <a className="absolute text-sm top-5 right-5 p-2 bg-blue-400 rounded-md text-white font-semibold">
          Go to art page
        </a>
      </Link>
    </div>
  );
}
