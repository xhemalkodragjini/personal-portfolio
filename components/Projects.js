import projectData from "../data/projectData"
import ProjectCard	 from "./ProjectCard"
import SectionHeading from "./SectionHeading"

export default function Projects() {
    return (
        <div id="projects" className="max-w-7xl mx-auto px-6">
            <SectionHeading eyebrow="Portfolio" title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                    {projectData.map((proj, idx) => (
                        <ProjectCard key={idx} {...proj} />
                    ))}
                </div>
        </div>

    )
}