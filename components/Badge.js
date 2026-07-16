export default function Badge({ text }) {
    return (
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200 mr-2 mb-2">
        {text}
      </span>
    );
  }