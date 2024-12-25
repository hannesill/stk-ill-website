<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  import { onMount } from 'svelte';

  const images = [
    {
      src: "/images/heros/hero-digital_bei_mandant.jpg",
      alt: "Digitale Steuerberatung direkt beim Mandanten in der Fabrik"
    },
    {
      src: "/images/heros/hero-beratung.jpg",
      alt: "Steuerberatung in der Kanzlei am Bodensee"
    },
    {
      src: "/images/heros/hero-rechnung_digital_einscannen.jpg",
      alt: "Moderne Buchhaltung mit Einscannen der Rechnungen"
    }
  ];

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
    timer = setInterval(nextSlide, 5000);
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
          class="w-full h-full object-cover object-[center_40%] transition-transform duration-[20s] hover:scale-110"
        >
      </div>
    {/each}
    <div class="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
  </div>

  <!-- Content -->
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-3xl text-white">
      <h1 class="mb-6" use:fadeIn>
        <div class="relative inline-block overflow-hidden pb-2">
          <span class="text-5xl md:text-6xl font-bold relative z-10 block">
            Digitale Steuerkanzlei
          </span>
          <div class="absolute bottom-2 left-0 w-[35%] h-4 bg-secondary -z-0 animate-slide-right"></div>
        </div>
      </h1>
      <p class="text-xl mb-8 text-white/90" use:fadeIn={{ delay: 200 }}>
        Für Personen & Unternehmen in <span class="font-bold">Stockach, Singen, Radolfzell und Umgebung</span>, 
        die neue Wege gehen wollen: Weniger Kosten und mehr Zeit fürs Wesentliche durch digitale Prozesse.
      </p>
      <button 
        class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg"
        use:fadeIn={{ delay: 400 }}
      >
        Jetzt unverbindliches Erstgespräch vereinbaren
      </button>
    </div>
  </div>

  <!-- Navigation Dots -->
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
</section>

<style>
  @keyframes slide-right {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  .animate-slide-right {
    animation: slide-right 0.8s ease-out forwards;
  }
</style> 