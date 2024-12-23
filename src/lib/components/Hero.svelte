<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
</script>

<section class="relative min-h-[600px] flex items-center">
  <div class="absolute inset-0 z-0">
    <img 
      src="/images/hero-image.jpg" 
      alt="Steuerkanzlei Ill Büro" 
      class="w-full h-full object-cover object-[center_40%] transition-transform duration-[20s] hover:scale-110"
    >
    <div class="absolute inset-0 bg-black/50 "></div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-3xl text-white">
      <h1 class="mb-6" use:fadeIn>
        <div class="relative inline-block overflow-x-hidden pb-2">
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