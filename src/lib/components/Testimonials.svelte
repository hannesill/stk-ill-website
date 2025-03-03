<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';
  
  const testimonials = [
    {
      quote: "Ursula hat für unser Familienunternehmen die komplette Steuerabwicklung übernommen. Dies tut sie mit fundiertem Fachwissen und für uns nicht weniger wichtig, mit viel Geduld und Hartnäckigkeit im positiven Sinne. Durch die Digitalisierung und den Einsatz modernster Kommunikationsmittel steht unser Unternehmen immer auf dem aktuellsten Stand. Wir fühlen uns Bestens beraten und unterstützt bei Ursula. Wir können sie daher nur wärmstens weiterempfehlen.",
      name: "Peter Gruben",
      title: "Yachtcharter Konstanz",
    },
    {
      quote: "Als Personengesellschaft arbeiten wir seit vielen Jahren erfolgreich mit unserer Steuerberaterin Ursula Ill zusammen. Ihre Persönlichkeit schafft eine vertrauensvolle Atmosphäre, und ihre Zuverlässigkeit ist unverzichtbar für unser Unternehmen. Besonders schätzen wir die fundierte Beratung, die uns in wichtigen Entscheidungen stets unterstützt. Wir sind rundum zufrieden und können die Steuerkanzlei sehr empfehlen.",
      name: "Robert Wochner",
      title: "Inhaber, Robert Wochner Modellbau OHG",
    },
    {
      quote: "Seit Jahren schätze ich die Zusammenarbeit mit meiner Steuerberaterin Ursula Ill sehr. Sie überzeugt durch Pünktlichkeit und Zuverlässigkeit in allen Angelegenheiten. Besonders beeindruckt bin ich vom nahtlosen, digitalen Workflow, der den Austausch unkompliziert und effizient gestaltet. Ihre strategische Beratung hat mir entscheidende Impulse gegeben, die mein Unternehmen im Bereich Verpackung und Versand nachhaltig vorangebracht haben. Uneingeschränkt empfehlenswert!",
      name: "Daniel Nardi",
      title: "Inhaber, Nardi Business Service e.K.",
    }
  ];
</script>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 
      class="text-3xl font-bold text-center mb-4"
      use:fadeIn
    >
      Das sagen unsere Kunden
    </h2>
    <p 
      class="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
      use:fadeIn={{ delay: 200 }}
    >
      Erfahren Sie, was unsere Kunden über die Zusammenarbeit mit uns sagen
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each testimonials as testimonial, i}
        <div 
          class="bg-gray-50 p-6 rounded-lg relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          use:fadeIn={{ delay: i * 200 }}
        >
          <!-- Quote Icon -->
          <div class="absolute -top-4 right-6">
            <div class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          <!-- Stars -->
          <div class="flex mb-4">
            {#each Array(5) as _, i}
              <svg 
                class="w-5 h-5 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" 
                style="transition-delay: {i * 50}ms"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            {/each}
          </div>

          <!-- Content -->
          <blockquote class="text-gray-600 mb-6">"{testimonial.quote}"</blockquote>
          
          <!-- Author -->
          <div>
            <div class="font-semibold text-gray-900">{testimonial.name}</div>
            <div class="text-gray-500 text-sm">{testimonial.title}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> 