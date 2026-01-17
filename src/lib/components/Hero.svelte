<script context="module" lang="ts">
  export interface HeroImage {
    src: string;
    alt: string;
  }

  export interface HeroContent {
    title: string;
    highlight?: string;
    subtitle: string;
    buttonText?: string;
    buttonLink?: string;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  export let images: HeroImage[];
  export let content: HeroContent;

  let isVisible = false;
  let scrollY = 0;

  $: heroImage = images[0];
  $: parallaxOffset = scrollY * 0.3;

  onMount(() => {
    // Trigger entrance animations
    setTimeout(() => {
      isVisible = true;
    }, 100);

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section class="hero-section relative min-h-screen flex items-center overflow-hidden">
  <!-- Background Image with Parallax -->
  <div class="absolute inset-0 z-0">
    <div
      class="absolute inset-0 w-full h-[115%] -top-[5%] will-change-transform"
      style="transform: translateY({parallaxOffset}px)"
    >
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        class="w-full h-full object-cover object-[center_25%]"
        loading="eager"
        fetchpriority="high"
      >
    </div>

    <!-- Primary Gradient Overlay -->
    <div class="hero-gradient absolute inset-0"></div>

    <!-- Secondary Gradient - Bottom fade -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

    <!-- Subtle noise texture -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.7%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E');"></div>
  </div>

  <!-- Decorative Elements -->
  <div class="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
    <!-- Floating gradient orbs -->
    <div
      class="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] transition-transform duration-1000"
      class:translate-y-0={isVisible}
      class:-translate-y-10={!isVisible}
      style="background: radial-gradient(circle, rgba(232, 90, 27, 0.4) 0%, transparent 70%);"
    ></div>

    <!-- Geometric accents -->
    <div
      class="absolute top-32 right-20 w-24 h-24 border border-white/10 rounded-2xl rotate-12 hidden xl:block transition-all duration-1000 delay-700"
      class:opacity-100={isVisible}
      class:opacity-0={!isVisible}
      class:translate-x-0={isVisible}
      class:translate-x-10={!isVisible}
    ></div>
    <div
      class="absolute bottom-40 right-32 w-16 h-16 border border-primary-500/20 rounded-xl -rotate-12 hidden xl:block transition-all duration-1000 delay-800"
      class:opacity-100={isVisible}
      class:opacity-0={!isVisible}
    ></div>

    <!-- Vertical accent line -->
    <div
      class="absolute left-8 top-1/3 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block transition-all duration-1000 delay-500"
      class:opacity-100={isVisible}
      class:opacity-0={!isVisible}
    ></div>
  </div>

  <!-- Main Content -->
  <div class="container-wide relative z-10 pt-24 pb-32 md:pb-36 lg:pt-32 lg:pb-24">
    <div class="max-w-3xl">
      <!-- Animated Badge -->
      <div
        class="inline-flex items-center gap-1 mb-6 sm:gap-1.5 sm:mb-8 sm:mt-2 md:gap-2 md:mb-9 md:mt-3 lg:gap-3 lg:mb-8 mt-4 transition-all duration-700 ease-expo-out"
        class:opacity-0={!isVisible}
        class:translate-y-6={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        <div class="relative">
          <div class="absolute inset-0 bg-primary-500/30 rounded-full blur-md"></div>
          <div class="relative flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 md:gap-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span class="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 bg-primary-500"></span>
            </span>
            <span class="text-white/95 text-xs sm:text-sm md:text-base font-medium tracking-wide">Seit 2002 am Bodensee</span>
          </div>
        </div>
      </div>

      <!-- Main Headline -->
      <h1
        class="text-display-lg md:text-display-xl lg:text-display-2xl text-white mb-8 transition-all duration-800 ease-expo-out delay-100"
        class:opacity-0={!isVisible}
        class:translate-y-12={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        <span class="block">{content.title}</span>
        {#if content.highlight}
          <span class="relative inline-block">
            <span class="text-primary-400">{@html content.highlight}</span>
            <!-- Animated underline -->
            <span
              class="absolute -bottom-2 left-0 h-3 bg-primary-500/40 -z-10 rounded-sm transition-all duration-1000 ease-expo-out delay-700"
              class:w-0={!isVisible}
              class:w-full={isVisible}
            ></span>
          </span>
        {/if}
      </h1>

      <!-- Subheadline -->
      <p
        class="text-body-xl md:text-[1.375rem] text-white/80 mb-12 leading-relaxed max-w-2xl transition-all duration-800 ease-expo-out delay-200"
        class:opacity-0={!isVisible}
        class:translate-y-10={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        {@html content.subtitle}
      </p>

      <!-- CTA Buttons -->
      {#if content.buttonText}
        <div
          class="flex flex-col sm:flex-row gap-4 transition-all duration-800 ease-expo-out delay-300"
          class:opacity-0={!isVisible}
          class:translate-y-10={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
        >
          <!-- Primary CTA -->
          <a
            href={content.buttonLink ?? '#'}
            class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300"
          >
            <!-- Button background with gradient -->
            <span class="absolute inset-0 bg-primary-500 transition-all duration-300 group-hover:bg-primary-600"></span>
            <!-- Shimmer effect on hover -->
            <span class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </span>
            <!-- Button content -->
            <span class="relative text-white">{content.buttonText}</span>
            <svg
              class="relative w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <!-- Secondary CTA - Phone -->
          <a
            href="tel:+497773920967"
            class="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            07773 920967
          </a>
        </div>
      {/if}

      <!-- Trust Indicators -->
      <div
        class="flex flex-wrap items-center gap-x-8 gap-y-4 mt-14 pt-8 border-t border-white/10 transition-all duration-800 ease-expo-out delay-500"
        class:opacity-0={!isVisible}
        class:translate-y-8={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
      >
        <div class="flex items-center gap-2.5 text-white/70 text-sm">
          <svg class="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>DATEV Digitale Kanzlei</span>
        </div>
        <div class="flex items-center gap-2.5 text-white/70 text-sm">
          <svg class="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Deutschlandweit digital</span>
        </div>
        <div class="flex items-center gap-2.5 text-white/70 text-sm">
          <svg class="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Maximal 50 Unternehmen</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div
    class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 transition-all duration-800 delay-800 hidden md:block"
    class:opacity-0={!isVisible}
    class:opacity-100={isVisible}
  >
    <a
      href="#vorteile"
      class="flex flex-col items-center gap-3 text-white/50 hover:text-white/80 transition-colors duration-300 group"
    >
      <span class="text-xs uppercase font-medium">Mehr erfahren</span>
      <div class="relative w-4 h-6 rounded-full border border-current flex justify-center overflow-hidden">
        <div class="w-1 h-2 bg-current rounded-full mt-2 animate-bounce"></div>
      </div>
    </a>
  </div>
</section>

<style>
  .hero-section {
    min-height: 100vh;
    min-height: 100dvh;
  }

  .hero-gradient {
    background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.92) 0%,
      rgba(15, 23, 42, 0.85) 25%,
      rgba(15, 23, 42, 0.7) 50%,
      rgba(15, 23, 42, 0.5) 75%,
      rgba(15, 23, 42, 0.35) 100%
    );
  }

  @media (max-width: 768px) {
    .hero-gradient {
      background: linear-gradient(
        to bottom,
        rgba(15, 23, 42, 0.5) 0%,
        rgba(15, 23, 42, 0.75) 40%,
        rgba(15, 23, 42, 0.9) 100%
      );
    }
  }

  /* Smooth animation timing */
  .duration-800 {
    transition-duration: 800ms;
  }
</style>
