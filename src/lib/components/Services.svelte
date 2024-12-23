<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 
      class="text-3xl font-bold text-center mb-12"
      use:fadeIn
    >
      Unsere Leistungen
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service, i}
        <div 
          class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group"
          use:fadeIn={{ delay: i * 100 }}
        >
          {#if service.image}
            <div class="overflow-hidden rounded-t-lg">
              <img 
                src={service.image} 
                alt={service.title}
                class="w-full h-48 object-cover object-top transition-transform duration-700 group-hover:scale-110"
              >
            </div>
          {/if}
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
            <p class="text-gray-600 mb-4">{service.description}</p>
            <a 
              href={service.href} 
              class="text-secondary hover:text-secondary-dark font-medium inline-flex items-center group-hover:translate-x-2 transition-all duration-300"
            >
              Mehr erfahren 
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<script>
  import { fadeIn } from '$lib/actions/animate';
  const services = [
    {
      title: "Steuerberatung",
      description: "Kompetente Beratung in allen steuerlichen Angelegenheiten.",
      href: "/leistungen/steuerberatung",
      image: "/images/services/Steuerberatung-Bodensee.jpg"
    },
    {
      title: "Unternehmensberatung",
      description: "Strategische Beratung für nachhaltigen Unternehmenserfolg.",
      href: "/leistungen/unternehmensberatung",
      image: "/images/services/Steuerberatung-Vermögensaufbau.jpg"
    },
    {
      title: "Digitale Buchhaltung",
      description: "Moderne Buchführung mit digitaler Belegerfassung und automatisierten Prozessen.",
      href: "/leistungen/digitale-buchhaltung",
      image: "/images/services/Rechnung-einscannen-digital.jpg"
    },
    {
      title: "Lohn- und Gehaltsabrechnung",
      description: "Zuverlässige Lohnbuchhaltung und Personalverwaltung.",
      href: "/leistungen/lohnbuchhaltung",
      image: "/images/services/Steuerberatung-Video-Call.jpg"
    },
    {
      title: "Jahresabschluss",
      description: "Professionelle Erstellung von Jahresabschlüssen für Unternehmen jeder Größe.",
      href: "/leistungen/jahresabschluss",
      image: "/images/services/Digitale-Steuerkanzlei-iPad.jpg"
    },
    {
      title: "Existenzgründung",
      description: "Begleitung von der Geschäftsidee bis zur erfolgreichen Umsetzung.",
      href: "/leistungen/existenzgruendung",
      image: "/images/services/Digitale-Steuerberaterin.jpg"
    }
  ];
</script> 