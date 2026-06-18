import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">

        {/* Hero — full screen, she'r */}
        <section className="flex-1 flex flex-col items-center justify-center min-h-screen px-6 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 opacity-90" />
          <div className="relative z-10 flex flex-col items-center gap-10 max-w-2xl">
            <div className="w-16 h-px bg-amber-700 mx-auto" />
            <div className="flex flex-col gap-3">
              <p className="urdu text-4xl text-amber-300 leading-loose">دھواں کہاں سے اُٹھتا ہے</p>
              <p className="urdu text-4xl text-amber-300 leading-loose">جہاں دل جلتا ہے وہاں سے</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-stone-400 text-sm italic tracking-wide">"Where does the smoke rise from?"</p>
              <p className="text-stone-400 text-sm italic tracking-wide">"From wherever the heart is burning"</p>
            </div>
            <div className="w-16 h-px bg-amber-700 mx-auto" />
            <div className="flex flex-col items-center gap-2">
              <h1 className="urdu text-6xl font-bold text-stone-100 tracking-wide">دھواں</h1>
              <p className="text-xs tracking-[0.4em] uppercase text-stone-500">Dhuaan.me</p>
            </div>
          </div>
        </section>

        {/* Three pages */}
        <section className="max-w-5xl mx-auto w-full px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800">

          <Link href="/dhuaan-e-dil" className="bg-stone-950 p-10 flex flex-col gap-4 hover:bg-stone-900 transition group">
            <p className="urdu text-3xl text-amber-400 group-hover:text-amber-300 transition">دھوانِ دل</p>
            <h2 className="text-lg font-semibold text-stone-200">Dhuaan-e-Dil</h2>
            <p className="text-stone-500 text-sm leading-relaxed">Smoke of the Heart — the spiritual thread connecting cigars, hookah, chai and the Sufi soul</p>
          </Link>

          <Link href="/soz-e-dil" className="bg-stone-950 p-10 flex flex-col gap-4 hover:bg-stone-900 transition group">
            <p className="urdu text-3xl text-amber-400 group-hover:text-amber-300 transition">سوزِ دل</p>
            <h2 className="text-lg font-semibold text-stone-200">Soz-e-Dil</h2>
            <p className="text-stone-500 text-sm leading-relaxed">The Burning of the Heart — pairings of cigar, chai, hookah and the moments they belong to</p>
          </Link>

          <Link href="/mehfil-e-dil" className="bg-stone-950 p-10 flex flex-col gap-4 hover:bg-stone-900 transition group">
            <p className="urdu text-3xl text-amber-400 group-hover:text-amber-300 transition">محفلِ دل</p>
            <h2 className="text-lg font-semibold text-stone-200">Mehfil-e-Dil</h2>
            <p className="text-stone-500 text-sm leading-relaxed">The Gathering of the Heart — share your moment, your rooftop, your chai, your circle</p>
          </Link>

        </section>

        <footer className="text-center py-8 text-stone-700 text-xs tracking-widest uppercase border-t border-stone-900">
          Dhuaan.me — {new Date().getFullYear()}
        </footer>

      </main>
    </>
  )
}
