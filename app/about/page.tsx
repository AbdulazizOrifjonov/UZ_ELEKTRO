"use client";
import { Suspense } from "react";
import { Header } from "@/components/shop/Header";
import { Footer } from "@/components/shop/Footer";

function HeaderWithSuspense() {
  return <Header active="/about" />;
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="h-[76px]" />}>
        <HeaderWithSuspense />
      </Suspense>
      <div className="container-shop py-16 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-navy-900 mb-4">Biz haqimizda</h1>
        <p className="text-navy-900/70 mb-6">
          UZO ELEKTRO MARKET — O'zbekistondagi professional elektr asboblari va qurilish jihozlarining
          ishonchli do'koni. Biz DeWalt, Bosch, Makita, Total, Crown, Resanta, Hilda va boshqa nufuzli
          dunyo brendlarining original bolgarkalari, shurupovyortlari, drellari, perforatorlari, payvandlash
          apparatlari hamda zamonaviy lazerli o'lchov vositalarini taqdim etamiz.
        </p>
        <p className="text-navy-900/70">
          Bizning maqsadimiz — ustalar, quruvchilar va har bir xonadon sohibiga eng sifatli,
          chidamli va kafolatlangan asboblarni qulay narxda yetkazib berish. Barcha mahsulotlarimizga rasmiy kafolat
          beriladi va O'zbekiston bo'ylab tezkor yetkazib berish xizmati mavjud.
        </p>
      </div>
      <Footer />
    </div>
  );
}