import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, hideTextOnMobile = false, className }: { dark?: boolean; hideTextOnMobile?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center shrink-0", className)}>
      <div className={cn("inline-flex items-center transition-all", dark ? "bg-white px-3 py-1.5 rounded-xl shadow-xs" : "")}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-xl">
            ⚡
          </div>
          <div className={cn("font-black tracking-tight flex flex-col justify-center", hideTextOnMobile ? "hidden md:flex" : "flex")}>
            <span className={cn("text-lg leading-none", dark ? "text-navy-900" : "text-navy-900")}>UZO ELEKTRO</span>
            <span className="text-[11px] text-orange-600 leading-none tracking-widest mt-0.5">MARKET</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
