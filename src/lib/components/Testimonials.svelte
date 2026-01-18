<script lang="ts">
  import { onMount } from 'svelte';

  const testimonials = [
    {
      quote: "Ursula hat für unser Familienunternehmen die komplette Steuerabwicklung übernommen. Dies tut sie mit fundiertem Fachwissen und für uns nicht weniger wichtig, mit viel Geduld und Hartnäckigkeit im positiven Sinne. Durch die Digitalisierung und den Einsatz modernster Kommunikationsmittel steht unser Unternehmen immer auf dem aktuellsten Stand.",
      name: "Peter Gruben",
      title: "Yachtcharter Konstanz",
      highlight: "Wir fühlen uns bestens beraten und unterstützt."
    },
    {
      quote: "Als Personengesellschaft arbeiten wir seit vielen Jahren erfolgreich mit unserer Steuerberaterin Ursula Ill zusammen. Ihre Persönlichkeit schafft eine vertrauensvolle Atmosphäre, und ihre Zuverlässigkeit ist unverzichtbar für unser Unternehmen. Besonders schätzen wir die fundierte Beratung, die uns in wichtigen Entscheidungen stets unterstützt.",
      name: "Robert Wochner",
      title: "Inhaber, Robert Wochner Modellbau OHG",
      highlight: "Rundum zufrieden und empfehlenswert."
    },
    {
      quote: "Seit Jahren schätze ich die Zusammenarbeit sehr. Sie überzeugt durch Pünktlichkeit und Zuverlässigkeit in allen Angelegenheiten. Besonders beeindruckt bin ich vom nahtlosen, digitalen Workflow, der den Austausch unkompliziert und effizient gestaltet. Ihre strategische Beratung hat mir entscheidende Impulse gegeben.",
      name: "Daniel Nardi",
      title: "Inhaber, Nardi Business Service e.K.",
      highlight: "Uneingeschränkt empfehlenswert!"
    }
  ];

  let isVisible = false;
  let sectionRef: HTMLElement;
  let activeIndex = 0;
  let autoplayInterval: ReturnType<typeof setInterval>;

  function setActive(index: number) {
    activeIndex = index;
    resetAutoplay();
  }

  function nextTestimonial() {
    activeIndex = (activeIndex + 1) % testimonials.length;
  }

  function prevTestimonial() {
    activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  }

  function resetAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextTestimonial, 10000);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            resetAutoplay();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => {
      observer.disconnect();
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  });
</script>

<section
  bind:this={sectionRef}
  class="section-padding bg-cream-100 relative overflow-hidden"
  id="kundenstimmen"
>
  <!-- Background decorations -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <div class="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gradient-radial from-primary-100/40 to-transparent rounded-full"></div>
    <div class="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-gradient-radial from-slate-100/60 to-transparent rounded-full"></div>
  </div>

  <div class="container-wide relative">
    <!-- Section Header -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <!-- Left Column - Header -->
      <div class="lg:col-span-4 lg:sticky lg:top-32">
        <div
          class="transition-all duration-700 ease-expo-out"
          class:opacity-0={!isVisible}
          class:translate-y-8={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          <span class="badge badge-primary mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
            Kundenstimmen
          </span>
        </div>

        <h2
          class="text-display-md lg:text-display-lg text-slate-900 mb-6 transition-all duration-700 ease-expo-out delay-100"
          class:opacity-0={!isVisible}
          class:translate-y-8={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          Das sagen unsere <span class="text-primary-500">Mandanten</span>
        </h2>

        <p
          class="text-body-lg text-slate-600 mb-10 transition-all duration-700 ease-expo-out delay-200"
          class:opacity-0={!isVisible}
          class:translate-y-8={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          Erfahren Sie, warum erfolgreiche Unternehmer seit Jahren auf unsere Beratung vertrauen.
        </p>

        <!-- Navigation Dots (Desktop) -->
        <div
          class="hidden lg:flex items-center gap-3 transition-all duration-700 ease-expo-out delay-300"
          class:opacity-0={!isVisible}
          class:translate-y-4={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          {#each testimonials as _, i}
            <button
              class="relative h-2 rounded-full transition-all duration-500 ease-expo-out overflow-hidden
                     {activeIndex === i ? 'w-10 bg-primary-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}"
              on:click={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            >
              {#if activeIndex === i}
                <span class="absolute inset-0 bg-primary-400 animate-pulse"></span>
              {/if}
            </button>
          {/each}
        </div>
      </div>

      <!-- Right Column - Testimonial Cards -->
      <div
        class="lg:col-span-8 transition-all duration-700 ease-expo-out delay-200"
        class:opacity-0={!isVisible}
        class:translate-y-12={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        <div class="relative">
          <!-- Large Quote Icon -->
          <div class="absolute -top-4 -left-2 lg:-top-6 lg:-left-6 z-0">
            <svg class="w-16 h-16 lg:w-24 lg:h-24 text-primary-100" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <!-- Testimonial Cards Container -->
          <div class="relative min-h-[560px] md:min-h-[520px] lg:min-h-[480px] xl:min-h-[420px]">
            {#each testimonials as testimonial, i}
              <div
                class="absolute inset-0 transition-all duration-600 ease-expo-out"
                class:opacity-100={activeIndex === i}
                class:translate-x-0={activeIndex === i}
                class:scale-100={activeIndex === i}
                class:opacity-0={activeIndex !== i}
                class:translate-x-8={activeIndex !== i}
                class:scale-[0.98]={activeIndex !== i}
                class:pointer-events-none={activeIndex !== i}
              >
                <div class="relative bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-card border border-slate-100 overflow-hidden">
                  <!-- Subtle gradient accent -->
                  <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/40 to-transparent pointer-events-none"></div>

                  <div class="relative z-10">
                    <!-- Star Rating -->
                    <div class="flex gap-1 mb-8">
                      {#each Array(5) as _}
                        <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      {/each}
                    </div>

                    <!-- Quote -->
                    <blockquote class="text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 font-body">
                      "{testimonial.quote}"
                    </blockquote>

                    <!-- Highlight -->
                    <p class="text-primary-600 font-semibold text-lg mb-8">
                      {testimonial.highlight}
                    </p>

                    <!-- Author -->
                    <div class="flex items-center gap-4 pt-6 border-t border-slate-100">
                      <div class="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-display text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div class="font-semibold text-slate-900 text-lg">{testimonial.name}</div>
                        <div class="text-slate-500 text-sm">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>

          <!-- Navigation Arrows -->
          <div class="flex items-center justify-between mt-8 lg:mt-10">
            <!-- Mobile dots -->
            <div class="flex lg:hidden items-center gap-2">
              {#each testimonials as _, i}
                <button
                  class="w-2.5 h-2.5 rounded-full transition-all duration-300
                         {activeIndex === i ? 'bg-primary-500 w-6' : 'bg-slate-300'}"
                  on:click={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                ></button>
              {/each}
            </div>

            <!-- Arrow buttons -->
            <div class="flex items-center gap-3 ml-auto">
              <button
                class="w-12 h-12 rounded-full bg-white shadow-soft border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 hover:shadow-soft-lg transition-all duration-300"
                on:click={prevTestimonial}
                aria-label="Vorheriges Testimonial"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                class="w-12 h-12 rounded-full bg-slate-900 shadow-soft flex items-center justify-center text-white hover:bg-slate-800 hover:shadow-soft-lg transition-all duration-300"
                on:click={nextTestimonial}
                aria-label="Nächstes Testimonial"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .duration-600 {
    transition-duration: 600ms;
  }
</style>
