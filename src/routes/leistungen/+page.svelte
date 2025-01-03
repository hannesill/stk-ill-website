<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  import CallToAction from '$lib/components/CallToAction.svelte';
  import BigImageCard from '$lib/components/BigImageCard.svelte';
  
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
      {#each services as service}
        <BigImageCard
          title={service.title}
          titleMd={service.titleMd}
          image={service.image}
          alt={service.alt}
        >
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
        </BigImageCard>
      {/each}
    </div>
  </div>
</section>

<CallToAction />