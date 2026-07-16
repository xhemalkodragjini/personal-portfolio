import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-neutral-50 text-neutral-900">
            <div className="max-w-2xl mx-auto text-center">
                <h2 style={{ fontFamily: 'Raleway, sans-serif' }} className="text-3xl font-semibold mb-10">Contact me via:</h2>
                <div className="flex justify-center gap-5 md:gap-20 text-neutral-600 text-lg">
                    <a
                        href="mailto:xhemal.kodragjini98@gmail.com"
                        className="flex items-center hover:text-neutral-900 transition"
                    >
                        <FaMailBulk className="w-5 h-5 mr-2" /> Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/xhemal-kodragjini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-neutral-900 transition"
                    >
                        <FaLinkedin className="w-5 h-5 mr-2" /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/xhemalkodragjini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-neutral-900 transition"
                    >
                        <FaGithub className="w-5 h-5 mr-2" /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
