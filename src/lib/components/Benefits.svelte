<script lang="ts">
  import Card from '$lib/components/Card.svelte';
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Gute Gründe, sich für uns zu entscheiden</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each [
        {
          title: "Digitale Prozesse",
          description: "Effiziente digitale Prozesse sparen Zeit und Kosten. Ihre Belege können Sie bequem digital einreichen.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
          title: "Up to Date",
          description: "Durch unsere moderne Infrastruktur gewährleisten wir schnelle Bearbeitungszeiten und liefern aktuelle Zahlen.",
          icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
          title: "Persönliche Beratung",
          description: "Trotz digitaler Prozesse steht bei uns der persönliche Kontakt im Vordergrund.",
          icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
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