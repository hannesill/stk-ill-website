<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  import Hero, { type HeroImage, type HeroContent } from "$lib/components/Hero.svelte";
  import ContactCard from "$lib/components/ContactCard.svelte";

  const heroImages: HeroImage[] = [
    {
      src: "/images/heros/hero-beratung.jpg",
      alt: "Steuerberatung in der Kanzlei am Bodensee"
    }
  ];

  const heroContent: HeroContent = {
    title: "Kontakt",
    subtitle: "Wir freuen uns darauf, Sie kennenzulernen. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.",
  };
</script>

<svelte:head>
  <title>Kontakt | Steuerberatung Stockach, Singen, Radolfzell</title>
  <meta name="description" content="Kontaktieren Sie Ihre digitale Steuerberatung in Stockach, Singen und Radolfzell. Vereinbaren Sie ein kostenloses Erstgespräch." />
  <meta name="keywords" content="Steuerberater Stockach, Steuerberater Singen, Steuerberater Radolfzell, Digitale Steuerberatung, Digitale Buchhaltung" />
</svelte:head>

<Hero images={heroImages} content={heroContent} />

<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 
      class="text-3xl font-bold text-center mb-12"
      use:fadeIn
    >
      Sprechen Sie uns an
    </h2>
    
    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <ContactCard 
        title="Telefon"
        icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      >
        <a 
          href="tel:+497773920967" 
          class="text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          07773 920967
        </a>
        <p class="text-gray-600 mt-1">Mo-Fr: 8:00-17:00 Uhr</p>
      </ContactCard>

      <ContactCard 
        title="E-Mail"
        icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        delay={100}
      >
        <a 
          href="mailto:info@steuerkanzlei-ill.de" 
          class="text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          info@steuerkanzlei-ill.de
        </a>
      </ContactCard>

      <ContactCard 
        title="Adresse"
        icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        delay={200}
      >
        <address class="not-italic text-gray-600">
          <p>Steuerkanzlei Ill</p>
          <p>Oberhof 21</p>
          <p>78351 Bodman-Ludwigshafen</p>
        </address>
      </ContactCard>
    </div>
  </div>
</section>

<!-- Map Section -->
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="mx-auto">
      <iframe
        title="Kanzleistandort"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172958.38473962524!2d9.025899776891561!3d47.37698710898837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479af51689e7c96f%3A0x4a47a8d989c0a0eb!2sOberhof%2021%2C%2078351%20Bodman-Ludwigshafen!5e0!3m2!1sde!2sde!4v1709667547943!5m2!1sde!2sde"
        width="100%"
        height="650"
        style="border:0;"
        allowfullscreen={true}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-lg shadow-md"
      ></iframe>
    </div>
  </div>
</section> 