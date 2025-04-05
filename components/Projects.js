import projectData from "../data/projectData"
import ProjectCard	 from "./ProjectCard"

export default function Projects() {
    return (
        <div id="projects" className="max-w-7xl mx-auto">
            <h1 style={{ fontFamily: 'Raleway, sans-serif' }} className="text-black font-semibold text-[25px] leading-[121.49%] pt-20 mb-10 pl-6">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-5">
                    {projectData.map((proj, idx) => (
                        <ProjectCard key={idx} {...proj} />
                    ))}
                </div>
        </div>
        
    )
}