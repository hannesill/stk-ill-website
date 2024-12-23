<script>
  const navItems = [
    { title: 'Startseite', href: '/' },
    { title: 'Leistungen', href: '/leistungen' },
    { title: 'Über uns', href: '/ueber-uns' },
    { title: 'Karriere', href: '/karriere' },
    { title: 'Kontakt', href: '/kontakt' }
  ];
</script>

<header class="bg-white shadow-sm">
  <div class="container mx-auto px-4">
    <nav class="flex items-center justify-between h-20">
      <a href="/" class="flex items-center">
        <img src="/logo.png" alt="Steuerkanzlei Ill Logo" class="h-16 w-auto">
      </a>
      
      <div class="hidden md:flex space-x-8">
        {#each navItems as item}
          <a 
            href={item.href}
            class="text-gray-700 hover:text-secondary/80 transition-colors font-medium"
          >
            {item.title}
          </a>
        {/each}
      </div>

      <button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
        Termin vereinbaren
      </button>
    </nav>
  </div>
</header> 