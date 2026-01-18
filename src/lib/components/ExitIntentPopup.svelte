<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import { cubicOut, backOut } from 'svelte/easing';
  import { browser } from '$app/environment';

  let isVisible = false;
  let hasBeenShown = false;
  let email = '';
  let isSubmitting = false;
  let isSubmitted = false;

  const STORAGE_KEY = 'stk-ill-exit-popup-shown';
  const COOLDOWN_HOURS = 24;

  function shouldShowPopup(): boolean {
    if (!browser) return false;

    const lastShown = localStorage.getItem(STORAGE_KEY);
    if (!lastShown) return true;

    const lastShownTime = parseInt(lastShown, 10);
    const hoursSinceShown = (Date.now() - lastShownTime) / (1000 * 60 * 60);
    return hoursSinceShown > COOLDOWN_HOURS;
  }

  function markAsShown() {
    if (browser) {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }
  }

  function handleMouseLeave(e: MouseEvent) {
    if (hasBeenShown || isVisible) return;
    if (!shouldShowPopup()) return;

    // Check if mouse is leaving from the top of the viewport
    if (e.clientY <= 0) {
      showPopup();
    }
  }

  function showPopup() {
    isVisible = true;
    hasBeenShown = true;
    markAsShown();
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    isVisible = false;
    document.body.style.overflow = '';
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isVisible) {
      closePopup();
    }
  }

  async function handleSubmit() {
    if (!email) return;

    isSubmitting = true;

    // Create mailto link
    const subject = encodeURIComponent('Anfrage Steuer-Checkliste');
    const body = encodeURIComponent(
      `Bitte senden Sie mir die kostenlose Steuer-Checkliste an folgende E-Mail-Adresse:\n\n` +
      `E-Mail: ${email}\n\n` +
      `---\nDiese Anfrage wurde über das Exit-Intent Popup auf steuerkanzlei-ill.de gesendet.`
    );

    window.location.href = `mailto:info@steuerkanzlei-ill.de?subject=${subject}&body=${body}`;

    setTimeout(() => {
      isSubmitted = true;
      isSubmitting = false;
    }, 500);
  }

  onMount(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  });
</script>

{#if isVisible}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100]"
    transition:fade={{ duration: 200 }}
    on:click={closePopup}
    role="presentation"
  ></div>

  <!-- Popup -->
  <div
    class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg"
    transition:scale={{ duration: 350, start: 0.9, easing: backOut }}
  >
    <div class="bg-white rounded-2xl shadow-soft-xl overflow-hidden">
      <!-- Close button -->
      <button
        on:click={closePopup}
        class="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
        aria-label="Schließen"
      >
        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {#if isSubmitted}
        <!-- Success State -->
        <div class="p-8 text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-2">Fast geschafft!</h3>
          <p class="text-slate-600 mb-6">
            Ihr E-Mail-Programm sollte sich geöffnet haben. Senden Sie die E-Mail ab, um Ihre Checkliste zu erhalten.
          </p>
          <button
            on:click={closePopup}
            class="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
          >
            Schließen
          </button>
        </div>
      {:else}
        <!-- Header with gradient -->
        <div class="bg-gradient-to-br from-primary-500 to-primary-600 p-6 text-white text-center">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold mb-2">Moment!</h2>
          <p class="text-white/90">Holen Sie sich unsere kostenlose Checkliste</p>
        </div>

        <!-- Content -->
        <div class="p-6">
          <h3 class="text-lg font-semibold text-slate-900 mb-3 text-center">
            10-Punkte-Checkliste für digitale Steuerberatung
          </h3>

          <ul class="space-y-2 mb-6">
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <svg class="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Typische Steuerfehler vermeiden</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <svg class="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Digitale Tools richtig einsetzen</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <svg class="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Was eine gute Steuerberatung ausmacht</span>
            </li>
          </ul>

          <!-- Email Form -->
          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <input
              type="email"
              bind:value={email}
              placeholder="Ihre E-Mail-Adresse"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 outline-none"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full bg-primary-500 text-white px-6 py-3.5 rounded-xl font-semibold
                     hover:bg-primary-600 transition-all duration-300
                     disabled:opacity-60 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2"
            >
              {#if isSubmitting}
                <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              {:else}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Kostenlos herunterladen
              {/if}
            </button>
          </form>

          <!-- Divider -->
          <div class="flex items-center gap-4 my-5">
            <div class="flex-1 h-px bg-slate-200"></div>
            <span class="text-xs text-slate-400 uppercase tracking-wide">oder</span>
            <div class="flex-1 h-px bg-slate-200"></div>
          </div>

          <!-- Phone CTA -->
          <a
            href="tel:+497773920967"
            class="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
          >
            <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Direkt anrufen: 07773 920967
          </a>

          <p class="text-center text-xs text-slate-400 mt-4">
            Kein Spam – nur die Checkliste. Versprochen.
          </p>
        </div>
      {/if}
    </div>
  </div>
{/if}
