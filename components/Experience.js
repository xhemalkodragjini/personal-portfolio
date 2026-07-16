import Card from "./Card";
import SectionHeading from "./SectionHeading";
import experienceData from "../data/experienceData";

export default function Experience() {
  return (
    <div id="experience" className="max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="Career" title="Work Experience" />
      {experienceData.map((exp, idx) => (
        <Card key={idx} {...exp} />
      ))}
    </div>
  );
}
