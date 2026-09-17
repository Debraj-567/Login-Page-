export default function Icon({ name, className = "w-4 h-4" }) {
  return (
    <svg className={className}>
      <use href={`#${name}`} />
    </svg>
  );
}
