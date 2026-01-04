"use client";

import React, { useState, useEffect, useRef } from "react";
import { Utensils, Coffee, Sparkles, ChevronRight, Cookie } from "lucide-react";

/* =======================
   TYPE
======================= */
interface MenuItem {
  name: string;
  desc: string;
  price: number;
  gradient: string;
  badge?: string;
  temp?: string;
  img?: string;
}

/* =======================
   COMPONENT
======================= */
export const Menu = () => {
  const [activeTab, setActiveTab] = useState<"food" | "drink" | "snack" | "icecream">("food");
  const [isInView, setIsInView] = useState({
    header: false,
    tabs: false,
    grid: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const createObserver = (key: keyof typeof isInView) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(prev => ({ ...prev, [key]: true }));
          }
        },
        observerOptions
      );
    };

    const headerObserver = createObserver('header');
    const tabsObserver = createObserver('tabs');
    const gridObserver = createObserver('grid');

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (tabsRef.current) tabsObserver.observe(tabsRef.current);
    if (gridRef.current) gridObserver.observe(gridRef.current);

    return () => {
      headerObserver.disconnect();
      tabsObserver.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  /* =======================
     DATA
  ======================= */
  const foodMenu: MenuItem[] = [
    {
      name: "Nasi Ayam Salted Egg",
      desc: "Ayam crispy renyah dengan saus telur asin asli dengan rasa gurih dan asin",
      price: 24000,
      badge: "Best Seller",
      gradient: "from-amber-400 to-orange-500",
      img: "img/makanan/salted.jpeg"
    },
    {
      name: "Nasi Ayam Chili Padi",
      desc: "Nasi kulit ayam dengan chili padi bercita rasa gurih, asin dan pedas menyengat",
      price: 20000,
      gradient: "from-neutral-700 to-neutral-900",
      img: "img/makanan/"
    },
    {
      name: "Nasi Ayam Chili Oil",
      desc: "Nasi kulit ayam dengan chili oil bercita rasa gurih, asin dan pedas aromatik",
      price: 20000,
      gradient: "from-neutral-700 to-neutral-900",
      img: "img/makanan/"
    },
    {
      name: "Nasi Ayam Kungpao",
      desc: "Ayam crispy renyah dengan saus bercerita rasa asin, gurih, manis, pedas dan sedikit asam",
      price: 19000,
      badge: "Best Seller",
      gradient: "from-red-400 to-rose-500",
      img: "img/makanan/kungpao.JPG"
    },
    {
      name: "Nasi Ayam Teriyaki",
      desc: "Ayam crispy renyah dengan saus dari kecap dan bawang bercita rasa gurih, asin dan manis",
      price: 19000,
      badge: "Popular",
      gradient: "from-orange-400 to-amber-500",
      img: "img/makanan/teriyaki.JPG"
    },
    {
      name: "Nasi Ayam Matah",
      desc: "Ayam crispy renyah dengan sambal bercita rasa gurih, asin, dan pedas",
      price: 19000,
      badge: "Best Seller",
      gradient: "from-rose-400 to-pink-500",
      img: "img/makanan/matah.JPG"
    },
    {
      name: "Nasi Ayam Bawang",
      desc: "Ayam crispy renyah dengan sambal dari cabe pilihan dan bawang putih",
      price: 19000,
      gradient: "from-yellow-400 to-orange-400",
      img: "img/makanan/bawang.JPG"
    },
    {
      name: "Nasi Ayam Mentega",
      desc: "Ayam crispy renyah dengan saus bercita rasa gurih mentega dan manis",
      price: 19000,
      gradient: "from-yellow-300 to-amber-400",
      img: "img/makanan/mentega.jpeg"
    },
    {
      name: "Nasi Ayam Blackpepper",
      desc: "Ayam crispy renyah dengan saus bercita rasa lada yang pekat, manis, dan gurih",
      price: 19000,
      gradient: "from-neutral-700 to-neutral-900",
      img: "img/makanan/bp.JPG"
    },
    {
      name: "Nasi Telur Scramble",
      desc: "Nasi telur dengan 3 pilihan penyajian dan sambal.",
      price: 10000,
      badge: "Best Value",
      gradient: "from-lime-400 to-green-500",
      img: "img/makanan/acak.JPG"
    },
  ];

  const drinkMenu: MenuItem[] = [
    {
      name: "Air Mineral",
      desc: "Air mineral dalam kemasan botol.",
      price: 5000,
      gradient: "from-blue-300 to-cyan-400",
      img: "img/minuman/airmineral.jpg"
    },
    {
      name: "Teh",
      desc: "Teh pilihan, bisa disajikan panas atau dingin.",
      price: 6000,
      temp: "Hot / Cold",
      gradient: "from-amber-600 to-yellow-700",
      img: "img/minuman/esteh.JPG"
    },
    {
      name: "Ice Ocha",
      desc: "Teh ocha Jepang dingin yang menyegarkan.",
      price: 6000,
      gradient: "from-green-300 to-emerald-400",
      img: "img/minuman/iceocha.jpg"
    },
    {
      name: "Jeruk",
      desc: "Jeruk segar tanpa pengawet.",
      price: 7000,
      temp: "Hot / Cold",
      gradient: "from-orange-400 to-orange-600",
      img: "img/minuman/esjeruk.JPG"
    },
    {
      name: "Hot Kopi Tubruk",
      desc: "Kopi tubruk tradisional dengan ampas kopi asli.",
      price: 8000,
      gradient: "from-amber-800 to-neutral-900",
      img: "img/minuman/kopiturbruk.jpg"
    },
    {
      name: "Ice Americano",
      desc: "Espresso dingin dengan air, kopi hitam yang bold.",
      price: 8000,
      gradient: "from-neutral-700 to-neutral-900",
      img: "img/minuman/americano.jpg"
    },
    {
      name: "Lemon Tea",
      desc: "Teh segar dengan perasan lemon asli.",
      price: 10000,
      badge: "Fresh",
      temp: "Hot / Cold",
      gradient: "from-yellow-300 to-lime-400",
      img: "img/minuman/eslemon.JPG"
    },
    {
      name: "Ice Lychee Tea",
      desc: "Teh dengan sirup leci manis dan menyegarkan.",
      price: 10000,
      gradient: "from-pink-300 to-rose-400",
      img: "img/minuman/lychetea.jpg"
    },
    {
      name: "Ice Peach Tea",
      desc: "Teh dengan rasa buah persik yang manis segar.",
      price: 10000,
      gradient: "from-orange-300 to-peach-400",
      img: "img/minuman/peachtea.jpg"
    },
    {
      name: "Teh Tarik",
      desc: "Teh susu khas Malaysia yang creamy.",
      price: 10000,
      temp: "Hot / Cold",
      gradient: "from-amber-400 to-orange-500",
      img: "img/minuman/tehtarik.jpg"
    },
    {
      name: "Hot Kopi Tubruk Susu",
      desc: "Kopi tubruk tradisional dengan tambahan susu hangat.",
      price: 10000,
      gradient: "from-amber-600 to-orange-700",
      img: "img/minuman/kopitubruksusu.jpg"
    },
    {
      name: "Sprite",
      desc: "Minuman soda lemon-lime yang menyegarkan.",
      price: 10000,
      badge: "Soft Drink",
      gradient: "from-green-300 to-lime-400",
      img: "img/minuman/sprite.jpg"
    },
    {
      name: "Coca Cola",
      desc: "Minuman soda cola klasik yang ikonik.",
      price: 10000,
      badge: "Soft Drink",
      gradient: "from-red-600 to-red-800",
      img: "img/minuman/cocacola.jpg"
    },
    {
      name: "Green Tea",
      desc: "Teh hijau sehat dengan antioksidan tinggi.",
      price: 12000,
      temp: "Hot / Cold",
      badge: "Healthy",
      gradient: "from-green-400 to-emerald-600",
      img: "img/minuman/greentea.jpg"
    },
    {
      name: "Milo",
      desc: "Minuman coklat malt energi yang creamy.",
      price: 13000,
      temp: "Hot / Cold",
      gradient: "from-green-600 to-green-800",
      img: "img/minuman/milo.jpg"
    },
    {
      name: "Coklat",
      desc: "Minuman coklat manis dan creamy.",
      price: 13000,
      temp: "Hot / Cold",
      gradient: "from-orange-800 to-neutral-900",
      img: "img/minuman/escoklat.JPG"
    },
    {
      name: "Kopi Susu",
      desc: "Kopi kuat dengan susu creamy yang seimbang.",
      price: 13000,
      badge: "Best Seller",
      gradient: "from-amber-600 to-orange-700",
      img: "img/minuman/eskopisusu.JPG"
    },
    {
      name: "Ice Kopi Susu Caramel",
      desc: "Kopi susu dingin dengan sirup caramel manis.",
      price: 13000,
      badge: "Popular",
      gradient: "from-amber-500 to-orange-600",
      img: "img/minuman/kopicamel.jpg"
    },
    {
      name: "Ice Kopi Gula Aren",
      desc: "Kopi susu dingin dengan gula aren asli yang legit.",
      price: 13000,
      badge: "Signature",
      gradient: "from-amber-700 to-orange-800",
      img: "img/minuman/kopiaren.jpg"
    },
    {
      name: "Ice Soda Gembira",
      desc: "Soda berwarna-warni dengan susu dan sirup, penuh keceriaan.",
      price: 15000,
      badge: "Colorful",
      gradient: "from-pink-400 via-purple-400 to-blue-400",
      img: "img/minuman/sodagembira.jpg"
    },
  ];

  const snackMenu: MenuItem[] = [
    {
      name: "Donat Kentang",
      desc: "Donat lembut berbahan dasar kentang dengan taburan gula halus.",
      price: 3000,
      badge: "Best Seller",
      gradient: "from-yellow-400 to-amber-500",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400"
    },
    {
      name: "Cireng",
      desc: "Aci digoreng khas Sunda yang kenyal di luar dan lembut di dalam.",
      price: 12000,
      gradient: "from-yellow-400 to-amber-500",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400"
    },
    {
      name: "Siomay Ayam",
      desc: "Siomay ayam lembut dengan saus kacang spesial dan jeruk nipis.",
      price: 13000,
      gradient: "from-yellow-400 to-amber-500",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400"
    },
    {
      name: "Kentang Goreng",
      desc: "Kentang goreng renyah dengan pilihan saus sambal atau mayo.",
      price: 13000,
      badge: "Popular",
      gradient: "from-yellow-400 to-amber-500",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400"
    },
    {
      name: "Bakso Goreng",
      desc: "Bakso sapi goreng crispy dengan saus sambal khas.",
      price: 13000,
      gradient: "from-yellow-400 to-amber-500",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400"
    },
    {
      name: "Chicken Nuggets",
      desc: "Nugget ayam lembut dengan tepung crispy.",
      price: 15000,
      badge: "Kids Favorite",
      gradient: "from-orange-400 to-red-400",
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
    },
    {
      name: "Tahu Cabe Garam",
      desc: "Tahu goreng garing dengan taburan cabe garam yang pedas gurih.",
      price: 15000,
      badge: "Spicy",
      gradient: "from-orange-400 to-red-400",
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
    },
    {
      name: "Spicy Wings",
      desc: "Sayap ayam goreng dengan bumbu pedas yang menggigit.",
      price: 16000,
      badge: "Spicy",
      gradient: "from-orange-400 to-red-400",
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
    },
    {
      name: "BBQ Wings",
      desc: "Sayap ayam dengan saus BBQ manis dan smokey.",
      price: 16000,
      gradient: "from-orange-400 to-red-400",
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
    },
    {
      name: "Cheese Wings",
      desc: "Sayap ayam crispy dengan taburan keju parut melimpah.",
      price: 16000,
      badge: "Cheesy",
      gradient: "from-orange-400 to-red-400",
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
    },
    {
      name: "Mix Platter",
      desc: "Kombinasi nugget, wings, dan kentang goreng untuk berbagi.",
      price: 25000,
      badge: "Sharing",
      gradient: "from-orange-400 to-red-400",
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
    },
  ];

  const iceCreamMenu: MenuItem[] = [
    {
      name: "Ice Cream Vanilla",
      desc: "Es krim vanilla lembut dengan rasa manis klasik.",
      price: 5000,
      badge: "Classic",
      gradient: "from-yellow-100 to-amber-200",
      img: "img/icecream/vanilla.jpg"
    },
    {
      name: "Ice Cream Coklat",
      desc: "Es krim coklat creamy dengan rasa coklat yang kaya.",
      price: 5000,
      badge: "Popular",
      gradient: "from-amber-600 to-orange-800",
      img: "img/icecream/coklat.jpg"
    },
    {
      name: "Ice Cream Strawberry",
      desc: "Es krim strawberry segar dengan rasa buah yang manis.",
      price: 5000,
      badge: "Fruity",
      gradient: "from-pink-300 to-rose-400",
      img: "img/icecream/strawberry.jpg"
    },
  ];

  const currentMenu: MenuItem[] =
    activeTab === "food" ? foodMenu : activeTab === "drink" ? drinkMenu : activeTab === "snack" ? snackMenu : iceCreamMenu;

  /* =======================
     RENDER
  ======================= */
  return (
    <section
      id="menu"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
            isInView.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            Menu Special Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Jelajahi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Kelezatan
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Nikmati pilihan menu terbaik kami dengan cita rasa istimewa
          </p>
        </div>

        {/* Tabs */}
        <div 
          ref={tabsRef}
          className={`flex justify-center mb-8 sm:mb-10 md:mb-12 px-4 transition-all duration-1000 delay-200 ${
            isInView.tabs ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white rounded-full p-1 shadow-lg flex flex-wrap justify-center gap-1 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("food")}
              className={`flex-1 sm:flex-initial px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 text-xs sm:text-base font-semibold transition ${
                activeTab === "food"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                  : "text-gray-600"
              }`}
            >
              <Utensils size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Makanan</span>
            </button>
            <button
              onClick={() => setActiveTab("drink")}
              className={`flex-1 sm:flex-initial px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 text-xs sm:text-base font-semibold transition ${
                activeTab === "drink"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                  : "text-gray-600"
              }`}
            >
              <Coffee size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Minuman</span>
            </button>
            <button
              onClick={() => setActiveTab("snack")}
              className={`flex-1 sm:flex-initial px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 text-xs sm:text-base font-semibold transition ${
                activeTab === "snack"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                  : "text-gray-600"
              }`}
            >
              <Cookie size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Camilan</span>
            </button>
            <button
              onClick={() => setActiveTab("icecream")}
              className={`flex-1 sm:flex-initial px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 text-xs sm:text-base font-semibold transition ${
                activeTab === "icecream"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                  : "text-gray-600"
              }`}
            >
              <Sparkles size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Ice Cream</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {currentMenu.map((item, i) => (
            <div
              key={i}
              className={`group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isInView.grid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isInView.grid ? `${i * 50}ms` : '0ms'
              }}
            >
              <div className="h-40 xs:h-44 sm:h-48 md:h-52 relative overflow-hidden">
                {item.img ? (
                  <>
                    <img 
                      src={item.img} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {activeTab === "food" ? (
                        <Utensils size={60} className="sm:w-20 sm:h-20 text-white/30" />
                      ) : activeTab === "drink" ? (
                        <Coffee size={60} className="sm:w-20 sm:h-20 text-white/30" />
                      ) : activeTab === "snack" ? (
                        <Cookie size={60} className="sm:w-20 sm:h-20 text-white/30" />
                      ) : (
                        <Sparkles size={60} className="sm:w-20 sm:h-20 text-white/30" />
                      )}
                    </div>
                  </div>
                )}
                
                {item.badge && (
                  <span className="
                    absolute top-3 sm:top-4 right-3 sm:right-4
                    z-20
                    px-2 sm:px-3 py-1
                    rounded-full
                    text-[10px] sm:text-xs font-bold
                    text-white
                    bg-gradient-to-r from-orange-500 to-yellow-500
                    shadow-xl
                    ring-2 ring-white/80
                    backdrop-blur-sm
                  ">
                    {item.badge}
                  </span>
                )}

                {item.temp && (
                  <span className="
                    absolute top-3 sm:top-4 left-3 sm:left-4
                    z-20
                    px-2 sm:px-3 py-1
                    rounded-full
                    text-[10px] sm:text-xs font-semibold
                    text-gray-900
                    bg-white/95
                    shadow-xl
                    ring-1 ring-black/10
                    backdrop-blur-md
                  ">
                    {item.temp}
                  </span>
                )}
              </div>

              <div className="p-3 xs:p-4 sm:p-5 md:p-6">
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-1.5 xs:mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-2.5 xs:mb-3 sm:mb-4 line-clamp-2">
                  {item.desc}
                </p>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-500 mb-0.5 xs:mb-1">Harga</p>
                    <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}