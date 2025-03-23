export default function Badge({ text }) {
    return (
      <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-800 mr-2 mb-2">
        {text}
      </span>
    );
  }