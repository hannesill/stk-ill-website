<script context="module" lang="ts">
  export interface CTAContent {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton?: {
      text: string;
      href: string;
    };
  }
</script>

<script lang="ts">
  import { base } from '$app/paths';
  const defaultContent: CTAContent = {
    title: "Bereit für den nächsten Schritt?",
    description: "Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihre steuerlichen Angelegenheiten optimieren können.",
    primaryButton: {
      text: "Kontakt aufnehmen",
      href: `${base}/kontakt#erstgespraech`
    },
    secondaryButton: {
      text: "07773 920967",
      href: "tel:+497773920967"
    }
  };

  export let content: CTAContent = defaultContent;
</script>

<section class="bg-primary py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold text-white mb-6">
      {content.title}
    </h2>
    <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
      {content.description}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href={content.primaryButton.href} 
        class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        {content.primaryButton.text}
      </a>
      {#if content.secondaryButton}
        <a 
          href={content.secondaryButton.href} 
          class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
        >
          {content.secondaryButton.text}
        </a>
      {/if}
    </div>
  </div>
</section> 