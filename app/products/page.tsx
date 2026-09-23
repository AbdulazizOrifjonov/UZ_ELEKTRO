"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/shop/Header";
import { Footer } from "@/components/shop/Footer";
import { CatalogView } from "@/components/shop/CatalogView";

function ProductsInner() {
  const params = useSearchParams();
  const saleOnly = params.get("sale") === "1";

  return (
    <div className="min-h-screen bg-white">
      <Header active="/products" />

      <section className="relative flex h-[220px] items-center overflow-hidden bg-navy-950 text-white">
        <div className="container-shop">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FF5B00] font-bold">Katalog</p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-bold">
            {saleOnly ? "Aksiya Mahsulotlari" : "Professional Elektr va Qurilish Asboblari"}
          </h1>
          <p className="mt-2 text-white/70">DeWalt, Makita, Bosch va boshqa yetakchi brendlar bir joyda</p>
        </div>
      </section>

      <CatalogView saleOnly={saleOnly} title={saleOnly ? "Aksiya mahsulotlari" : "Barcha mahsulotlar"} />
      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsInner />
    </Suspense>
  );
}
