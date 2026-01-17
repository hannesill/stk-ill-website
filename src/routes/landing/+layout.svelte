<script lang="ts">
	import "../../app.css";
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Kostenloses Erstgespräch | Steuerkanzlei Ill</title>
	<meta name="description" content="Monatliche Klarheit statt jährlicher Überraschungen. Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch mit der digitalen Steuerkanzlei Ill." />
	<meta name="robots" content="noindex" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
</svelte:head>

<!-- White background element for top overscroll -->
<div class="top-background"></div>

<div class="flex flex-col min-h-screen w-full">
	<!-- Minimal Header for Landing Page -->
	<header class="bg-white py-4 px-4 shadow-sm">
		<div class="container mx-auto flex justify-between items-center">
			<a href={`${base}/`} class="flex items-center">
				<img src={`${base}/logo.png`} alt="Steuerkanzlei Ill Logo" class="h-12" />
			</a>
			<a
				href="tel:+497773920967"
				class="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
				<span class="hidden sm:inline">07773 920967</span>
			</a>
		</div>
	</header>

	<main class="flex-grow w-full">
		<slot />
	</main>

	<!-- Minimal Footer for Landing Page -->
	<footer class="bg-gray-900 text-white py-6 px-4">
		<div class="container mx-auto text-center text-sm text-gray-400">
			<p>Steuerkanzlei Ill | Ursula Ill | Steuerberaterin</p>
			<p class="mt-1">Dillstraße 18, 78333 Stockach</p>
			<div class="mt-3 flex justify-center gap-4">
				<a href={`${base}/impressum`} class="hover:text-white transition-colors">Impressum</a>
				<a href={`${base}/datenschutz`} class="hover:text-white transition-colors">Datenschutz</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(html) {
		background-color: #111827;
		margin: 0;
		padding: 0;
		width: 100%;
		max-width: 100%;
		overflow-x: hidden;
	}

	:global(body) {
		background-color: white;
		margin: 0;
		padding: 0;
		width: 100%;
		max-width: 100%;
		overflow-x: hidden;
		min-height: 100vh;
		position: relative;
		z-index: 1;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.top-background {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 50vh;
		background-color: white;
		z-index: -1;
	}
</style>
