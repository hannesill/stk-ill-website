<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  let formData = {
    name: '',
    email: '',
    phone: '',
    companyType: ''
  };

  let isSubmitting = false;
  let isSubmitted = false;
  let error = '';

  const companyTypes = [
    { value: '', label: 'Bitte wählen...' },
    { value: 'einzelunternehmer', label: 'Einzelunternehmer' },
    { value: 'gmbh', label: 'GmbH / UG' },
    { value: 'freiberufler', label: 'Freiberufler' },
    { value: 'startup', label: 'Start-up' },
    { value: 'andere', label: 'Andere Rechtsform' }
  ];

  async function handleSubmit() {
    error = '';
    isSubmitting = true;

    // Form validation
    if (!formData.name || !formData.email || !formData.companyType) {
      error = 'Bitte füllen Sie alle Pflichtfelder aus.';
      isSubmitting = false;
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      error = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      isSubmitting = false;
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Anfrage Erstgespräch - ' + formData.name);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `E-Mail: ${formData.email}\n` +
        `Telefon: ${formData.phone || 'Nicht angegeben'}\n` +
        `Unternehmensform: ${companyTypes.find(t => t.value === formData.companyType)?.label || formData.companyType}\n\n` +
        `---\nDiese Anfrage wurde über das Kontaktformular auf steuerkanzlei-ill.de gesendet.`
      );

      window.location.href = `mailto:info@steuerkanzlei-ill.de?subject=${subject}&body=${body}`;

      // Show success after short delay
      setTimeout(() => {
        isSubmitted = true;
        isSubmitting = false;
      }, 500);
    } catch (e) {
      error = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';
      isSubmitting = false;
    }
  }
</script>

<div class="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8 border border-slate-100">
  {#if isSubmitted}
    <div
      class="text-center py-8"
      in:fade={{ duration: 300 }}
    >
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-slate-900 mb-2">Vielen Dank!</h3>
      <p class="text-slate-600">
        Ihr E-Mail-Programm sollte sich geöffnet haben. Falls nicht, kontaktieren Sie uns direkt unter
        <a href="mailto:info@steuerkanzlei-ill.de" class="text-primary-600 hover:underline">info@steuerkanzlei-ill.de</a>.
      </p>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit} class="space-y-5">
      <div class="text-center mb-6">
        <h3 class="text-xl font-semibold text-slate-900 mb-1">Kostenlose Erstberatung</h3>
        <p class="text-slate-500 text-sm">Wir melden uns innerhalb von 24 Stunden</p>
      </div>

      {#if error}
        <div
          class="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm"
          in:fly={{ y: -10, duration: 200 }}
        >
          {error}
        </div>
      {/if}

      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-slate-700 mb-1.5">
          Name <span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          placeholder="Ihr vollständiger Name"
          class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 outline-none"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-slate-700 mb-1.5">
          E-Mail <span class="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          placeholder="ihre@email.de"
          class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 outline-none"
          required
        />
      </div>

      <!-- Phone -->
      <div>
        <label for="phone" class="block text-sm font-medium text-slate-700 mb-1.5">
          Telefon <span class="text-slate-400 text-xs font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          bind:value={formData.phone}
          placeholder="Für schnellen Rückruf"
          class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 outline-none"
        />
      </div>

      <!-- Company Type -->
      <div class="relative">
        <label for="companyType" class="block text-sm font-medium text-slate-700 mb-1.5">
          Unternehmensform <span class="text-red-500">*</span>
        </label>
        <select
          id="companyType"
          bind:value={formData.companyType}
          class="select-custom w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 outline-none bg-white appearance-none cursor-pointer"
          required
        >
          {#each companyTypes as type}
            <option value={type.value}>{type.label}</option>
          {/each}
        </select>
        <svg class="absolute right-3 top-[38px] w-5 h-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        disabled={isSubmitting}
        class="w-full bg-primary-500 text-white px-6 py-4 rounded-xl font-semibold text-lg
               hover:bg-primary-600 hover:shadow-glow-orange transition-all duration-300
               disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none
               flex items-center justify-center gap-2"
      >
        {#if isSubmitting}
          <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Wird gesendet...</span>
        {:else}
          <span>Kostenlose Beratung anfragen</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        {/if}
      </button>

      <!-- Trust note -->
      <p class="text-center text-xs text-slate-400 mt-4">
        Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
      </p>
    </form>
  {/if}
</div>
