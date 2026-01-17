<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  import { base } from '$app/paths';

  const benefits = [
    {
      title: "Monatliche Erfolgsreports",
      description: "Jeden Monat wissen Sie, wo Sie stehen – steuerlich und finanziell. Keine bösen Überraschungen mehr.",
      icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Privat & Geschäftlich",
      description: "Ihre unternehmerische UND private Situation – ein Ansprechpartner, ein Überblick.",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: "Digital & Deutschlandweit",
      description: "Belege per App, Beratung per Video. Am Bodensee und deutschlandweit.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  const testimonial = {
    quote: "Besonders beeindruckt bin ich vom nahtlosen, digitalen Workflow, der den Austausch unkompliziert und effizient gestaltet. Ihre strategische Beratung hat mir entscheidende Impulse gegeben, die mein Unternehmen nachhaltig vorangebracht haben.",
    name: "Daniel Nardi",
    title: "Inhaber, Nardi Business Service e.K."
  };
</script>

<!-- Hero Section -->
<section class="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6" use:fadeIn>
        Monatliche Klarheit <br class="hidden md:block" />
        <span class="text-primary">statt jährlicher Überraschungen</span>
      </h1>
      <p class="text-xl text-gray-600 mb-8" use:fadeIn={{ delay: 100 }}>
        Als Unternehmer erhalten Sie jeden Monat einen Erfolgsreport – nicht nur einmal im Jahr einen Jahresabschluss. Steuerlich und finanziell immer im Bild.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center" use:fadeIn={{ delay: 200 }}>
        <a
          href={`${base}/kontakt#erstgespraech`}
          class="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg text-center text-lg"
        >
          Kostenloses Erstgespräch vereinbaren
        </a>
        <a
          href="tel:+497773920967"
          class="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 text-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          07773 920967
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Trust Badges -->
<section class="py-8 bg-white border-y border-gray-100">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-gray-500 text-sm md:text-base" use:fadeIn>
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Über 22 Jahre Erfahrung</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>DATEV Digitale Kanzlei</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Persönliche Betreuung</span>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12" use:fadeIn>
      Was Sie von uns erwarten können
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {#each benefits as benefit, i}
        <div
          class="text-center p-6"
          use:fadeIn={{ delay: i * 100 }}
        >
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={benefit.icon} />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p class="text-gray-600">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Testimonial Section -->
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center" use:fadeIn>
      <div class="flex justify-center mb-4">
        {#each Array(5) as _}
          <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        {/each}
      </div>
      <blockquote class="text-xl text-gray-700 mb-6 italic">
        "{testimonial.quote}"
      </blockquote>
      <div class="font-semibold text-gray-900">{testimonial.name}</div>
      <div class="text-gray-500 text-sm">{testimonial.title}</div>
    </div>
  </div>
</section>

<!-- Final CTA Section -->
<section class="py-16 bg-secondary text-white">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto text-center" use:fadeIn>
      <h2 class="text-3xl font-bold mb-4">
        Bereit für monatliche Klarheit?
      </h2>
      <p class="text-xl mb-8 text-white/90">
        Vereinbaren Sie jetzt Ihr kostenloses und unverbindliches Erstgespräch.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`${base}/kontakt#erstgespraech`}
          class="inline-block bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-center text-lg"
        >
          Erstgespräch vereinbaren
        </a>
        <a
          href="tel:+497773920967"
          class="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white text-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          07773 920967
        </a>
      </div>
    </div>
  </div>
</section>
