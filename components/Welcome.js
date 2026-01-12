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

      <h1 style={{ fontFamily: 'Raleway, sans-serif' }} className="mt-10 mb-10 text-3xl sm:text-4xl font-bold text-black">
        Welcome to my space!
      </h1>

      <p className="max-w-4xl text-[20px] font-inter font-light text-black leading-relaxed px-5 py-10 mb-10 bg-[#fbfbfb]/50 rounded-xl">
        Hey, my name is Xhemal Kodragjini. I am a Machine Learning Engineer with 4+ years of industry experience across ML/AI engineering, Cloud, and MLOps. By expanding my role beyond core ML into cloud and deployment work, I’ve built a well-rounded skill set and can support the full ML lifecycle: from research to production. With an MSc in Data Science, I bring both theoretical foundations and practical engineering experience, and I’m looking to continue growing as an ML/AI Engineer.
      </p>
      <div className="flex space-x-15">
        <a
          href="/assets/CV_Xhemal_Kodragjini.pdf"
          download="CV_Xhemal_Kodragjini.pdf"
          className="px-5 py-3 bg-[#FF8686] text-white rounded-lg hover:bg-[#FF4343] transition"
        >Download CV
        </a>
        <a href="#contact" className="px-5 py-3 bg-[#AED7AE] text-white rounded-lg hover:bg-[#63CD63] transition">
          Contact me
        </a>
      </div>
    </div>
  );
}

