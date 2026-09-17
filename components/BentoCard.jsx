export default function BentoCard({ delay, title, text, children }) {
  return (
    <div
      className="bg-surface border border-line rounded-xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardlg"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="rounded-xl bg-surface2 border border-line p-4 mb-5 min-h-[168px] flex items-center justify-center">
        {children}
      </div>
      <h4 className="text-xl font-extrabold mb-2">{title}</h4>
      <p className="text-inksoft text-sm">{text}</p>
    </div>
  );
}
