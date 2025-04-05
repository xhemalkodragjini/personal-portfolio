'use client'
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}
