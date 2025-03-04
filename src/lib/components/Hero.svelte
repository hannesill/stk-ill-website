<script context="module" lang="ts">
  export interface HeroImage {
    src: string;
    alt: string;
  }

  export interface HeroContent {
    title: string;
    subtitle: string;
    buttonText?: string;
    buttonLink?: string;
    underlineWidth?: string;
  }
</script>

<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  import { onMount } from 'svelte';

  export let images: HeroImage[];
  export let content: HeroContent;
  export let slideInterval = 5000;

  // Set default underline width if not provided
  const underlineWidth = content.underlineWidth || "w-[35%]";

  let currentIndex = 0;
  let timer: ReturnType<typeof setTimeout>;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function setSlide(index: number) {
    currentIndex = index;
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, slideInterval);
  }

  onMount(() => {
    resetTimer();
    return () => clearInterval(timer);
  });
</script>

<section class="relative min-h-[600px] flex items-center overflow-hidden">
  <!-- Image Slider -->
  <div class="absolute inset-0 z-0">
    {#each images as image, i}
      <div 
        class="absolute inset-0 transition-opacity duration-1000"
        class:opacity-0={currentIndex !== i}
      >
        <img 
          src={image.src} 
          alt={image.alt}
          class="w-full h-full object-cover object-[center_40%] transition-transform duration-[20s] hover:scale-110 hero-image-{i}"
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchpriority={i === 0 ? 'high' : 'auto'}
        >
      </div>
    {/each}
    <div class="absolute inset-0 bg-black/20 backdrop-blur-[0px]"></div>
  </div>

  <!-- Content -->
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-3xl text-white">
      <h1 class="mb-6" use:fadeIn>
        <div class="relative inline-block overflow-hidden pb-2 pt-3">
          <span class="text-5xl md:text-6xl font-bold relative z-10 block text-shadow-hero-heading">
            {content.title}
          </span>
          <div class={`absolute bottom-2 left-0 ${underlineWidth} h-4 bg-secondary -z-0 animate-slide-right`}></div>
        </div>
      </h1>
      <p class="text-xl mb-8 text-white/90 text-shadow-hero-paragraph" use:fadeIn={{ delay: 200 }}>
        {@html content.subtitle}
      </p>
      {#if content.buttonText}
        <a 
          href={content.buttonLink ?? '#'}
          class="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg text-center"
          use:fadeIn={{ delay: 400 }}
        >
          {content.buttonText}
        </a>
      {/if}
    </div>
  </div>

  <!-- Navigation Dots -->
  {#if images.length > 1}
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
      {#each images as _, i}
        <button
          class="w-4 h-1 rounded-full transition-all duration-300 bg-white/40 hover:bg-white/60"
          class:bg-white={currentIndex === i}
          on:click={() => setSlide(i)}
          aria-label={`Go to slide ${i + 1}`}
        ></button>
      {/each}
    </div>
  {/if}
</section>

<style>
  @keyframes slide-right {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  .animate-slide-right {
    animation: slide-right 0.8s ease-out forwards;
  }

  .text-shadow-hero-paragraph {
    text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.7);
  }

  .text-shadow-hero-heading {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  }
</style> 