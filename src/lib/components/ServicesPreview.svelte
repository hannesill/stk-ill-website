<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const services = [
    {
      title: "Steuerberatung",
      description: "Monatliche Erfolgsreports statt jährlicher Überraschungen. Kompetente Beratung in allen steuerlichen Angelegenheiten.",
      href: `${base}/leistungen#steuerberatung`,
      image: `${base}/images/services/Steuerberatung-Bodensee.jpg`
    },
    {
      title: "Digitale Buchhaltung",
      description: "Moderne Buchführung mit digitaler Belegerfassung und automatisierten Prozessen.",
      href: `${base}/leistungen#digitale-buchhaltung`,
      image: `${base}/images/services/Rechnung-einscannen-digital.jpg`
    },
    {
      title: "Unternehmensberatung",
      description: "Strategische Beratung für nachhaltigen Unternehmenserfolg.",
      href: `${base}/leistungen#unternehmensberatung`,
      image: `${base}/images/services/Steuerberatung-Vermoegensaufbau.jpg`
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
  id="leistungen"
>
  <!-- Subtle background elements -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <div class="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary-100/30 via-primary-50/10 to-transparent"></div>
    <div class="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-radial from-slate-100/50 to-transparent"></div>
  </div>

  <div class="container-wide relative">
    <!-- Section Header -->
    <div class="max-w-2xl mb-16 lg:mb-20">
      <div
        class="transition-all duration-700 ease-expo-out"
        class:opacity-0={!isVisible}
        class:translate-y-8={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        <span class="badge badge-primary mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
          Unsere Expertise
        </span>
      </div>

      <h2
        class="text-display-md lg:text-display-lg text-slate-900 mb-6 transition-all duration-700 ease-expo-out delay-100"
        class:opacity-0={!isVisible}
        class:translate-y-8={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        Unsere <span class="text-primary-500">Leistungen</span>
      </h2>

      <p
        class="text-body-xl text-slate-600 transition-all duration-700 ease-expo-out delay-200"
        class:opacity-0={!isVisible}
        class:translate-y-8={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        Ganzheitliche Betreuung für Unternehmer. Von der laufenden Buchhaltung bis zur strategischen Beratung.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {#each services as service, i}
        <a
          href={service.href}
          class="group transition-all duration-700 ease-expo-out block"
          style="transition-delay: {300 + i * 100}ms"
          class:opacity-0={!isVisible}
          class:translate-y-12={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          <!-- Card -->
          <div class="relative h-full bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-soft-sm transition-all duration-500 ease-expo-out hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200/60">
            <!-- Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                class="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <!-- Content -->
            <div class="p-6 lg:p-8">
              <h3 class="text-xl lg:text-2xl font-display text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p class="text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>

              <!-- Arrow link -->
              <span class="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm">
                Mehr erfahren
                <svg class="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>

            <!-- Bottom accent line -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </a>
      {/each}

      <!-- CTA Card - 4th grid item (only visible on md) -->
      <a
        href="{base}/leistungen"
        class="group transition-all duration-700 ease-expo-out hidden md:block lg:hidden"
        style="transition-delay: 600ms"
        class:opacity-0={!isVisible}
        class:translate-y-12={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        <div class="relative h-full bg-white rounded-2xl overflow-hidden border border-dashed border-slate-300 transition-all duration-500 ease-expo-out hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-300 hover:border-solid flex flex-col items-center justify-center p-8 text-center min-h-[320px]">
          <!-- Content -->
          <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-primary-50 transition-colors duration-300">
            <svg class="w-6 h-6 text-slate-400 group-hover:text-primary-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          <h3 class="text-lg font-display text-slate-700 mb-2 group-hover:text-slate-900 transition-colors duration-300">
            Alle Leistungen
          </h3>

          <p class="text-slate-500 text-sm">
            Mehr entdecken
          </p>
        </div>
      </a>
    </div>

    <!-- Bottom CTA (visible on mobile and lg, hidden on md) -->
    <div
      class="mt-12 flex md:hidden lg:flex justify-center transition-all duration-700 ease-expo-out"
      style="transition-delay: 700ms"
      class:opacity-0={!isVisible}
      class:translate-y-8={!isVisible}
      class:opacity-100={isVisible}
      class:translate-y-0={isVisible}
    >
      <a
        href="{base}/leistungen"
        class="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-soft-sm hover:shadow-soft hover:border-primary-200 transition-all duration-300"
      >
        <span class="text-slate-700 font-medium group-hover:text-primary-600 transition-colors">Alle Leistungen ansehen</span>
        <svg class="w-5 h-5 text-primary-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>
