import Card from "./Card";
import experienceData from "../data/experienceData";

export default function Experience() {
  return (
    <div className="bg-[#FAFAFA]">
      <div id="experience" className="max-w-7xl mx-auto">
        <h1 style={{ fontFamily: 'Raleway, sans-serif' }} className="text-black font-semibold text-[25px] leading-[121.49%] pt-20 mb-10 pl-6">My Work Experience</h1>
        {experienceData.map((exp, idx) => (
          <Card key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}
