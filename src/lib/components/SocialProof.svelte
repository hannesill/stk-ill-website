<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const stats = [
    { value: "2002", prefix: "Seit", suffix: "", description: "am Bodensee" },
    { value: "50", prefix: "Max.", suffix: "", description: "Unternehmen" },
    { value: "3", prefix: "", suffix: "", description: "Expertinnen" },
    { value: "1", prefix: "", suffix: "", description: "Ansprechpartnerin" }
  ];

  const badges = [
    { name: "DATEV Digitale Kanzlei 2025", src: `${base}/images/certificates/DATEV_Digitale_Kanzlei_2025.png` },
    { name: "DATEV Mitglied", src: `${base}/images/certificates/DATEV_Mitglied.png` },
    { name: "Steuerberaterkammer BW", src: `${base}/images/certificates/dstv_bw_logo.jpeg` }
  ];

  let isVisible = false;
  let sectionRef: HTMLElement;
  let counters: number[] = stats.map(() => 0);
  let hasAnimated = false;

  function animateCounter(targetValue: string, index: number) {
    const numValue = parseInt(targetValue.replace(/\D/g, ''));
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      counters[index] = Math.floor(easeOutQuart * numValue);
      counters = [...counters];

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counters[index] = numValue;
        counters = [...counters];
      }
    }

    requestAnimationFrame(update);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            isVisible = true;
            hasAnimated = true;
            stats.forEach((stat, i) => {
              setTimeout(() => animateCounter(stat.value, i), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });
</script>

<section
  bind:this={sectionRef}
  class="section-padding-sm relative overflow-hidden"
>
  <div class="container-wide">
    <!-- Dark Card Container -->
    <div
      class="relative bg-slate-900 rounded-3xl lg:rounded-4xl overflow-hidden transition-all duration-700 ease-expo-out"
      class:opacity-0={!isVisible}
      class:scale-[0.98]={!isVisible}
      class:opacity-100={isVisible}
      class:scale-100={isVisible}
    >
      <!-- Background decorations -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <!-- Gradient mesh -->
        <div class="absolute top-0 left-0 w-full h-full opacity-30">
          <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[150px]"></div>
          <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-600/30 rounded-full blur-[120px]"></div>
        </div>

        <!-- Subtle grid pattern -->
        <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 48px 48px;"></div>

        <!-- Noise texture -->
        <div class="absolute inset-0 opacity-[0.015]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E');"></div>
      </div>

      <div class="relative p-8 md:p-12 lg:p-16">
        <!-- Stats Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-14 lg:mb-18">
          {#each stats as stat, i}
            <div
              class="text-center transition-all duration-700 ease-expo-out"
              style="transition-delay: {100 + i * 80}ms"
              class:opacity-0={!isVisible}
              class:translate-y-6={!isVisible}
              class:opacity-100={isVisible}
              class:translate-y-0={isVisible}
            >
              <div class="flex items-baseline justify-center gap-1.5 mb-2">
                {#if stat.prefix}
                  <span class="text-slate-400 text-base font-medium">{stat.prefix}</span>
                {/if}
                <span class="text-display-md lg:text-display-lg text-white font-display tabular-nums">
                  {counters[i]}
                </span>
                {#if stat.suffix}
                  <span class="text-primary-400 text-xl font-bold">{stat.suffix}</span>
                {/if}
              </div>
              <p class="text-slate-400 text-sm lg:text-base font-medium">
                {stat.description}
              </p>
            </div>
          {/each}
        </div>

        <!-- Divider with gradient -->
        <div
          class="w-full h-px bg-gradient-to-r from-transparent via-slate-700/80 to-transparent mb-14 lg:mb-18 transition-all duration-1000"
          class:opacity-0={!isVisible}
          class:opacity-100={isVisible}
          style="transition-delay: 400ms"
        ></div>

        <!-- Certifications Section -->
        <div
          class="transition-all duration-700 ease-expo-out"
          style="transition-delay: 500ms"
          class:opacity-0={!isVisible}
          class:translate-y-6={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          <p class="text-center text-slate-500 text-label-md uppercase tracking-widest mb-10">
            Zertifiziert & Ausgezeichnet
          </p>

          <!-- Badges -->
          <div class="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {#each badges as badge, i}
              <div
                class="group transition-all duration-500 ease-expo-out"
                style="transition-delay: {600 + i * 80}ms"
                class:opacity-0={!isVisible}
                class:scale-90={!isVisible}
                class:opacity-100={isVisible}
                class:scale-100={isVisible}
              >
                <div class="relative p-5 bg-white/[0.03] rounded-xl backdrop-blur-sm border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300">
                  <img
                    src={badge.src}
                    alt={badge.name}
                    class="h-14 lg:h-16 w-auto object-contain filter grayscale brightness-90 opacity-60 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-400"
                  >
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Trust statement -->
        <div
          class="mt-14 lg:mt-18 text-center transition-all duration-700 ease-expo-out"
          style="transition-delay: 800ms"
          class:opacity-0={!isVisible}
          class:translate-y-4={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          <p class="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Als DATEV Digitale Kanzlei und Mitglied der Steuerberaterkammer Baden-Württemberg garantieren wir höchste Qualitätsstandards in Beratung und Technologie.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
