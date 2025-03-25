import Card from "./Card";
import educationData from "../data/educationData";

export default function Education() {
    return (
            <div id="education" className="w-7xl mx-auto">
                <h1 style={{ fontFamily: 'Raleway, sans-serif' }} className="text-black font-semibold text-[25px] leading-[121.49%] pt-20 mb-10 pl-6">My Education</h1>
                {educationData.map((exp, idx) => (
                    <Card key={idx} {...exp} />
                ))}
            </div>
    );
}
