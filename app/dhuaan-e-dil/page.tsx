import Navbar from '@/components/Navbar'

export default function DhuaanEDil() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-8">
          <div className="w-12 h-px bg-amber-800" />
          <p className="urdu text-3xl text-amber-400 leading-loose">دل کا دھواں اٹھتا ہے خاموشی میں</p>
          <p className="text-stone-500 text-sm italic">"The smoke of the heart rises in silence"</p>
          <div className="w-12 h-px bg-amber-800" />
          <h1 className="urdu text-5xl text-stone-100">دھوانِ دل</h1>
          <p className="text-stone-400 text-lg tracking-wide">Smoke of the Heart</p>
          <p className="text-stone-500 text-sm max-w-xl leading-relaxed">
            The spiritual thread connecting the cigar, the hookah, the chai — and the Sufi soul that found God in smoke, fire and stillness.
          </p>
        </section>

        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-16">

          {/* Sufi connection */}
          <article className="flex flex-col gap-5 border-l-2 border-amber-900 pl-8">
            <h2 className="text-xl font-semibold text-amber-400 tracking-wide">The Sufi and the Smoke</h2>
            <p className="text-stone-400 leading-relaxed">
              In Sufi philosophy, the heart is always on fire — burning with ishq, with longing, with love for the divine. Where there is fire, there is smoke. And smoke rises. Always upward. Always toward something higher.
            </p>
            <p className="text-stone-400 leading-relaxed">
              The great Sufi poets — Rumi, Hafiz, Ghalib — understood this. The burning was not suffering. It was the most alive a soul could be. To burn was to love. To smoke was to exhale what the heart could not hold.
            </p>
            <div className="bg-stone-900 border border-stone-800 rounded-lg p-6 text-center">
              <p className="urdu text-2xl text-amber-300 leading-loose">جلنا بھی عبادت ہے جب دل میں محبت ہو</p>
              <p className="text-stone-500 text-sm italic mt-3">"Even burning is worship when the heart holds love"</p>
            </div>
          </article>

          {/* Mughal hookah */}
          <article className="flex flex-col gap-5 border-l-2 border-amber-900 pl-8">
            <h2 className="text-xl font-semibold text-amber-400 tracking-wide">The Mughal Court and the Hookah</h2>
            <p className="text-stone-400 leading-relaxed">
              When tobacco reached the Mughal court around 1600, Emperor Jahangir transformed it into art. The hookah became jeweled, gold-piped, attended by servants. It was not merely smoking — it was ritual. A signal of presence, of power, of a man who had nowhere more important to be.
            </p>
            <p className="text-stone-400 leading-relaxed">
              To share a hookah with a Mughal noble was an honor. To be refused was a message. The smoke carried diplomacy, alliance, and sometimes — war.
            </p>
          </article>

          {/* The cigar */}
          <article className="flex flex-col gap-5 border-l-2 border-amber-900 pl-8">
            <h2 className="text-xl font-semibold text-amber-400 tracking-wide">The Cigar and the Godfather</h2>
            <p className="text-stone-400 leading-relaxed">
              From the Taino people of Cuba in 1492 to Churchill, Capone, and Castro — the cigar has always been the smoke of those who move slowly and decide things. A cigar takes two hours. It cannot be rushed. It says: I am in no hurry. I answer to no one.
            </p>
            <p className="text-stone-400 leading-relaxed">
              That unhurried stillness — that is the same energy as a Sufi in muraqaba. The same energy as a Mughal emperor on his takht. Different worlds. One feeling.
            </p>
          </article>

          {/* Chai */}
          <article className="flex flex-col gap-5 border-l-2 border-amber-900 pl-8">
            <h2 className="text-xl font-semibold text-amber-400 tracking-wide">Chai — The People's Ritual</h2>
            <p className="text-stone-400 leading-relaxed">
              The cigar belongs to the few. The hookah to the gathering. But chai — chai belongs to everyone. From Lahore to Istanbul, from a dhaba at 2am to a palace courtyard — chai is the ritual that crosses every boundary of class, religion and language.
            </p>
            <p className="text-stone-400 leading-relaxed">
              And yet the feeling is the same. Hands wrapped around a warm cup. Silence that is comfortable. Time that does not press. This is Dhuaan-e-Dil — wherever you find it.
            </p>
          </article>

        </div>
      </main>
    </>
  )
}
