'use client'
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Experience />
    </>
  )
}
