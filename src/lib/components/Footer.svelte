<script lang="ts">
  import { base } from '$app/paths';

  const navLinks = [
    { title: 'Startseite', href: `${base}/` },
    { title: 'Leistungen', href: `${base}/leistungen` },
    { title: 'Über uns', href: `${base}/ueber-uns` },
    { title: 'Karriere', href: `${base}/karriere` },
    { title: 'Kontakt', href: `${base}/kontakt` }
  ];

  const legalLinks = [
    { title: 'Impressum', href: `${base}/impressum` },
    { title: 'Datenschutz', href: `${base}/datenschutz` }
  ];

  const locations = [
    'Stockach',
    'Singen',
    'Radolfzell',
    'Konstanz',
    'Deutschlandweit'
  ];

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-slate-900 relative overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[150px]"></div>
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-700/20 rounded-full blur-[120px]"></div>

    <!-- Subtle grid -->
    <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>
  </div>

  <div class="container-wide relative">
    <!-- Top section with gradient line -->
    <div class="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

    <!-- Main Footer Content -->
    <div class="pt-16 lg:pt-20 pb-12 lg:pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        <!-- Brand Column -->
        <div class="lg:col-span-4">
          <a href="{base}/" class="inline-block mb-6 group">
            <img
              src="{base}/logo.png"
              alt="Steuerkanzlei Ill"
              class="h-12 w-auto brightness-0 invert opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            >
          </a>
          <p class="text-slate-400 leading-relaxed mb-8 max-w-sm">
            Ihre digitale Steuerkanzlei am Bodensee. Seit 2002 begleiten wir erfolgreiche Unternehmer mit persönlicher Betreuung und modernen digitalen Lösungen.
          </p>

          <!-- Social Links -->
          <div class="flex gap-3">
            <a
              href="https://www.instagram.com/digitale_steuerkanzlei_ill/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ursula-ill-7658bb188"
              target="_blank"
              rel="noopener noreferrer"
              class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Column -->
        <div class="lg:col-span-2">
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-6">Navigation</h4>
          <ul class="space-y-3">
            {#each navLinks as link}
              <li>
                <a
                  href={link.href}
                  class="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.title}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Locations Column -->
        <div class="lg:col-span-2">
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-6">Mandanten aus</h4>
          <ul class="space-y-3">
            {#each locations as location}
              <li class="text-slate-400 text-sm flex items-center gap-2">
                <span class="w-1 h-1 rounded-full bg-primary-500"></span>
                {location}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="lg:col-span-4">
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-6">Kontakt</h4>

          <address class="not-italic space-y-4">
            <!-- Address -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="text-slate-400 text-sm">
                <p class="text-white font-medium mb-1">Steuerkanzlei Ill</p>
                <p>Oberhof 21</p>
                <p>78351 Bodman-Ludwigshafen</p>
              </div>
            </div>

            <!-- Phone -->
            <a
              href="tel:+497773920967"
              class="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span class="text-sm font-medium">07773 920967</span>
            </a>

            <!-- Email -->
            <a
              href="mailto:info@steuerkanzlei-ill.de"
              class="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-sm font-medium">info@steuerkanzlei-ill.de</span>
            </a>
          </address>

          <!-- Opening Hours -->
          <div class="mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h5 class="text-white font-medium text-sm mb-3">Öffnungszeiten</h5>
            <div class="space-y-2 text-slate-400 text-sm">
              <div class="flex justify-between">
                <span>Mo - Do</span>
                <span class="text-slate-300">8:00 - 17:00</span>
              </div>
              <div class="flex justify-between">
                <span>Fr</span>
                <span class="text-slate-300">8:00 - 15:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="py-6 border-t border-slate-800/80">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">
          &copy; {currentYear} Steuerkanzlei Ill. Alle Rechte vorbehalten.
        </p>

        <div class="flex items-center gap-6">
          {#each legalLinks as link}
            <a
              href={link.href}
              class="text-slate-500 text-sm hover:text-slate-300 transition-colors"
            >
              {link.title}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</footer>
