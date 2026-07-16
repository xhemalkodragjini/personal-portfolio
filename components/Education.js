import Card from "./Card";
import SectionHeading from "./SectionHeading";
import educationData from "../data/educationData";

export default function Education() {
    return (
        <div className="bg-neutral-50">
            <div id="education" className="max-w-7xl mx-auto px-6">
                <SectionHeading eyebrow="Background" title="Education" />
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                    {educationData.map((edu, idx) => (
                        <Card key={idx} {...edu} />
                    ))}
                </div>
            </div>
        </div>
    );
}
