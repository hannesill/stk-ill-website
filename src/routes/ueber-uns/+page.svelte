<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  import Hero, { type HeroImage, type HeroContent } from "$lib/components/Hero.svelte";
  import CallToAction from "$lib/components/CallToAction.svelte";
  import Card from "$lib/components/Card.svelte";
  import { base } from '$app/paths';

  const heroImages: HeroImage[] = [
    {
      src: `${base}/images/Steuerkanzlei-Ill-Partner-Anwalt.jpg`,
      alt: "Digitale Steuerberatung direkt beim Mandanten in der Fabrik"
    },
  ];

  const heroContent: HeroContent = {
    title: "Persönlich & digital",
    highlight: "an Ihrer Seite",
    subtitle: 'Wir sind eine digitale Steuerberatung in Stockach, Singen und Radolfzell, die Ihnen neue Wege in der Steuerberatung und Buchhaltung eröffnet.',
    buttonText: "Jetzt unverbindliches Erstgespräch vereinbaren",
    buttonLink: `${base}/kontakt#erstgespraech`
  };
</script>

<svelte:head>
  <title>Über uns | Digitale Steuerberatung Stockach, Singen, Radolfzell</title>
  <meta name="description" content="Ihre digitale Steuerberatung in Stockach, Singen und Radolfzell. Erfahren Sie mehr über unsere moderne Steuerkanzlei und unser Engagement für digitale Prozesse." />
  <meta name="keywords" content="Steuerberater Stockach, Steuerberater Singen, Steuerberater Radolfzell, Digitale Steuerberatung, Digitale Buchhaltung" />
</svelte:head>

<!-- Hero Section -->
<Hero images={heroImages} content={heroContent} />

<!-- Ursula Ill Section -->
<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div use:fadeIn>
        <h2 class="text-3xl font-bold mb-6">Ursula Ill - Steuerberaterin</h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">
            Gründerin und Inhaberin der Kanzlei, Steuerberaterin seit 2002
          </p>
          <p class="mb-4">
            Nach einer ersten Ausbildung in einem Dienstleistungsberuf wollte ich mich weiterentwickeln: 
            Ich interessierte mich für Recht und Betriebswirtschaft, Dienstleistungen habe ich von der Pike 
            auf gelernt, mit Menschen wollte ich arbeiten. So entschied ich mich für eine Ausbildung zur 
            Steuerfachgehilfin.
          </p>
          <p class="mb-4">
            Kurz nach Ausbildungsbeginn war mir klar, dass ich Steuerberaterin werden wollte. Mein 
            Ausbildungsbetrieb, eine renommierte Wirtschaftsprüfungsgesellschaft in Sigmaringen, half mir 
            auf meinem Weg und so schloss ich meine Ausbildung zur Steuerfachangestellten mit großem Erfolg ab. 
            Ich absolvierte durch meine Weiterbildung die Prüfung zur Steuerfachwirtin. Nach sieben Jahren 
            Berufserfahrung und kontinuierlicher Fortbildung legte ich 2002 die Prüfung zur Steuerberaterin 
            erfolgreich ab.
          </p>
          <p class="mb-4">
            Seit 2003 bin ich als Steuerberaterin am Bodensee selbständig.
          </p>
          <p class="mb-4">
            Die Digitalisierung der Steuerberatung wurde mein Herzensthema, welches ich intern und extern lebe. 
            Doch nicht immer ist der Prozess von manuellen zu digitalen Prozessen einfach. Daher entschloss ich 
            mich für eine zusätzliche Qualifikation an der Akademie für Unternehmercoaching, um Unternehmer noch 
            besser in allen Veränderungsprozessen unterstützen zu können.
          </p>
        </div>
      </div>

      <div 
        class="rounded-lg overflow-hidden shadow-lg"
        use:fadeIn={{ delay: 200 }}
      >
        <img 
          src={`${base}/images/Steuerkanzlei-Bodensee-Bankengespraech.jpg`}
          alt="Ursula Ill - Ihre Steuerberaterin in Stockach"
          class="w-full h-full object-cover"
        >
      </div>
    </div>
  </div>
