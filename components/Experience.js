import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/experienceData";

export default function Experience() {
  return (
    <div id="experience" className="max-w-7xl mx-auto">
      <h1 style={{ fontFamily: 'Raleway, sans-serif' }} className="text-black font-semibold text-[25px] leading-[121.49%] pt-20 mb-10">My Work Experience</h1>
      {experienceData.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </div>
  );
}
