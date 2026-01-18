<script lang="ts">
  import Hero, { type HeroImage, type HeroContent } from "$lib/components/Hero.svelte";
  import Benefits from "$lib/components/Benefits.svelte";
  import SocialProof from "$lib/components/SocialProof.svelte";
  import Testimonials from "$lib/components/Testimonials.svelte";
  import CallToAction from "$lib/components/CallToAction.svelte";
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  // Single hero image as per design spec (no slider)
  const heroImages: HeroImage[] = [
    {
      src: `${base}/images/heros/hero-digital_bei_mandant.jpg`,
      alt: "Digitale Steuerberatung direkt beim Mandanten"
    }
  ];

  const heroContent: HeroContent = {
    title: "Monatliche Klarheit",
    highlight: "statt Über&shy;raschungen",
    subtitle: 'Als Unternehmer erhalten Sie jeden Monat einen <span class="text-white font-semibold">Erfolgsreport</span> – nicht nur einmal im Jahr einen Jahresabschluss. Steuerlich und finanziell immer im Bild.',
    buttonText: "Kostenlose Erstberatung sichern",
    buttonLink: `${base}/kontakt#erstgespraech`,
    scrollTarget: "#vorteile"
  };

  onMount(() => {
    if (browser) {
      // DATEV Marketing Script
      const script = document.createElement('script');
      script.src = 'https://www.datev-mymarketing.de/onlineMedia/code.js?ids=161458';
      script.async = true;
      document.body.appendChild(script);
    }
  });
</script>

<svelte:head>
  <title>Digitale Steuerkanzlei am Bodensee | Steuerkanzlei Ill</title>
  <meta name="description" content="Ihre digitale Steuerkanzlei am Bodensee. Monatliche Erfolgsreports statt jährlicher Überraschungen. Seit 2002 für erfolgreiche Unternehmer in Stockach, Singen, Radolfzell und deutschlandweit." />
</svelte:head>

<!-- Hero Section -->
<Hero images={heroImages} content={heroContent} />

<!-- Benefits Section -->
<Benefits />

<!-- Social Proof Section (Stats & Badges) -->
<SocialProof />

<!-- Testimonials Section -->
<Testimonials />

<!-- DATEV Widget -->
<section class="section-padding-sm bg-cream-50">
  <div id="mym-insert-here-161458" class="container-wide"></div>
</section>

<!-- Call to Action -->
<CallToAction />
