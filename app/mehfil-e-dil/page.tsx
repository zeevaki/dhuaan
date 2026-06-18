import Navbar from '@/components/Navbar'

export default function MehfilEDil() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">

        <section className="max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-8">
          <div className="w-12 h-px bg-amber-800" />
          <p className="urdu text-3xl text-amber-400 leading-loose">دل سے دل کی بات ہوتی ہے</p>
          <p className="text-stone-500 text-sm italic">"Heart speaks to heart in ways words cannot"</p>
          <div className="w-12 h-px bg-amber-800" />
          <h1 className="urdu text-5xl text-stone-100">محفلِ دل</h1>
          <p className="text-stone-400 text-lg tracking-wide">The Gathering of the Heart</p>
          <p className="text-stone-500 text-sm max-w-xl leading-relaxed">
            Share your moment. Your rooftop. Your chai at 2am. Your cigar by the window. Your hookah with old friends. This is the digital mehfil — where every heart is welcome.
          </p>
          <button className="mt-4 border border-amber-800 text-amber-500 hover:bg-amber-900/20 transition px-8 py-3 text-sm tracking-widest uppercase">
            Share Your Moment
          </button>
        </section>

        {/* Placeholder feed */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-stone-800 rounded-lg p-16 text-center">
            <p className="urdu text-2xl text-stone-700">محفل کا انتظار ہے</p>
            <p className="text-stone-600 text-sm italic mt-3">The gathering awaits its first guest</p>
          </div>
        </div>

      </main>
    </>
  )
}
