import Link from "next/link";

export function RelatedLinks({
  title = "Related",
  links,
}: {
  title?: string;
  links: { href: string; label: string }[];
}) {
  if (!links.length) return null;
  return (
    <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 print:hidden">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-medium hover:underline"
              style={{ color: "#c8102e" }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
