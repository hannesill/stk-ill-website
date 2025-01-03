<script lang="ts">
  export let title: string;
  export let description: string;
  export let icon: string;
  export let delay = 0;
  
  import { fadeIn } from '$lib/actions/animate';
</script>

<div 
  class="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group"
  use:fadeIn={{ delay }}
>
  <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
    <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon} />
    </svg>
  </div>
  <h3 class="text-xl font-semibold mb-2">{title}</h3>
  <p class="text-gray-600">{description}</p>
</div> 