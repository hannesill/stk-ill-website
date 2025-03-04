<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  import Hero, { type HeroImage, type HeroContent } from "$lib/components/Hero.svelte";
  import Card from "$lib/components/Card.svelte";
  import BigImageCard from "$lib/components/BigImageCard.svelte";
  import CallToAction, { type CTAContent } from "$lib/components/CallToAction.svelte";
  import { base } from '$app/paths';

  const heroImages: HeroImage[] = [
    {
      src: `${base}/images/Steuerkanzlei-Bodensee-Team.jpg`,
      alt: "Karriere in der Steuerkanzlei am Bodensee"
    }
  ];

  const heroContent: HeroContent = {
    title: "Karriere bei uns",
    subtitle: "Werden Sie Teil unseres Teams in einer der modernsten Steuerkanzleien am Bodensee. Wir bieten Ihnen einen attraktiven Arbeitsplatz mit Seeblick und digitalen Prozessen.",
    buttonText: "Jetzt bewerben",
    buttonLink: `${base}/karriere#jobs`,
    underlineWidth: "w-[52%]"
  };

  const benefits = [
    {
      title: "Flexible Arbeitszeiten",
      description: "Wir bieten flexible Arbeitszeiten und Homeoffice für maximale persönliche Gestaltungsfreiheit.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Moderne Ausstattung",
      description: "Digitale Prozesse und modernste Hard- und Software für effizientes Arbeiten.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Weiterbildung",
      description: "Regelmäßige Fortbildungen und persönliche Entwicklungsmöglichkeiten.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      title: "Teamevents",
      description: "Regelmäßige Teamaktivitäten und gemeinsame Events für ein starkes Miteinander.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Gesundheitsförderung",
      description: "Ergonomische Arbeitsplätze und Maßnahmen zur Gesundheitsförderung.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    },
    {
      title: "Tolle Lage",
      description: "Moderne Büroräume mit Seeblick in Bodman-Ludwigshafen am Bodensee.",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    }
  ];

  const jobs = [
    {
      title: "Steuerfachkraft (m/w/d)",
      description: "Auch auf freiberuflicher Basis möglich",
      requirements: [
        "Fundierte Ausbildung im Steuerrecht",
        "Gute DATEV Kenntnisse",
        "Internetaffin und recherchesicher",
        "Liebe zu digitalen Geschäftsprozessen",
        "Excel-Expertise"
      ],
      tasks: [
        "Digitale Buchhaltung und ErfolgsReport erstellen",
        "Abschlüsse aufstellen",
        "Steuererklärungen ausarbeiten",
        "Unternehmercoaching unterstützen",
        "Kunden beraten"
      ],
      image: `${base}/images/Steuerberatung-mit-Anwalt.jpg`
    },
    {
      title: "Bilanzbuchhaltungskraft (m/w/d)",
      description: "Auch auf freiberuflicher Basis möglich",
      requirements: [
        "Erfahrene Buchhaltungsfachkraft oder Bilanzbuchhalter",
        "Sehr gute DATEV Kenntnisse",
        "Offen für digitale Geschäftsprozesse",
        "Excel-Expertise",
        "Prozessorientiertes und analytisches Arbeiten"
      ],
      tasks: [
        "Digitale Belege aus DATEV Unternehmen online buchen",
        "Prozesse entwickeln",
        "Controlling erstellen",
        "Bedarfsanalysen anfertigen"
      ],
      image: `${base}/images/services/Steuerberatung-Video-Call.jpg`
    }
  ];

  const applyCTAContent: CTAContent = {
    title: "Bereit für den nächsten Karriereschritt?",
    description: "Wir freuen uns auf Deine Bewerbung! Sende uns deine Unterlagen oder vereinbare ein unverbindliches Kennenlerngespräch.",
    primaryButton: {
      text: "Jetzt bewerben",
      href: `${base}/kontakt`
    },
    secondaryButton: {
      text: "07773 920967",
      href: "tel:+497773920967"
    }
  };
</script>

<svelte:head>
  <title>Karriere | Steuerkanzlei am Bodensee</title>
  <meta name="description" content="Karriere in der Steuerkanzlei Ill am Bodensee. Wir bieten attraktive Jobs mit Seeblick, digitalen Prozessen und bester Work-Life-Balance." />
</svelte:head>

<Hero images={heroImages} content={heroContent} />

<!-- Benefits Section -->
<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 
      class="text-3xl font-bold text-center mb-4"
      use:fadeIn
    >
      Das erwartet Sie bei uns
    </h2>
    <p 
      class="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg"
      use:fadeIn={{ delay: 200 }}
    >
      Wir bieten Ihnen einen modernen Arbeitsplatz in einer der innovativsten Steuerkanzleien der Region.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each benefits as benefit, i}
        <Card 
          title={benefit.title}
          description={benefit.description}
          icon={benefit.icon}
          delay={i * 100}
        />
      {/each}
    </div>
  </div>
</section>

<!-- Jobs Section -->
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2
      id="jobs"
      class="text-3xl font-bold text-center mb-4"
      use:fadeIn
    >
      Aktuelle Stellenangebote
    </h2>
    <p 
      class="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg"
      use:fadeIn={{ delay: 200 }}
    >
      Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der Steuerberatung.
    </p>

    <div class="space-y-12">
      {#each jobs as job, i}
        <BigImageCard
          title={job.title}
          image={job.image}
          alt="Arbeitsplatz in der Steuerkanzlei"
        >
          <p class="text-gray-600 mb-6">{job.description}</p>

          <div class="space-y-6">
            <div>
              <h4 class="font-semibold mb-3 text-lg">Ihre Qualifikationen:</h4>
              <ul class="space-y-2">
                {#each job.requirements as req}
                  <li class="flex items-start group-hover:translate-x-2 transition-all duration-300">
                    <svg class="w-6 h-6 text-secondary flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{req}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-3 text-lg">Ihre Aufgaben:</h4>
              <ul class="space-y-2">
                {#each job.tasks as task}
                  <li class="flex items-start group-hover:translate-x-2 transition-all duration-300">
                    <svg class="w-6 h-6 text-secondary flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{task}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <a 
              href={`${base}/kontakt`}
              class="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105"
            >
              Jetzt bewerben
            </a>
          </div>
        </BigImageCard>
      {/each}
    </div>
  </div>
</section>

<CallToAction content={applyCTAContent} />