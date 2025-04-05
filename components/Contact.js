import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-[#f6f6f6] text-black">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6">📬 Get in Touch</h2>
                <p className="text-lg text-gray-400 mb-10">
                    I am always open to new opportunities, collaborations, or just a chat. Feel free to reach out.
                </p>
                <div className="flex justify-center gap-5 md:gap-20 text-gray-700 text-lg">
                    <a
                        href="mailto:xhemal.kodragjini98@gmail.com"
                        className="flex items-center hover:text-blue-500 transition"
                    >
                        <FaMailBulk className="w-5 h-5 mr-2" /> Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/xhemal-kodragjini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-blue-700 transition"
                    >
                        <FaLinkedin className="w-5 h-5 mr-2" /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/xhemalkodragjini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-blue-700 transition"
                    >
                        <FaGithub className="w-5 h-5 mr-2" /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
