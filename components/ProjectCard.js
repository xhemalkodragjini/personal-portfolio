import Badge from "./Badge";
import { useState } from "react";
import CardImage from "./CardImage";
import DetailsCard from "./DetailsCard";

export default function ProjectCard({ title, logo, description, details, code, demo, skills }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-full flex flex-col p-6 mb-6 mr-6 bg-white border border-neutral-200/70 rounded-2xl overflow-hidden w-full">
      <CardImage logo={logo} />
      <div className="flex-1 flex flex-col mt-10">
        <h3 className="text-xl font-medium text-neutral-900">{title}</h3>
        {skills && (
          <div className="mt-5 flex flex-wrap">
            {skills.map((skill, index) => (
              <Badge key={index} text={skill} />
            ))}
          </div>
        )}
        <div className="flex-1 text-neutral-500 text-sm mt-5 flex flex-wrap items-center gap-x-4">
          {description}
        </div>
        <div className="flex space-x-3 mt-5">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-1.5 text-sm bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition"
          >
            Details
          </button>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm border border-neutral-300 text-neutral-900 rounded-lg hover:border-neutral-900 transition"
          >
            Code
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm border border-neutral-300 text-neutral-900 rounded-lg hover:border-neutral-900 transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Overlay and DetailsCard */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-white bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <DetailsCard
            title={title}
            logo={logo}
            details={details}
            setIsOpen={setIsOpen}
          />
        </>
      )}
    </div>
  );
}
