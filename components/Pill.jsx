export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-line text-sm font-semibold text-inksoft shadow-card">
      {children}
    </span>
  );
}
