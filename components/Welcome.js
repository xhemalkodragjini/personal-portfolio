import Image from 'next/image';

export default function Welcome() {
  return (
    <div id="about" className="flex flex-col items-center text-center py-20 bg-[url('/assets/welcome/welcome_background.png')] bg-cover bg-center bg-no-repeat shadow-xl">
      <div className="relative w-3/4 max-w-[302px] h-auto">
        <Image
          src="/assets/welcome/welcome_pic.jpg"
          width={500}
          height={500}
          alt="Welcome picture"
          className="w-full h-auto bg-cover border-[10px] border-white shadow-md shadow-black/25 rounded-full mt-20"
        />
      </div>

      <h1 style={{ fontFamily: 'Raleway, sans-serif' }} className="mt-10 mb-10 text-3xl sm:text-4xl font-bold text-neutral-900">
        Welcome to my space!
      </h1>

      <p className="max-w-4xl text-[20px] font-inter font-light text-neutral-700 leading-relaxed px-5 py-10 mb-10 bg-white/60 rounded-xl">
        Hey, my name is Xhemal Kodragjini. I am an AI Solution Engineer at Deloitte in Berlin, working on AI agents and agentic workflows. With 4+ years of industry experience across ML/AI engineering, Cloud, and MLOps, and a Master&rsquo;s degree in Data Science, I bring together practical engineering and research-driven thinking to build AI systems that hold up in the real world.
      </p>
      <div className="flex space-x-6">
        <a
          href="/assets/CV_Xhemal_Kodragjini.pdf"
          download="CV_Xhemal_Kodragjini.pdf"
          className="px-5 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition"
        >Download CV
        </a>
        <a href="#contact" className="px-5 py-3 border border-neutral-300 text-neutral-900 rounded-lg hover:border-neutral-900 transition">
          Contact me
        </a>
      </div>
    </div>
  );
}

