import { GlobeStickers } from "@/components/ui/globe-stickers";

export function Travel() {
  return (
    <section className="projects-section !p-6 md:!p-12 lg:!p-24" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--ink)' }} id="travel">
      {/* Brutalist grid background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-8 z-10 relative">
        <div className="w-full lg:w-5/12 reveal flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 border-[3px] border-[var(--gold)] bg-[var(--gold)]/10 rounded-full mb-8 font-black text-sm tracking-[0.2em] text-[var(--gold)] uppercase w-fit">
            ✦ WANDERLUST
          </div>
          
          <h2 className="m-0 font-['BriceRSE'] font-black leading-[1] tracking-tight text-white uppercase" style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)' }}>
            Cities I<br />
            <span className="text-[var(--black)] bg-[var(--gold)] px-4 py-1 mt-3 inline-block border-[6px] border-white transform -rotate-2">
              Will Conquer
            </span>
          </h2>
          
          <div className="bg-white/10 backdrop-blur-xl border-4 border-white/20 p-8 rounded-[32px] mt-10 shadow-[12px_12px_0px_rgba(255,255,255,0.1)]">
            <p className="m-0 text-xl leading-relaxed text-gray-200 font-bold">
              Building the life and the business to afford the freedom to go anywhere. Here are the places on my bucket list to secure the bag, hit the gym, and film content.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-10 pl-2">
            {[
              { icon: "🏙️", name: "Dubai", color: "bg-[#2C5AFF]" },
              { icon: "🗽", name: "New York", color: "bg-[#7161EF]" },
              { icon: "🗻", name: "Switzerland", color: "bg-[#FFA500]" },
              { icon: "🗼", name: "Paris", color: "bg-[#FF3366]" },
              { icon: "🗾", name: "Tokyo", color: "bg-[#00C9A7]" },
            ].map((city, i) => (
               <span 
                 key={city.name} 
                 className={`reveal inline-flex items-center gap-3 pl-8 pr-10 py-3 border-[3px] border-white rounded-full font-black text-white text-md uppercase tracking-wider whitespace-nowrap hover:scale-105 transition-transform ${city.color} shadow-[6px_6px_0px_var(--black)] cursor-pointer`}
                 style={{ transitionDelay: `${i * 100}ms` }}
               >
                 <span className="text-2xl min-w-fit">{city.icon}</span> {city.name}
               </span>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-7/12 reveal relative mt-16 lg:mt-0 flex justify-center items-center pointer-events-auto">
          {/* Decorative frame behind the globe */}
          <div className="absolute inset-0 bg-[var(--blue)] rounded-full blur-[120px] opacity-20 pointer-events-none" />
          <div className="relative w-full max-w-[800px] aspect-square flex justify-center items-center transform lg:translate-x-8">
            <GlobeStickers className="w-full h-full transform scale-[1.2] lg:scale-[1.3] origin-center cursor-move" speed={0.004} />
          </div>
        </div>
      </div>
    </section>
  );
}
