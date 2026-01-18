<script context="module" lang="ts">
  export interface CTAContent {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton?: {
      text: string;
      href: string;
    };
  }
</script>

<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  const defaultContent: CTAContent = {
    title: "Bereit für monatliche Klarheit?",
    description: "Sichern Sie sich Ihr kostenloses Erstgespräch.",
    primaryButton: {
      text: "Termin sichern",
      href: "https://cal.com/forms/a488cd95-33a4-491c-bf5e-1f4212ebb7df"
    },
    secondaryButton: {
      text: "07773 920967",
      href: "tel:+497773920967"
    }
  };

  export let content: CTAContent = defaultContent;

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
  class="relative overflow-hidden"
>
  <div class="container-wide section-padding">
    <div
      class="relative rounded-3xl lg:rounded-4xl overflow-hidden transition-all duration-700 ease-expo-out"
      class:opacity-0={!isVisible}
      class:scale-[0.97]={!isVisible}
      class:opacity-100={isVisible}
      class:scale-100={isVisible}
    >
      <!-- Background with layered gradients -->
      <div class="absolute inset-0 cta-gradient"></div>

      <!-- Decorative elements -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <!-- Floating orbs -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-900/30 rounded-full blur-[60px] transform -translate-x-1/3 translate-y-1/3"></div>

        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px); background-size: 40px 40px;"></div>

        <!-- Geometric shapes -->
        <div class="absolute top-12 left-12 w-20 h-20 border border-white/10 rounded-2xl rotate-12 hidden lg:block"></div>
        <div class="absolute bottom-12 right-12 w-16 h-16 border border-white/10 rounded-xl -rotate-12 hidden lg:block"></div>

        <!-- Animated gradient line -->
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 p-8 md:p-12 lg:p-20">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Icon/Badge -->
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 transition-all duration-700 delay-100 ease-expo-out"
            class:opacity-0={!isVisible}
            class:translate-y-4={!isVisible}
            class:opacity-100={isVisible}
            class:translate-y-0={isVisible}
          >
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <!-- Headline -->
          <h2
            class="text-display-sm md:text-display-md lg:text-display-lg text-white mb-6 transition-all duration-700 delay-200 ease-expo-out"
            class:opacity-0={!isVisible}
            class:translate-y-6={!isVisible}
            class:opacity-100={isVisible}
            class:translate-y-0={isVisible}
          >
            {content.title}
          </h2>

          <!-- Description -->
          <p
            class="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-300 ease-expo-out"
            class:opacity-0={!isVisible}
            class:translate-y-6={!isVisible}
            class:opacity-100={isVisible}
            class:translate-y-0={isVisible}
          >
            {content.description}
          </p>

          <!-- Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ease-expo-out"
            class:opacity-0={!isVisible}
            class:translate-y-6={!isVisible}
            class:opacity-100={isVisible}
            class:translate-y-0={isVisible}
          >
            <!-- Primary CTA -->
            <a
              href={content.primaryButton.href}
              class="group relative inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-soft-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span class="relative z-10">{content.primaryButton.text}</span>
              <svg
                class="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <!-- Hover shimmer -->
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>

            {#if content.secondaryButton}
              <!-- Secondary CTA - Phone -->
              <a
                href={content.secondaryButton.href}
                class="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {content.secondaryButton.text}
              </a>
            {/if}
          </div>

          <!-- Trust note -->
          <p
            class="mt-10 text-sm text-white/50 transition-all duration-700 delay-500 ease-expo-out"
            class:opacity-0={!isVisible}
            class:translate-y-4={!isVisible}
            class:opacity-100={isVisible}
            class:translate-y-0={isVisible}
          >
            Kostenlos & unverbindlich – Antwort innerhalb von 24 Stunden
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-gradient {
    background: linear-gradient(
      135deg,
      #D14A10 0%,
      #E85A1B 25%,
      #E85A1B 50%,
      #D14A10 75%,
      #B03D0B 100%
    );
    background-size: 200% 200%;
    animation: gradientMove 15s ease infinite;
  }

  @keyframes gradientMove {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>
