import Image from "next/image";
import Badge from "./Badge";

export default function Card({ organization, logo, title, location, duration, skills }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center p-6 mb-6 w-full rounded-2xl border border-neutral-200/70 hover:border-neutral-300 transition-colors bg-white">
      <div className="w-60 h-20 relative mr-12 mb-4 md:mb-0 md:mr-6 shrink-0 flex items-center justify-center">
        {logo ? (
          <Image src={logo} alt={organization} fill className="object-contain" />
        ) : (
          <span className="text-lg font-medium text-neutral-700 tracking-tight">{organization}</span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-medium text-neutral-900">{title}</h3>
        <div className="text-neutral-500 text-sm mt-3 flex flex-wrap items-center gap-x-4">
          <span>{duration}</span>
          <span>{location}</span>
        </div>
        {skills &&
          (
            <div className="mt-5 flex flex-wrap">
              {skills.map((skill, index) => (
                <Badge key={index} text={skill} />
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
}
