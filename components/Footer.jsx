import Icon from "./Icon";
import { CATEGORIES, SYSTEMS, FOOTER, CONTACT_EMAIL } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface2 pt-14 pb-8">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-extrabold text-lg">
              <span className="w-8 h-8 rounded-[9px] bg-accent text-accentink flex items-center justify-center flex-none">
                <Icon name="i-node" />
              </span>
              Flowbridge
            </a>
            <p className="text-inksoft text-sm max-w-[34ch] mt-3">{FOOTER.positioning}</p>
          </div>

          {CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <h4 className="text-[11px] uppercase tracking-[0.16em] text-inksoft font-semibold mb-3">{cat.label}</h4>
              <ul className="list-none m-0 p-0 space-y-2">
                {SYSTEMS.filter((s) => s.category === cat.id).map((s) => (
                  <li key={s.id}>
                    <a href="#systems" className="text-sm font-semibold hover:text-accent">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-line flex justify-between items-center flex-wrap gap-3 text-sm text-inksoft">
          <span>{FOOTER.rights}</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-ink">
            <Icon name="i-email" /> {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