</section>

<!-- Certificates Section -->
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 
      class="text-3xl font-bold text-center mb-4"
      use:fadeIn
    >
      Zertifizierte Digitale DATEV-Kanzlei
    </h2>
    <p 
      class="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg"
      use:fadeIn={{ delay: 200 }}
    >
      Seit Jahren gehören wir zu den zertifizierten digitalen DATEV-Kanzleien und setzen konsequent 
      auf moderne, digitale Prozesse für eine effiziente Zusammenarbeit mit unseren Mandanten.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
      <div 
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center"
        use:fadeIn={{ delay: 0 }}
      >
        <div class="w-full h-36 flex items-center justify-center">
          <img 
            src={`${base}/images/certificates/DATEV_Digitale_Kanzlei_2025.png`}
            alt="DATEV Digitale Kanzlei Zertifikat 2025"
            class="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          >
        </div>
        <p class="text-center mt-6 font-semibold text-gray-700 text-lg">Digitale DATEV-Kanzlei seit 2019</p>
      </div>
      
      <div 
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center"
        use:fadeIn={{ delay: 200 }}
      >
        <div class="w-full h-36 flex items-center justify-center">
          <img 
            src={`${base}/images/certificates/DATEV_Mitglied.png`}
            alt="DATEV Mitglied Zertifikat"
            class="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          >
        </div>
        <p class="text-center mt-6 font-semibold text-gray-700 text-lg">Zertifiziertes DATEV-Mitglied</p>
      </div>
      
      <div 
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center"
        use:fadeIn={{ delay: 400 }}
      >
        <div class="w-full h-36 flex items-center justify-center">
          <img 
            src={`${base}/images/certificates/dstv_bw_logo.jpeg`}
            alt="Mitglied im Deutschen Steuerberaterverband"
            class="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          >
        </div>
        <p class="text-center mt-6 font-semibold text-gray-700 text-lg">Mitglied im Deutschen Steuerberaterverband</p>
      </div>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 
      class="text-3xl font-bold text-center mb-4"
      use:fadeIn
    >
      Was uns als Ihre Steuerkanzlei am Bodensee auszeichnet
    </h2>
    <p 
      class="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg"
      use:fadeIn={{ delay: 200 }}
    >
      Wir bieten Ihnen eine Steuerberatung mit echtem Mehrwert, die weit über das gesetzliche Minimum hinausgeht.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each [
        {
          title: "Persönliche Betreuung",
          description: "Der persönliche Kontakt zu unseren Kunden und Gespräche auf Augenhöhe stehen bei uns im Mittelpunkt.",
          icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        },
        {
          title: "Ganzheitlicher Ansatz",
          description: "Eine ganzheitliche Sichtweise und ein gesamtstrategischer Ansatz für Ihren nachhaltigen Erfolg.",
          icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        },
        {
          title: "Innovativ & Digital",
          description: "Wir schauen über den Tellerrand hinaus und gehen mit der Zeit immer wieder neue Wege.",
          icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        },
        {
          title: "Fester Ansprechpartner",
          description: "Sie haben immer einen festen Ansprechpartner für alle Ihre Anliegen.",
          icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        },
        {
          title: "Expertennetzwerk",
          description: "Wir sind Teil eines erfolgreichen Unternehmens- und Expertennetzwerks für Ihre optimale Betreuung.",
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
          title: "Nachhaltige Beratung",
          description: "Ein nachhaltiges Beratungskonzept, das weit über eine klassische Steuerberatung hinausgeht.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z"
        }
      ] as card, i}
        <Card 
          title={card.title}
          description={card.description}
          icon={card.icon}
          delay={i * 100}
        />
      {/each}
    </div>
  </div>
</section>

<CallToAction />

<style>
  @keyframes slide-right {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
</style> 