<script lang="ts">
  import Hero, { type HeroImage, type HeroContent } from "$lib/components/Hero.svelte";
  import Services from "$lib/components/Services.svelte";
  import Benefits from "$lib/components/Benefits.svelte";
  import Testimonials from "$lib/components/Testimonials.svelte";
  import CallToAction from "$lib/components/CallToAction.svelte";
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const heroImages: HeroImage[] = [
    {
      src: `${base}/images/heros/hero-digital_bei_mandant.jpg`,
      alt: "Digitale Steuerberatung direkt beim Mandanten in der Fabrik"
    },
    {
      src: `${base}/images/heros/hero-beratung.jpg`,
      alt: "Steuerberatung in der Kanzlei am Bodensee"
    },
    {
      src: `${base}/images/heros/hero-rechnung_digital_einscannen.jpg`,
      alt: "Moderne Buchhaltung mit Einscannen der Rechnungen"
    }
  ];

  const heroContent: HeroContent = {
    title: "Digitale Steuerberatung",
    subtitle: 'Für Personen & Unternehmen in <span class="font-bold">Stockach, Singen, Radolfzell und Umgebung</span>, die neue Wege gehen wollen: Weniger Kosten und mehr Zeit fürs Wesentliche durch digitale Prozesse.',
    buttonText: "Jetzt unverbindliches Erstgespräch vereinbaren",
    buttonLink: `${base}/kontakt#erstgespraech`,
    underlineWidth: "w-[32%]"
  };

  onMount(() => {
    if (browser) {
      const script = document.createElement('script');
      script.src = 'https://www.datev-mymarketing.de/onlineMedia/code.js?ids=161458';
      script.async = true;
      document.body.appendChild(script);
    }
  });
</script>

<Hero images={heroImages} content={heroContent} />
<Benefits />
<Services />

<div id="mym-insert-here-161458" class="p-8 md:p-16 lg:p-16 md:mx-32 lg:mx-32"></div>

<Testimonials />
<CallToAction />
