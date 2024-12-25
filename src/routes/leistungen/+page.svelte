<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  
  const services = [
    {
      id: 'steuerberatung',
      title: 'Digitale Steuerberatung',
      description: 'Moderne Steuerberatung mit digitalen Prozessen für maximale Effizienz.',
      features: [
        'Digitale Steuererklärungen für Privatpersonen und Unternehmen',
        'Steuerliche Gestaltungsberatung',
        'Vertretung gegenüber Finanzbehörden',
        'Digitale Kommunikation und Dokumentenverwaltung',
        'Steueroptimierung durch vorausschauende Planung'
      ],
      image: '/images/services/Steuerberatung-Bodensee.jpg',
      alt: 'Digitale Steuerberatung am Bodensee'
    },
    {
      id: 'buchhaltung',
      title: 'Digitale Buchhaltung',
      description: 'Effiziente Buchführung durch modernste digitale Prozesse.',
      features: [
        'Digitale Belegerfassung und -verwaltung',
        'Automatisierte Buchungsprozesse',
        'Online-Zugriff auf Ihre Buchhaltung',
        'Zeitnahe BWA und Auswertungen',
        'Integration bestehender Systeme'
      ],
      image: '/images/services/Rechnung-einscannen-digital.jpg',
      alt: 'Digitale Buchhaltung und Belegerfassung'
    },
    {
      id: 'jahresabschluss',
      title: 'Jahresabschluss',
      description: 'Professionelle Erstellung von Jahresabschlüssen für Unternehmen jeder Größe.',
      features: [
        'Erstellung von Jahresabschlüssen',
        'E-Bilanz und digitale Übermittlung',
        'Analyse der Geschäftszahlen',
        'Entwicklung von Optimierungsstrategien',
        'Beratung zu Bilanzierungsfragen'
      ],
      image: '/images/services/Digitale-Steuerkanzlei-iPad.jpg',
      alt: 'Digitaler Jahresabschluss'
    },
    {
      id: 'lohnbuchhaltung',
      title: 'Lohn- und Gehaltsabrechnung',
      description: 'Professionelle Lohnbuchhaltung mit digitaler Personalakte.',
      features: [
        'Monatliche Lohn- und Gehaltsabrechnungen',
        'Digitale Personalaktenführung',
        'Bescheinigungswesen',
        'Sozialversicherungsmeldungen',
        'Betriebliche Altersvorsorge'
      ],
      image: '/images/services/Steuerberatung-Video-Call.jpg',
      alt: 'Digitale Lohnbuchhaltung'
    },
    {
      id: 'unternehmensberatung',
      title: 'Unternehmensberatung',
      titleMd: 'Unternehmens-\nberatung',
      description: 'Strategische Beratung für nachhaltigen Unternehmenserfolg.',
      features: [
        'Betriebswirtschaftliche Auswertungen und Controlling',
        'Liquiditätsplanung und -steuerung',
        'Kostenrechnung und Kalkulation',
        'Digitale Prozessoptimierung',
        'Unternehmensnachfolge'
      ],
      image: '/images/services/Steuerberatung-Vermögensaufbau.jpg',
      alt: 'Unternehmensberatung am Bodensee'
    },
    {
      id: 'existenzgruendung',
      title: 'Existenzgründung',
      description: 'Begleitung von der Geschäftsidee bis zur erfolgreichen Umsetzung.',
      features: [
        'Entwicklung des Businessplans',
        'Finanzierungsberatung',
        'Wahl der optimalen Rechtsform',
        'Unterstützung bei Förderanträgen',
        'Digitale Prozessplanung von Anfang an'
      ],
      image: '/images/services/Digitale-Steuerberaterin.jpg',
      alt: 'Existenzgründungsberatung'
    }
  ];
</script>

<svelte:head>
  <title>Digitale Steuerberatung Stockach, Singen, Radolfzell | Steuerkanzlei Ill</title>
  <meta name="description" content="Ihre digitale Steuerberatung in Stockach, Singen und Radolfzell. Spezialisiert auf digitale Buchhaltung, Lohnbuchhaltung und Unternehmensberatung am Bodensee." />
  <meta name="keywords" content="Steuerberater Stockach, Steuerberater Singen, Steuerberater Radolfzell, Digitale Steuerberatung, Digitale Buchhaltung, Unternehmensberatung Bodensee" />
</svelte:head>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h1 
      class="text-4xl font-bold text-center mb-4"
      use:fadeIn
    >
      Unsere Leistungen
    </h1>
    <p 
      class="text-gray-600 text-center mb-16 max-w-3xl mx-auto text-lg"
      use:fadeIn={{ delay: 200 }}
    >
      Als moderne Steuerkanzlei in der Region Stockach, Singen und Radolfzell bieten wir Ihnen 
      digitale Lösungen für alle steuerlichen und betriebswirtschaftlichen Anforderungen.
    </p>

    <div class="space-y-24">
      {#each services as service, i}
        <div 
          class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group"
          use:fadeIn={{ delay: i * 200 }}
        >
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Image Section -->
            <div class="order-2 md:order-1 md:h-full">
              <div class="overflow-hidden rounded-b-lg md:rounded-none md:rounded-l-lg h-64 md:h-full">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-8 order-1 md:order-2">
              <h2 class="text-3xl font-bold mb-4 text-gray-900">
                <span class="md:hidden lg:inline">{service.title}</span>
                <span class="hidden md:inline lg:hidden whitespace-pre-line">{service.titleMd || service.title}</span>
              </h2>
              <p class="text-gray-600 mb-6 text-lg">
                {service.description}
              </p>
              
              <ul class="space-y-3">
                {#each service.features as feature}
                  <li class="flex items-start group-hover:translate-x-2 transition-all duration-300">
                    <svg class="w-6 h-6 text-secondary flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-16 bg-primary">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold text-white mb-6">
      Bereit für den digitalen Wandel?
    </h2>
    <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
      Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihre Prozesse digitalisieren und optimieren können.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/kontakt" 
        class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Kontakt aufnehmen
      </a>
      <a 
        href="tel:+497773920967" 
        class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
      >
        07773 920967
      </a>
    </div>
  </div>
</section> 