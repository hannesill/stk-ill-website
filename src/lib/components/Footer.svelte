<footer class="bg-gray-900 text-gray-300 py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-white font-bold mb-4">Kontakt</h3>
        <address class="not-italic">
          <p>Steuerkanzlei Ill</p>
          <p>Oberhof 21</p>
          <p>78351 Bodman-Ludwigshafen</p>
          <p class="mt-2">Tel: <a href="tel:+497773920967" class="hover:text-white">07773 920967</a></p>
          <p>Email: <a href="mailto:info@steuerkanzlei-ill.de" class="hover:text-white">info@steuerkanzlei-ill.de</a></p>
        </address>
      </div>

      <div>
        <h3 class="text-white font-bold mb-4">Unsere Kunden kommen aus</h3>
        <ul class="space-y-2">
          <li>Stockach</li>
          <li>Singen</li>
          <li>Radolfzell</li>
          <li>und Umgebung</li>
        </ul>
      </div>

      <div class="space-y-4">
        <h3 class="text-white font-semibold mb-4">Rechtliches</h3>
        <ul class="space-y-2">
          <li>
            <a href={`${base}/impressum`} class="hover:text-primary transition-colors">Impressum</a>
          </li>
          <li>
            <a href={`${base}/datenschutz`} class="hover:text-primary transition-colors">Datenschutz</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-bold mb-4">Öffnungszeiten</h3>
        <ul class="space-y-2">
          <li>Mo - Do: 8:00 - 17:00</li>
          <li>Fr: 8:00 - 15:00</li>
          <li>Sa - So: Geschlossen</li>
        </ul>
      </div>
    </div>
  </div>
</footer> 

<script lang="ts">
  import { base } from '$app/paths';
</script>