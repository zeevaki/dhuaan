import Navbar from '@/components/Navbar'

const pairings = [
  {
    title: 'The Classic',
    urdu: 'کلاسک جوڑی',
    cigar: 'Medium-bodied cigar',
    drink: 'Single malt whiskey',
    chai: 'Karak chai, no sugar',
    mood: 'Late evening. Leather armchair. A book you have been meaning to finish.',
    verse: 'رات کی خاموشی میں دھواں اور جام',
    translation: '"Smoke and glass in the silence of the night"',
  },
  {
    title: 'The Lahori Night',
    urdu: 'لاہوری رات',
    cigar: 'Mild cigarillo',
    drink: 'Rooftop chai — doodh patti',
    chai: 'Strong, sweet, milky',
    mood: 'Rooftop in Lahore. 1am. Old city lights. Friends who have known you for years.',
    verse: 'یاروں کی محفل میں چائے کا پیالہ',
    translation: '"A cup of chai in the company of old friends"',
  },
  {
    title: 'The Sufi Morning',
    urdu: 'صوفیانہ صبح',
    cigar: 'No cigar — just stillness',
    drink: 'Qehwa — green cardamom tea',
    chai: 'Qehwa with saffron',
    mood: 'Before fajr. Quiet. The world has not woken yet. Only you and the light.',
    verse: 'سحر کی خاموشی میں قہوہ اور دعا',
    translation: '"Qehwa and prayer in the silence before dawn"',
  },
  {
    title: 'The Godfather',
    urdu: 'گاڈ فادر',
    cigar: 'Full-bodied Cuban or Dominican',
    drink: 'Aged bourbon or cognac',
    chai: 'Black coffee — no chai',
    mood: 'A decision has been made. The room is quiet. You are the last one sitting.',
    verse: 'جب فیصلہ ہو جائے تو دھواں ہی گواہ ہے',
    translation: '"When the decision is made, only the smoke bears witness"',
  },
]

export default function SozEDil() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">

        <section className="max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-8">
          <div className="w-12 h-px bg-amber-800" />
          <p className="urdu text-3xl text-amber-400 leading-loose">جلنا بھی عبادت ہے جب دل میں محبت ہو</p>
          <p className="text-stone-500 text-sm italic">"Even burning is worship when the heart holds love"</p>
          <div className="w-12 h-px bg-amber-800" />
          <h1 className="urdu text-5xl text-stone-100">سوزِ دل</h1>
          <p className="text-stone-400 text-lg tracking-wide">The Burning of the Heart</p>
          <p className="text-stone-500 text-sm max-w-xl leading-relaxed">
            Every cigar, every hookah, every cup of chai belongs to a mood, a moment, a feeling. These are not just pairings. They are scenes from a life lived slowly.
          </p>
        </section>

        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairings.map((p) => (
            <div key={p.title} className="bg-stone-900 border border-stone-800 rounded-lg p-8 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-stone-100">{p.title}</h2>
                  <p className="urdu text-lg text-amber-500 mt-1">{p.urdu}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex gap-3">
                  <span className="text-stone-600 w-16 shrink-0">Cigar</span>
                  <span className="text-stone-300">{p.cigar}</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-stone-600 w-16 shrink-0">Drink</span>
                  <span className="text-stone-300">{p.drink}</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-stone-600 w-16 shrink-0">Chai</span>
                  <span className="text-stone-300">{p.chai}</span>
                </div>
              </div>
              <p className="text-stone-500 text-sm italic leading-relaxed border-t border-stone-800 pt-4">{p.mood}</p>
              <div className="text-center pt-2">
                <p className="urdu text-base text-amber-700">{p.verse}</p>
                <p className="text-stone-600 text-xs italic mt-1">{p.translation}</p>
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}
