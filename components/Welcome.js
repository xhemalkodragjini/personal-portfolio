import Image from 'next/image';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center text-center py-20 bg-[url('/assets/welcome_background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative w-3/4 max-w-[302px] h-auto">
        <Image
          src="/assets/welcome_pic.jpg"
          width={500}
          height={500}
          alt="Welcome picture"
          className="w-full h-auto bg-cover border-[10px] border-white shadow-md shadow-black/25 rounded-full mt-20"
        />
      </div>

      <h1 className="mt-10 text-3xl sm:text-4xl font-raleway font-medium text-black">
        Welcome to my space!
      </h1>

      <p className="max-w-4xl text-[20px] font-inter font-light text-black leading-relaxed px-10 py-20">
        Hey, I am Xhemal Kodragjini. I am a Data Science student at Freie Universität Berlin with a background in Computer Engineering. My journey has taken me through software engineering, AI, project management, and cloud engineering—but AI has always been the field that challenges and excites me the most. This space is where I document my work, ideas, and ongoing explorations in AI and beyond.
      </p>
    </div>
  );
}

