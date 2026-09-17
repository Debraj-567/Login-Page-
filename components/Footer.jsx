import Icon from "./Icon";
import { FOOTER_COLUMNS } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          <div>
            <a href="#top" className="flex items-center gap-2 font-extrabold text-lg">
              <span className="w-8 h-8 rounded-[9px] bg-ink flex items-center justify-center flex-none">
                <Icon name="i-node" />
              </span>
              Flowbridge
            </a>
            <p className="text-inksoft text-sm max-w-[30ch] mt-3">
              An automation &amp; AI studio — we build the systems that quietly run the repetitive parts of your business.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h5 className="text-xs font-bold uppercase tracking-wide text-inksoft mb-3">{col.heading}</h5>
              <ul className="list-none m-0 p-0 space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#toolkit" className="text-sm font-semibold hover:text-accent">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-line flex justify-between flex-wrap gap-3 text-sm text-inksoft">
          <span>© 2026 Flowbridge Studio</span>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="text-inksoft hover:text-ink">
              <Icon name="i-linkedin" />
            </a>
            <a href="#" aria-label="Instagram" className="text-inksoft hover:text-ink">
              <Icon name="i-instagram" />
            </a>
            <a href="mailto:hello@flowbridge.studio" aria-label="Email" className="text-inksoft hover:text-ink">
              <Icon name="i-email" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
