<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const benefits = [
    {
      number: "01",
      title: "Monatliche Erfolgsreports",
      description: "Jeden Monat wissen Sie, wo Sie stehen. Steuerlich und finanziell. Keine Überraschungen am Jahresende mehr.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>`,
      accent: "Klarheit"
    },
    {
      number: "02",
      title: "Privat & Geschäftlich",
      description: "Unternehmerische und private finanzielle Situation aus einer Hand. Ein Ansprechpartner, ein Gesamtüberblick.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>`,
      accent: "Ganzheitlich"
    },
    {
      number: "03",
      title: "Digital & Deutschlandweit",
      description: "Belege per App, Beratung per Video. Funktioniert am Bodensee genauso wie in ganz Deutschland.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>`,
      accent: "Modern"
    }
  ];

  let isVisible = false;
  let sectionRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });
</script>

<section
  bind:this={sectionRef}
  class="section-padding bg-cream-50 relative overflow-hidden"
  id="vorteile"
>
  <!-- Subtle background elements -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <!-- Large gradient orb -->
    <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary-100/40 via-primary-50/20 to-transparent"></div>
    <div class="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-radial from-slate-100/60 to-transparent"></div>
  </div>

  <div class="container-wide relative">
    <!-- Section Header -->
    <div class="max-w-2xl mb-16 lg:mb-24">
      <div
        class="transition-all duration-700 ease-expo-out"
        class:opacity-0={!isVisible}
        class:translate-y-8={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        <span class="badge badge-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
          Ihre Vorteile
        </span>
      </div>

      <h2
        class="text-display-md lg:text-display-lg text-slate-900 mb-6 transition-all duration-700 ease-expo-out delay-100"
        class:opacity-0={!isVisible}
        class:translate-y-8={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        Warum Unternehmer <br class="hidden sm:block"/>
        <span class="text-primary-500">zu uns wechseln</span>
      </h2>

      <p
        class="text-body-xl text-slate-600 transition-all duration-700 ease-expo-out delay-200"
        class:opacity-0={!isVisible}
        class:translate-y-8={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        Digitale Effizienz trifft persönliche Betreuung. Für Unternehmer, die mehr erwarten als nur einen Jahresabschluss.
      </p>
    </div>

    <!-- Benefits Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {#each benefits as benefit, i}
        <div
          class="group transition-all duration-700 ease-expo-out"
          style="transition-delay: {300 + i * 100}ms"
          class:opacity-0={!isVisible}
          class:translate-y-12={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          <!-- Card -->
          <div class="relative h-full bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-soft-sm transition-all duration-500 ease-expo-out hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200/60 overflow-hidden">
            <!-- Background accent on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 transition-all duration-500 pointer-events-none"></div>

            <!-- Number badge -->
            <div class="relative flex items-center justify-between mb-8">
              <span class="text-sm font-semibold text-slate-300 tracking-wider">{benefit.number}</span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-100 text-primary-700">
                {benefit.accent}
              </span>
            </div>

            <!-- Icon -->
            <div class="relative w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-6 text-white shadow-soft group-hover:scale-105 group-hover:shadow-soft-lg transition-all duration-500">
              {@html benefit.icon}
            </div>

            <!-- Content -->
            <h3 class="relative text-xl lg:text-2xl font-display text-slate-900 mb-4">
              {benefit.title}
            </h3>

            <p class="relative text-slate-600 leading-relaxed">
              {benefit.description}
            </p>

            <!-- Bottom accent line -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Bottom CTA -->
    <div
      class="mt-16 lg:mt-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 transition-all duration-700 ease-expo-out"
      style="transition-delay: 700ms"
      class:opacity-0={!isVisible}
      class:translate-y-8={!isVisible}
      class:opacity-100={isVisible}
      class:translate-y-0={isVisible}
    >
      <p class="text-slate-500 text-center sm:text-left">
        Überzeugt? Lassen Sie uns sprechen.
      </p>
      <a
        href="{base}/kontakt#erstgespraech"
        class="group inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
      >
        <span class="link-underline">Kostenfreies Erstgespräch</span>
        <svg class="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>
