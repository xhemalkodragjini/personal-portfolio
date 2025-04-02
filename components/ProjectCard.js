import Image from "next/image";
import Badge from "./Badge";

export default function projectCard({ title, logo, description, code, demo, skills }) {
  return (
    <div className="p-6 mb-6 mr-6 bg-white shadow-lg rounded-lg overflow-hidden w-full">
      <div className="w-full h-[300px] relative">
        <Image 
          src={logo} 
          alt="Project Display"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 mt-10">
        <h3 className="text-xl font-light">{title}</h3>
        {skills &&
          (
            <div className="mt-7 flex flex-wrap">
              {skills.map((skill, index) => (
                <Badge key={index} text={skill} />
              ))}
            </div>
          )
        }
        <div className="text-gray-500 text-sm mt-7 flex flex-wrap items-center gap-x-4">
          {description}
        </div>
        <div className="flex space-x-5 mt-5">
          <a className="px-4 py-1 bg-[#AED7AE] text-white rounded-lg hover:bg-[#42D942] transition">Details</a>
          <a
            href={code} target="_blank" rel="noopener noreferrer" className="px-4 py-1 bg-[#DCCB8C] text-white rounded-lg hover:bg-[#C0AA57] transition"
          >Code
          </a>
          {demo &&
            (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="px-4 py-1 bg-[#8FAFFF] text-white rounded-lg hover:bg-[#3C73FF] transition">
                Demo
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
}
