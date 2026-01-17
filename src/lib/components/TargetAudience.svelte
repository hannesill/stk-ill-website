<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';

  const audiences = [
    {
      title: "Selbstständige & Freiberufler",
      description: "Die endlich den Überblick über Steuern und Finanzen behalten wollen.",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    },
    {
      title: "GmbH-Geschäftsführer",
      description: "Die private und geschäftliche Finanzen optimal abstimmen möchten.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Kleine Unternehmen",
      description: "Mit bis zu 50 Mitarbeitern, die monatliche Klarheit statt jährlicher Überraschungen wollen.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Unternehmer deutschlandweit",
      description: "Die digitale Prozesse schätzen und Zeit sparen wollen – egal wo in Deutschland.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-4" use:fadeIn>Für wen wir arbeiten</h2>
    <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto" use:fadeIn={{ delay: 100 }}>
      Wir betreuen Unternehmer, die mehr erwarten als nur einen Jahresabschluss.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each audiences as audience, i}
        <div
          class="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group border border-gray-100"
          use:fadeIn={{ delay: 150 + i * 100 }}
        >
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={audience.icon} />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">{audience.title}</h3>
          <p class="text-gray-600 text-sm">{audience.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
