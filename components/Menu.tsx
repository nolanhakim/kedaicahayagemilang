"use client";

import React, { useState, useEffect, useRef } from "react";
import { Utensils, Coffee, Cookie, Sparkles } from "lucide-react";

/* ── Types ── */
interface MenuItem {
  name: string;
  desc: string;
  price: number;
  gradient: string;
  badge?: string;
  temp?: string;
  img?: string;
}

/* ── useInView helper ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Tab definition ── */
type Tab = "food" | "drink" | "snack" | "icecream";
const TABS: { id: Tab; label: string; Icon: React.ElementType }[] = [
  { id: "food", label: "Makanan", Icon: Utensils },
  { id: "drink", label: "Minuman", Icon: Coffee },
  { id: "snack", label: "Camilan", Icon: Cookie },
  { id: "icecream", label: "Ice Cream", Icon: Sparkles },
];

/* ── Component ── */
export const Menu = () => {
  const [activeTab, setActiveTab] = useState<Tab>("food");
  const header = useInView(0.2);
  const tabs = useInView(0.2);
  const grid = useInView(0.1);

  /* ── DATA ── */
  const foodMenu: MenuItem[] = [
    { name: "Nasi Ayam Salted Egg", desc: "Ayam crispy renyah dengan saus telur asin asli dengan rasa gurih dan asin", price: 24000, badge: "Best Seller", gradient: "from-amber-400 to-orange-500", img: "img/makanan/salted.jpeg" },
    { name: "Nasi Ayam Chili Padi", desc: "Ayam crispy renyah dengan chili padi bercita rasa gurih, asin dan pedas menyengat", price: 20000, gradient: "from-neutral-700 to-neutral-900", img: "img/makanan/" },
    { name: "Nasi Ayam Chili Oil", desc: "Ayam crispy renyah dengan chili oil bercita rasa gurih, asin dan pedas aromatik", price: 20000, gradient: "from-neutral-700 to-neutral-900", img: "img/makanan/" },
    { name: "Nasi Ayam Kungpao", desc: "Ayam crispy renyah dengan saus bercita rasa asin, gurih, manis, pedas dan sedikit asam", price: 19000, badge: "Best Seller", gradient: "from-red-400 to-rose-500", img: "img/makanan/kungpao.JPG" },
    { name: "Nasi Ayam Teriyaki", desc: "Ayam crispy renyah dengan saus dari kecap dan bawang bercita rasa gurih, asin dan manis", price: 19000, badge: "Popular", gradient: "from-orange-400 to-amber-500", img: "img/makanan/teriyaki.JPG" },
    { name: "Nasi Ayam Matah", desc: "Ayam crispy renyah dengan sambal bercita rasa gurih, asin, dan pedas", price: 19000, badge: "Best Seller", gradient: "from-rose-400 to-pink-500", img: "img/makanan/matah.JPG" },
    { name: "Nasi Ayam Bawang", desc: "Ayam crispy renyah dengan sambal dari cabe pilihan dan bawang putih", price: 19000, gradient: "from-yellow-400 to-orange-400", img: "img/makanan/bawang.JPG" },
    { name: "Nasi Ayam Mentega", desc: "Ayam crispy renyah dengan saus bercita rasa gurih mentega dan manis", price: 19000, gradient: "from-yellow-300 to-amber-400", img: "img/makanan/mentega.jpeg" },
    { name: "Nasi Ayam Blackpepper", desc: "Ayam crispy renyah dengan saus bercita rasa lada yang pekat, manis, dan gurih", price: 19000, gradient: "from-neutral-700 to-neutral-900", img: "img/makanan/bp.JPG" },
    { name: "Nasi Telur Scramble", desc: "Nasi telur dengan 3 pilihan penyajian dan sambal.", price: 10000, badge: "Best Value", gradient: "from-lime-400 to-green-500", img: "img/makanan/acak.JPG" },
  ];

  const drinkMenu: MenuItem[] = [
    { name: "Air Mineral", desc: "Air mineral dalam kemasan botol.", price: 5000, gradient: "from-blue-300 to-cyan-400", img: "img/minuman/airmineral.jpg" },
    { name: "Teh", desc: "Teh pilihan, bisa disajikan panas atau dingin.", price: 6000, temp: "Hot/Cold", gradient: "from-amber-600 to-yellow-700", img: "img/minuman/esteh.JPG" },
    { name: "Ice Ocha", desc: "Teh ocha Jepang dingin yang menyegarkan.", price: 6000, gradient: "from-green-300 to-emerald-400", img: "img/minuman/iceocha.jpg" },
    { name: "Jeruk", desc: "Jeruk segar tanpa pengawet.", price: 7000, temp: "Hot/Cold", gradient: "from-orange-400 to-orange-600", img: "img/minuman/esjeruk.JPG" },
    { name: "Hot Kopi Tubruk", desc: "Kopi tubruk tradisional dengan ampas kopi asli.", price: 8000, gradient: "from-amber-800 to-neutral-900", img: "img/minuman/kopiturbruk.jpg" },
    { name: "Ice Americano", desc: "Espresso dingin dengan air, kopi hitam yang bold.", price: 8000, gradient: "from-neutral-700 to-neutral-900", img: "img/minuman/americano.jpg" },
    { name: "Lemon Tea", desc: "Teh segar dengan perasan lemon asli.", price: 10000, badge: "Fresh", temp: "Hot/Cold", gradient: "from-yellow-300 to-lime-400", img: "img/minuman/eslemon.JPG" },
    { name: "Ice Lychee Tea", desc: "Teh dengan sirup leci manis dan menyegarkan.", price: 10000, gradient: "from-pink-300 to-rose-400", img: "img/minuman/lychetea.jpg" },
    { name: "Ice Peach Tea", desc: "Teh dengan rasa buah persik yang manis segar.", price: 10000, gradient: "from-orange-300 to-amber-400", img: "img/minuman/peachtea.jpg" },
    { name: "Teh Tarik", desc: "Teh susu khas Malaysia yang creamy.", price: 10000, temp: "Hot/Cold", gradient: "from-amber-400 to-orange-500", img: "img/minuman/tehtarik.jpg" },
    { name: "Kopi Tubruk Susu", desc: "Kopi tubruk tradisional dengan tambahan susu hangat.", price: 10000, gradient: "from-amber-600 to-orange-700", img: "img/minuman/kopitubruksusu.jpg" },
    { name: "Sprite", desc: "Minuman soda lemon-lime yang menyegarkan.", price: 10000, badge: "Soft Drink", gradient: "from-green-300 to-lime-400", img: "img/minuman/sprite.jpg" },
    { name: "Coca Cola", desc: "Minuman soda cola klasik yang ikonik.", price: 10000, badge: "Soft Drink", gradient: "from-red-600 to-red-800", img: "img/minuman/cocacola.jpg" },
    { name: "Green Tea", desc: "Teh hijau sehat dengan antioksidan tinggi.", price: 12000, badge: "Healthy", temp: "Hot/Cold", gradient: "from-green-400 to-emerald-600", img: "img/minuman/greentea.jpg" },
    { name: "Milo", desc: "Minuman coklat malt energi yang creamy.", price: 13000, temp: "Hot/Cold", gradient: "from-green-600 to-green-800", img: "img/minuman/milo.jpg" },
    { name: "Coklat", desc: "Minuman coklat manis dan creamy.", price: 13000, temp: "Hot/Cold", gradient: "from-orange-800 to-neutral-900", img: "img/minuman/escoklat.JPG" },
    { name: "Kopi Susu", desc: "Kopi kuat dengan susu creamy yang seimbang.", price: 13000, badge: "Best Seller", gradient: "from-amber-600 to-orange-700", img: "img/minuman/eskopisusu.JPG" },
    { name: "Kopi Susu Caramel", desc: "Kopi susu dingin dengan sirup caramel manis.", price: 13000, badge: "Popular", gradient: "from-amber-500 to-orange-600", img: "img/minuman/kopicamel.jpg" },
    { name: "Kopi Gula Aren", desc: "Kopi susu dingin dengan gula aren asli yang legit.", price: 13000, badge: "Signature", gradient: "from-amber-700 to-orange-800", img: "img/minuman/kopiaren.jpg" },
    { name: "Ice Soda Gembira", desc: "Soda berwarna-warni dengan susu dan sirup, penuh keceriaan.", price: 15000, badge: "Colorful", gradient: "from-pink-400 to-blue-400", img: "img/minuman/sodagembira.jpg" },
  ];

  const snackMenu: MenuItem[] = [
    { name: "Donat Kentang", desc: "Donat lembut berbahan dasar kentang dengan taburan gula halus.", price: 3000, badge: "Best Seller", gradient: "from-yellow-400 to-amber-500" },
    { name: "Cireng", desc: "Aci digoreng khas Sunda yang kenyal di luar dan lembut di dalam.", price: 12000, gradient: "from-yellow-400 to-amber-500" },
    { name: "Siomay Ayam", desc: "Siomay ayam lembut dengan saus kacang spesial dan jeruk nipis.", price: 13000, gradient: "from-yellow-400 to-amber-500" },
    { name: "Kentang Goreng", desc: "Kentang goreng renyah dengan pilihan saus sambal atau mayo.", price: 13000, badge: "Popular", gradient: "from-yellow-400 to-amber-500" },
    { name: "Bakso Goreng", desc: "Bakso sapi goreng crispy dengan saus sambal khas.", price: 13000, gradient: "from-yellow-400 to-amber-500" },
    { name: "Chicken Nuggets", desc: "Nugget ayam lembut dengan tepung crispy.", price: 15000, badge: "Kids Favorite", gradient: "from-orange-400 to-red-400" },
    { name: "Tahu Cabe Garam", desc: "Tahu goreng garing dengan taburan cabe garam yang pedas gurih.", price: 15000, badge: "Spicy", gradient: "from-orange-400 to-red-400" },
    { name: "Spicy Wings", desc: "Sayap ayam goreng dengan bumbu pedas yang menggigit.", price: 16000, badge: "Spicy", gradient: "from-orange-400 to-red-400" },
    { name: "BBQ Wings", desc: "Sayap ayam dengan saus BBQ manis dan smokey.", price: 16000, gradient: "from-orange-400 to-red-400" },
    { name: "Cheese Wings", desc: "Sayap ayam crispy dengan taburan keju parut melimpah.", price: 16000, badge: "Cheesy", gradient: "from-orange-400 to-red-400" },
    { name: "Mix Platter", desc: "Kombinasi nugget, wings, dan kentang goreng untuk berbagi.", price: 25000, badge: "Sharing", gradient: "from-orange-400 to-red-400" },
  ];

  const iceCreamMenu: MenuItem[] = [
    { name: "Ice Cream Vanilla", desc: "Es krim vanilla lembut dengan rasa manis klasik.", price: 5000, badge: "Classic", gradient: "from-yellow-100 to-amber-200", img: "img/icecream/vanilla.jpg" },
    { name: "Ice Cream Coklat", desc: "Es krim coklat creamy dengan rasa coklat yang kaya.", price: 5000, badge: "Popular", gradient: "from-amber-600 to-orange-800", img: "img/icecream/coklat.jpg" },
    { name: "Ice Cream Strawberry", desc: "Es krim strawberry segar dengan rasa buah yang manis.", price: 5000, badge: "Fruity", gradient: "from-pink-300 to-rose-400", img: "img/icecream/strawberry.jpg" },
  ];

  const currentMenu =
    activeTab === "food" ? foodMenu
      : activeTab === "drink" ? drinkMenu
        : activeTab === "snack" ? snackMenu
          : iceCreamMenu;

  const currentIcon = TABS.find(t => t.id === activeTab)?.Icon ?? Utensils;

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#FDFAF7] relative overflow-hidden font-sans"
    >
      {/* Vertical rules */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-24 w-px h-full bg-stone-200 hidden md:block" />
        <div className="absolute top-0 right-24 w-px h-full bg-stone-200 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <div
          ref={header.ref}
          className={`mb-14 md:mb-16 transition-all duration-700 ${header.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
              Menu Special Kami
            </span>
          </div>
          <h2 className="font-serif font-black text-stone-900 leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl mb-4">
            Jelajahi <em className="not-italic text-orange-500">Kelezatan</em>
          </h2>
          <p className="text-stone-500 font-light text-base max-w-md leading-relaxed">
            Nikmati pilihan menu terbaik kami dengan cita rasa istimewa yang dibuat sepenuh hati.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div
          ref={tabs.ref}
          className={`mb-10 md:mb-12 transition-all duration-700 delay-100 ${tabs.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Desktop: horizontal rule tabs */}
          <div className="hidden sm:flex border-b border-stone-200 gap-0">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 -mb-px ${activeTab === id
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-stone-400 hover:text-stone-700"
                  }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>

          {/* Mobile: pill row */}
          <div className="flex sm:hidden gap-2 overflow-x-auto pb-1 no-scrollbar">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 text-xs font-medium border transition-all duration-200 ${activeTab === id
                    ? "bg-orange-600 border-orange-600 text-white"
                    : "bg-white border-stone-200 text-stone-500"
                  }`}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <div
          ref={grid.ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200"
        >
          {currentMenu.map((item, i) => (
            <div
              key={`${activeTab}-${i}`}
              className={`group bg-[#FDFAF7] flex flex-col transition-all duration-500 ${grid.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: grid.inView ? `${Math.min(i * 40, 400)}ms` : "0ms" }}
            >
              {/* Image / Fallback */}
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-100">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    {React.createElement(currentIcon, { size: 40, className: "text-white/30" })}
                  </div>
                )}

                {/* Overlay gradient on real images */}
                {item.img && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                )}

                {/* Badge */}
                {item.badge && (
                  <span className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-orange-600 text-white text-[10px] font-medium tracking-wide">
                    {item.badge}
                  </span>
                )}

                {/* Temp */}
                {item.temp && (
                  <span className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-white/90 text-stone-700 text-[10px] font-medium tracking-wide">
                    {item.temp}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-4 md:p-5">
                <h3 className="font-medium text-stone-900 text-sm md:text-base leading-snug mb-1.5 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed line-clamp-2 mb-4 flex-1">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100">
                  <span className="font-serif font-bold text-stone-900 text-base md:text-lg">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-stone-300 font-normal">
                    /porsi
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};