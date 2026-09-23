import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, hideTextOnMobile = false, className }: { dark?: boolean; hideTextOnMobile?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center shrink-0", className)}>
      <div className={cn("inline-flex items-center transition-all", dark ? "bg-white px-2.5 py-1 rounded-xl shadow-xs" : "")}>
        <img
          src="/logo.png"
          alt="UZO ELEKTRO MARKET"
          className={cn(
            "h-[36px] sm:h-[54px] w-auto object-contain transition-all",
            hideTextOnMobile ? "max-w-[150px] md:max-w-none" : ""
          )}
        />
      </div>
    </Link>
  );
}
