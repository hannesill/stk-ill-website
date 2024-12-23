<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  const navItems = [
    { title: 'Startseite', href: '/' },
    { title: 'Leistungen', href: '/leistungen' },
    { title: 'Über uns', href: '/ueber-uns' },
    { title: 'Karriere', href: '/karriere' },
    { title: 'Kontakt', href: '/kontakt' }
  ];

  let isMenuOpen = false;
  let isScrolled = false;

  // Close menu when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mobile-menu') && !target.closest('.burger-button')) {
      isMenuOpen = false;
    }
  }

  // Handle scroll events
  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<header 
  class="fixed w-full z-50 bg-white transition-all duration-300"
  class:shadow-md={isScrolled}
>
  <div class="container mx-auto px-4">
    <nav class="flex items-center justify-between h-20">
      <a href="/" class="flex items-center z-20">
        <img src="/logo.png" alt="Steuerkanzlei Ill Logo" class="h-16 w-auto">
      </a>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex space-x-8">
        {#each navItems as item}
          <a 
            href={item.href}
            class="text-gray-700 hover:text-secondary/80 transition-colors font-medium"
          >
            {item.title}
          </a>
        {/each}
      </div>

      <!-- Mobile Burger Button -->
      <button 
        class="lg:hidden z-20 burger-button p-2"
        on:click={() => isMenuOpen = !isMenuOpen}
        aria-label="Menu"
      >
        <div class="w-6 flex flex-col gap-1.5 transition-all duration-300">
          <span class="w-full h-0.5 bg-gray-800 block transition-all duration-300" 
                class:rotate-45={isMenuOpen}
                class:translate-y-2={isMenuOpen}></span>
          <span class="w-full h-0.5 bg-gray-800 block transition-all duration-300"
                class:opacity-0={isMenuOpen}></span>
          <span class="w-full h-0.5 bg-gray-800 block transition-all duration-300"
                class:-rotate-45={isMenuOpen}
                class:-translate-y-2={isMenuOpen}></span>
        </div>
      </button>

      <button class="hidden lg:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
        Termin vereinbaren
      </button>

      <!-- Mobile Menu -->
      {#if isMenuOpen}
        <div 
          class="fixed inset-0 bg-white z-10 lg:hidden mobile-menu"
          transition:fade={{ duration: 200 }}
        >
          <div 
            class="flex flex-col items-center justify-center h-full space-y-8"
            transition:slide={{ duration: 300 }}
          >
            {#each navItems as item}
              <a 
                href={item.href}
                class="text-xl text-gray-800 hover:text-secondary/80 transition-colors font-medium"
                on:click={() => isMenuOpen = false}
              >
                {item.title}
              </a>
            {/each}
            <button 
              class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors mt-4"
              on:click={() => isMenuOpen = false}
            >
              Termin vereinbaren
            </button>
          </div>
        </div>
      {/if}
    </nav>
  </div>
</header>

<!-- Spacer to prevent content from hiding under fixed header -->
<div class="h-20"></div> 