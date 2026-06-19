import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-stone-800 bg-stone-950/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="urdu text-xl text-amber-400">دھواں</span>
          <span className="text-xs tracking-widest uppercase text-stone-500 font-light">Dhuaan.me</span>
        </Link>
        <div className="flex gap-8 text-sm">
          <Link href="/dhuaan-e-dil" className="flex flex-col items-center hover:text-amber-400 transition group">
            <span className="urdu text-base text-stone-400 group-hover:text-amber-400 transition">دھوانِ دل</span>
            <span className="text-stone-600 text-xs tracking-wide group-hover:text-amber-600 transition">Dhuaan-e-Dil</span>
          </Link>
          <Link href="/soz-e-dil" className="flex flex-col items-center hover:text-amber-400 transition group">
            <span className="urdu text-base text-stone-400 group-hover:text-amber-400 transition">سوزِ دل</span>
            <span className="text-stone-600 text-xs tracking-wide group-hover:text-amber-600 transition">Soz-e-Dil</span>
          </Link>
          <Link href="/mehfil-e-dil" className="flex flex-col items-center hover:text-amber-400 transition group">
            <span className="urdu text-base text-stone-400 group-hover:text-amber-400 transition">محفلِ دل</span>
            <span className="text-stone-600 text-xs tracking-wide group-hover:text-amber-600 transition">Mehfil-e-Dil</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
