<script lang="ts">
  import { fadeIn } from '$lib/actions/animate';

  export let title: string;
  export let titleMd: string | undefined = undefined;
  export let image: string;
  export let alt: string;
  export let imageLeft: boolean = true;
  export let id: string;
</script>

<div 
  id={id}
  class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group max-w-full"
  use:fadeIn
>
  <div class="grid md:grid-cols-2 gap-8 overflow-hidden">
    <!-- Image Section -->
    <div class={`${imageLeft ? 'order-2 md:order-1' : 'order-2'} md:h-full overflow-hidden`}>
      <div class="overflow-hidden rounded-b-lg md:rounded-none {imageLeft ? 'md:rounded-l-lg' : 'md:rounded-r-lg'} h-64 md:h-full">
        <img 
          src={image} 
          {alt}
          class="w-full h-full object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        >
      </div>
    </div>

    <!-- Content Section -->
    <div class={`p-8 ${imageLeft ? 'order-1 md:order-2' : 'order-1'}`}>
      <h2 class="text-3xl font-bold mb-4 text-gray-900">
        <span class="md:hidden lg:inline">{title}</span>
        <span class="hidden md:inline lg:hidden whitespace-pre-line">{titleMd || title}</span>
      </h2>
      <slot />
    </div>
  </div>
</div>

<style>
  /* Ensure consistent image behavior */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 10%;
  }
  
  /* Ensure all containers respect their boundaries */
  div {
    max-width: 100%;
    box-sizing: border-box;
  }
</style> 