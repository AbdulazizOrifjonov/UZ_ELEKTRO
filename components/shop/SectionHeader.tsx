import Link from "next/link";

export function SectionHeader({
  title,
  href,
  extra,
}: {
  title: string;
  href?: string;
  extra?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center justify-between border-b border-navy-100 pb-3">
      <div className="flex items-center gap-2.5">
        <span className="h-5 w-1 rounded-full bg-[#FF5B00]" />
        <h2 className="text-xl font-bold text-navy-900">{title}</h2>
      </div>
      <div className="flex items-center gap-4">
        {extra}
        {href && (
          <Link href={href} className="text-sm font-semibold text-[#FF5B00] hover:text-[#E04F00] transition">
            Barchasini ko'rish →
          </Link>
        )}
      </div>
    </div>
  );
}
