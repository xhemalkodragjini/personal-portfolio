import Card from "./Card";
import educationData from "../data/educationData";

export default function Education() {
    return (
        <div className="bg-[#FAFAFA]">
            <div id="education" className="max-w-7xl mx-auto">
                <h1 style={{ fontFamily: 'Raleway, sans-serif' }} className="text-black font-semibold text-[25px] leading-[121.49%] pt-20 mb-10 pl-6">My Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                    {educationData.map((edu, idx) => (
                        <Card key={idx} {...edu} />
                    ))}
                </div>
            </div>
        </div>
    );
}
