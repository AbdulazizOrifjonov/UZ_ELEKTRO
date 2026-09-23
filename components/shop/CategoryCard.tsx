import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Category } from "@/types/database";

const FALLBACK_CATEGORY_IMAGES: Record<string, string> = {
  bolgarkalar: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop",
  "drellar-va-shurupovyortlar": "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop",
  perforatorlar: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop",
  "svarka-apparatlari": "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=800&auto=format&fit=crop",
  "lazer-uravenlar": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
  aksessuarlar: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop",
};

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop";

export function CategoryCard({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  let imageUrl = category.image_url || FALLBACK_CATEGORY_IMAGES[category.slug] || DEFAULT_IMAGE;
  if (imageUrl.includes("1522335789203") || imageUrl.includes("1509042239860")) {
    imageUrl = FALLBACK_CATEGORY_IMAGES[category.slug] || DEFAULT_IMAGE;
  }

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={`group relative flex h-[160px] sm:h-[185px] w-[220px] sm:w-[270px] shrink-0 items-end overflow-hidden rounded-2xl bg-navy-950 border border-navy-800/80 shadow-md hover:shadow-xl hover:shadow-navy-950/20 hover:border-[#FF5B00]/60 transition-all duration-300 select-none ${className}`}
    >
      <Image
        src={imageUrl}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 220px, 270px"
        className="object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-110"
      />
      {/* Luxury dark gradient overlay for crystal clear readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent transition-opacity duration-300 group-hover:from-navy-950/90" />

      {/* Top category label badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-navy-950/70 border border-white/10 backdrop-blur-xs text-[10px] sm:text-[11px] font-bold tracking-wider text-[#FF5B00] uppercase">
          Kategoriya
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 flex w-full items-end justify-between p-4 text-white">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight drop-shadow-xs group-hover:text-orange-200 transition-colors">
            {category.name}
          </h3>
          <span className="text-[11px] sm:text-xs text-white/70 group-hover:text-white/90 transition-colors flex items-center gap-1 mt-0.5 font-medium">
            Kolleksiyani ko'rish
          </span>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-xs transition-all duration-300 group-hover:bg-[#FF5B00] group-hover:text-white group-hover:translate-x-0.5 group-hover:scale-105 shadow-xs">
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

