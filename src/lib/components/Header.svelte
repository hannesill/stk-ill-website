<script lang="ts">
  import { fade, fly, scale } from 'svelte/transition';
  import { cubicOut, backOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const navItems = [
    { title: 'Startseite', href: `${base}/` },
    { title: 'Leistungen', href: `${base}/leistungen` },
    { title: 'Über uns', href: `${base}/ueber-uns` },
    { title: 'Karriere', href: `${base}/karriere` },
    { title: 'Kontakt', href: `${base}/kontakt` }
  ];

  let isMenuOpen = false;
  let isScrolled = false;
  let lastScrollY = 0;
  let isHidden = false;
  let mounted = false;

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mobile-menu') && !target.closest('.burger-button')) {
      isMenuOpen = false;
    }
  }

  function handleScroll() {
    const currentScrollY = window.scrollY;
    isScrolled = currentScrollY > 50;

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      isHidden = true;
    } else {
      isHidden = false;
    }
    lastScrollY = currentScrollY;
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }

  function closeMenu() {
    isMenuOpen = false;
    document.body.style.overflow = '';
  }

  onMount(() => {
    mounted = true;
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ease-expo-out
         {isHidden && !isMenuOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
         {isScrolled ? 'pt-3' : 'pt-5'}"
>
  <!-- Navigation Container -->
  <nav
    class="nav-container relative mx-auto max-w-6xl transition-all duration-500 ease-expo-out
           {isScrolled
             ? 'bg-white/80 shadow-soft-lg border border-slate-200/50'
             : 'bg-white/5 border border-white/10'}
           backdrop-blur-2xl rounded-2xl"
    style="animation: {mounted ? 'navSlideDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none'};"
  >
    <!-- Subtle top highlight for glass effect -->
    <div
      class="absolute inset-x-0 top-0 h-px rounded-t-2xl transition-opacity duration-500
             {isScrolled ? 'bg-gradient-to-r from-transparent via-slate-200/50 to-transparent opacity-100' : 'bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50'}"
    ></div>

    <div class="relative flex items-center justify-between h-16 lg:h-[4.25rem] px-5 lg:px-6">
      <!-- Logo -->
      <a
        href="{base}/"
        class="flex items-center z-20 group shrink-0"
        on:click={closeMenu}
      >
        <div class="relative">
          <img
            src="{base}/logo.png"
            alt="Steuerkanzlei Ill Logo"
            class="h-9 lg:h-10 w-auto transition-all duration-300 group-hover:scale-105
                   {isScrolled ? '' : 'brightness-0 invert'}"
          >
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center justify-center flex-1 px-10">
        <div class="flex items-center gap-1">
          {#each navItems as item, i}
            <a
              href={item.href}
              class="nav-link relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group
                     {isScrolled
                       ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                       : 'text-white/85 hover:text-white hover:bg-white/10'}"
              style="animation: navItemFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) {200 + i * 60}ms both;"
            >
              {item.title}
              <!-- Subtle underline indicator -->
              <span
                class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-5
                       {isScrolled ? 'bg-primary-500' : 'bg-white/70'}"
              ></span>
            </a>
          {/each}
        </div>
      </div>

      <!-- Desktop CTA Button -->
      <a
        href="{base}/kontakt#erstgespraech"
        class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
               bg-primary-500 text-white hover:bg-primary-600 hover:shadow-glow-orange
               transition-all duration-300 ease-expo-out hover:scale-[1.02] active:scale-[0.98] shrink-0"
        style="animation: navItemFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) 500ms both;"
      >
        <span>Termin vereinbaren</span>
        <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </a>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden z-20 burger-button p-2 -mr-2 rounded-xl transition-all duration-300
               {isScrolled || isMenuOpen ? 'hover:bg-slate-100' : 'hover:bg-white/10'}"
        on:click={toggleMenu}
        aria-label="Menu"
        aria-expanded={isMenuOpen}
      >
        <div class="w-5 flex flex-col gap-1.5 transition-all duration-300">
          <span
            class="w-full h-0.5 block transition-all duration-300 origin-center rounded-full
                   {isScrolled || isMenuOpen ? 'bg-slate-800' : 'bg-white'}
                   {isMenuOpen ? 'rotate-45 translate-y-2' : ''}"
          ></span>
          <span
            class="w-full h-0.5 block transition-all duration-300 rounded-full
                   {isScrolled || isMenuOpen ? 'bg-slate-800' : 'bg-white'}
                   {isMenuOpen ? 'opacity-0 scale-x-0' : ''}"
          ></span>
          <span
            class="w-full h-0.5 block transition-all duration-300 origin-center rounded-full
                   {isScrolled || isMenuOpen ? 'bg-slate-800' : 'bg-white'}
                   {isMenuOpen ? '-rotate-45 -translate-y-2' : ''}"
          ></span>
        </div>
      </button>
    </div>
  </nav>
</header>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
  <div
    class="fixed inset-0 z-40 lg:hidden mobile-menu"
    transition:fade={{ duration: 200 }}
  >
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>

    <!-- Menu Panel -->
    <div
      class="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-soft-xl overflow-hidden"
      transition:scale={{ duration: 350, start: 0.95, opacity: 0, easing: backOut }}
    >
      <!-- Decorative gradient -->
      <div class="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary-100/60 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div class="relative p-6">
        <!-- Navigation Links -->
        <nav class="space-y-1">
          {#each navItems as item, i}
            <a
              href={item.href}
              class="block px-4 py-3.5 text-lg font-medium text-slate-700 hover:text-primary-600
                     hover:bg-primary-50/80 rounded-xl transition-all duration-200"
              on:click={closeMenu}
              in:fly={{ y: 20, delay: 60 + i * 40, duration: 300, easing: cubicOut }}
            >
              {item.title}
            </a>
          {/each}
        </nav>

        <!-- Divider -->
        <div
          class="my-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          in:fade={{ delay: 280, duration: 200 }}
        ></div>

        <!-- CTA Button -->
        <div in:fly={{ y: 20, delay: 320, duration: 300, easing: cubicOut }}>
          <a
            href="{base}/kontakt#erstgespraech"
            class="flex items-center justify-center gap-3 w-full bg-primary-500 text-white
                   px-6 py-4 rounded-xl font-semibold text-base hover:bg-primary-600
                   transition-all duration-300 shadow-glow-orange"
            on:click={closeMenu}
          >
            Termin vereinbaren
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <!-- Contact Info -->
        <div
          class="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3"
          in:fly={{ y: 20, delay: 380, duration: 300, easing: cubicOut }}
        >
          <a
            href="tel:+497773920967"
            class="flex items-center gap-2.5 px-3 py-3 text-sm text-slate-600
                   hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
          >
            <svg class="w-4 h-4 shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="font-medium">07773 920967</span>
          </a>
          <a
            href="mailto:info@steuerkanzlei-ill.de"
            class="flex items-center gap-2.5 px-3 py-3 text-sm text-slate-600
                   hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
          >
            <svg class="w-4 h-4 shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="font-medium">E-Mail</span>
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}


<style>
  @keyframes navSlideDown {
    from {
      opacity: 0;
      transform: translateY(-24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes navItemFade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Enhanced glass effect when scrolled */
  .nav-container::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    pointer-events: none;
  }
</style>
