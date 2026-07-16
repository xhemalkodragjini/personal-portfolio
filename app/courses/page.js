import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import SectionHeading from "@/components/SectionHeading";

const offerings = [
  {
    title: "Mathematics",
    description: "From 1st grade through to university level.",
  },
  {
    title: "Python Programming",
    description: "From syntax basics to advanced projects.",
  },
  {
    title: "Exam Prep",
    description: "Intensive coaching to make sure you're ready for test day.",
  },
  {
    title: "Project Support",
    description: "Help with homework, coding assignments, and academic projects.",
  },
];

const reasons = [
  {
    title: "Teaching Experience",
    description: "Proven methods that make complex topics simple to follow.",
  },
  {
    title: "Expertise",
    description: "Years of experience as a Software Developer at institutions like Deutsche Bank and Deutsche Börse.",
  },
  {
    title: "Academic Excellence",
    description: "Master's degree in Data Science from Berlin, graduated as an Honor Student.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
            <Image
              src="/assets/courses/edulab_logo.png"
              alt="EduLab logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Looking to excel in school, ace your university exams, or take your first steps into tech?
            Whether you&rsquo;re a beginner or an advanced learner, EduLab offers the guidance you need &mdash;
            professional tutoring, online or in person in Berlin, in English or Albanian.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Courses" title="What We Offer" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-neutral-200/70 bg-white"
            >
              <h3 className="text-xl font-medium text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-neutral-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Why EduLab" title="Why Study With Us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
            {reasons.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-neutral-200/70">
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="pt-20 px-6 text-center bg-neutral-50">
        <h2 style={{ fontFamily: 'Raleway, sans-serif' }} className="text-2xl font-semibold text-neutral-900">
          Interested in getting started?
        </h2>
      </section>

      <Contact />
    </>
  );
}
