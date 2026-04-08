import Image from "next/image";

export function About() {
  return (
    <section className="about !justify-center !items-center !p-6 md:!p-12 lg:!p-24" id="about" style={{ display: 'flex', minHeight: '100vh', background: 'var(--blue)' }}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[10px] border-black rounded-full translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[300px] bg-black opacity-10 blur-[100px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] mx-auto gap-10 lg:gap-16 z-10 relative">
        
        {/* Left Side: Brutalist Image Card (60% of screen real estate) */}
        <div className="w-full lg:w-[60%] flex justify-center items-center reveal relative">
          <div className="w-full aspect-[4/5] relative rounded-[32px] overflow-hidden border-[6px] border-black bg-black transition-all hover:-translate-y-2 hover:shadow-[20px_20px_0px_var(--black)]" style={{ boxShadow: '16px 16px 0px var(--black)' }}>
            <Image
              src="/profile-2.png"
              alt="Aman Malu"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.05]"
              priority
            />
          </div>
          {/* Floating badge for Neo-Brutalist touch */}
          <div className="absolute -bottom-10 -right-4 lg:-right-8 bg-black text-white px-10 py-8 rounded-full border-4 border-[var(--gold)] transform rotate-[-5deg] hover:rotate-[5deg] transition-transform z-20 shadow-[8px_8px_0px_var(--gold)] max-w-xs scale-[1.15]">
            <span className="font-['BriceRSE'] text-3xl font-black block tracking-widest text-center">AGE 19</span>
            <span className="text-base font-bold tracking-widest text-[var(--gold)] text-center block mt-1">UNDEFEATED</span>
          </div>
        </div>

        {/* Right Side: Content Block (shorter, taking 40% remaining) */}
        <div className="w-full lg:w-[40%] about-text-content reveal !static !max-w-none !p-8 lg:!p-10 !bg-white !rounded-[40px]" style={{ boxShadow: '16px 16px 0px var(--black)', border: '6px solid var(--black)' }}>
          <div className="inline-flex items-center gap-3 px-5 py-2 border-[3px] border-black rounded-full mb-8 font-black text-sm tracking-[0.2em] uppercase bg-black text-white">
            ✦ ABOUT ME
          </div>
          
          <h2 className="font-['BriceRSE'] font-black leading-[1.05] tracking-tight mb-8 text-black uppercase" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
            NOT JUST A<br />
            <span className="text-black italic bg-[var(--gold)] px-3 block w-fit mt-3 border-4 border-black">FINANCE GUY</span>
          </h2>
          
          <p className="text-base lg:text-lg leading-[1.7] text-gray-800 font-bold mb-6">
            I&apos;m a <span className="text-black font-black bg-yellow-300 px-2 border-2 border-black">19-year-old boy</span> building muscle, money, and discipline — with occasional battles against procrastination <span className="underline decoration-wavy decoration-black decoration-2">(currently undefeated)</span>.
          </p>
          
          <p className="text-base lg:text-lg leading-[1.7] text-gray-800 font-bold mb-8">
            Cleared CFA Level 1, lifting consistently, and documenting the whole process so I can&apos;t quietly quit halfway. Not a guru, not perfect — <strong className="text-black font-black">just showing up and getting slightly better than yesterday.</strong>
          </p>
          
          <div className="bg-[var(--blue)] border-[4px] lg:border-l-[12px] lg:border-[4px] border-black p-5 mb-28 shadow-[8px_8px_0px_var(--black)] transition-transform hover:-translate-y-1 relative">
            <p className="text-lg lg:text-xl font-bold text-white border-none m-0 shadow-none leading-relaxed italic z-10 relative">
              &quot;I make content about finance, fitness, food, and everything that goes into building a life from scratch — at 19.&quot;
            </p>
          </div>
          
          {/* Explicitly padded distance so pills never overlap shadows */}
          <div className="flex flex-wrap gap-3 mt-32 pt-12">
            {[
              { icon: "📊", text: "Finance" },
              { icon: "🏋️", text: "Fitness" },
              { icon: "🍜", text: "Food" },
              { icon: "🎬", text: "Creator" },
              { icon: "📚", text: "Student" },
              { icon: "🌱", text: "Building in public" }
            ].map((pillar) => (
              <span key={pillar.text} className="flex items-center gap-2 px-5 py-2.5 bg-[var(--cream)] border-[3px] border-black rounded-full font-black text-black text-xs uppercase tracking-wider whitespace-nowrap hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--black)] hover:bg-white transition-all cursor-crosshair">
                <span className="text-xl min-w-fit">{pillar.icon}</span> {pillar.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
