<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { base } from '$app/paths';

  let isVisible = false;
  let isFooterVisible = false;

  function handleScroll() {
    const scrollY = window.scrollY;
    // Show after scrolling 300px
    isVisible = scrollY > 300;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Observe footer visibility
    const footer = document.querySelector('footer');
    let observer: IntersectionObserver | null = null;

    if (footer) {
      observer = new IntersectionObserver(
        (entries) => {
          isFooterVisible = entries[0].isIntersecting;
        },
        { threshold: 0 }
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer && footer) {
        observer.unobserve(footer);
      }
    };
  });
</script>

{#if isVisible && !isFooterVisible}
  <div
    class="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
    transition:fly={{ y: 100, duration: 300 }}
  >
    <!-- CTA Container -->
    <div class="bg-white border-t border-slate-200 shadow-md px-4 py-3 safe-area-bottom">
      <div class="flex gap-3 max-w-lg mx-auto">
        <!-- Call Button -->
        <a
          href="tel:+497773920967"
          class="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-semibold transition-all duration-200 active:scale-95"
        >
          <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Anrufen</span>
        </a>

        <!-- CTA Button -->
        <a
          href="https://cal.com/forms/a488cd95-33a4-491c-bf5e-1f4212ebb7df"
          class="flex-[1.5] flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-primary-500 text-white font-semibold shadow-glow-orange transition-all duration-200 active:scale-95"
        >
          <span>Termin sichern</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  .safe-area-bottom {
    padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
  }
</style>
