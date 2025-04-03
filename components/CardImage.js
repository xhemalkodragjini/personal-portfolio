import Image from "next/image";

export default function CardImage({logo}) {
    return (
        <div className="w-full h-[300px] relative">
            <Image
                src={logo}
                alt="Project Display"
                fill
                className="object-cover"
            />
        </div>
    )
}