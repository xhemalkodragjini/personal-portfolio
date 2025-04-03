import CardImage from "./CardImage";

export default function DetailsCard({ title, logo, details, setIsOpen }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30 backdrop-blur-sm">
            <div className="bg-white p-6 m-5 max-w-4xl rounded-lg shadow-lg w-full max-h-[90vh] overflow-y-auto relative">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <h3 className="text-xl font-semibold mb-6">{title} -- Details</h3>
                <div className="mx-auto max-w-3xl">
                    <CardImage logo={logo} />
                </div>
                <div className="mt-8">
                    {details.map((text, index) => (
                        <p className="mb-4 text-left" key={index}>
                            <span className="text-xl mr-2">➡️</span>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}