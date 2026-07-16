export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="pt-20 mb-10 px-6 lg:px-0">
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-accent" />
          <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">{eyebrow}</span>
        </div>
      )}
      <h1
        style={{ fontFamily: 'Raleway, sans-serif' }}
        className="text-neutral-900 font-semibold text-[26px] leading-[121.49%]"
      >
        {title}
      </h1>
    </div>
  );
}
