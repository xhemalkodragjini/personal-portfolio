import CardImage from "./CardImage";

export default function DetailsCard({ title, logo, details, setIsOpen }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30 backdrop-blur-sm">
            <div className="bg-white p-6 m-5 max-w-4xl rounded-2xl shadow-lg w-full max-h-[90vh] overflow-y-auto relative">
                <button
                    className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 text-2xl transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <h3 className="text-xl font-medium text-neutral-900 mb-6">{title} &mdash; Details</h3>
                <div className="mx-auto max-w-3xl">
                    <CardImage logo={logo} />
                </div>
                <div className="mt-8">
                    {details.map((text, index) => (
                        <p className="mb-4 text-left text-neutral-600 flex gap-3" key={index}>
                            <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-accent shrink-0" />
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}