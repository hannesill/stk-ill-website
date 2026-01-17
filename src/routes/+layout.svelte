<script lang="ts">
	import "../app.css";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
	<title>Digitale Steuerkanzlei am Bodensee | Steuerkanzlei Ill</title>
	<meta name="description" content="Ihre digitale Steuerkanzlei am Bodensee. Spezialisiert auf digitale Steuerberatung, Buchhaltung und Unternehmensberatung in Stockach, Singen und Radolfzell." />
	<meta name="keywords" content="Steuerberater Stockach, Steuerberater Singen, Steuerberater Radolfzell, Digitale Steuerberatung, Digitale Buchhaltung" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Preconnect to fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin="anonymous">
</svelte:head>

<!-- Background for overscroll -->
<div class="fixed-background"></div>

<div class="app-wrapper flex flex-col min-h-screen w-full">
	<Header />
	<main class="flex-grow w-full">
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(html) {
		background-color: #0F172A; /* Slate-950 for overscroll */
		margin: 0;
		padding: 0;
		width: 100%;
		max-width: 100%;
		overflow-x: hidden;
	}

	:global(body) {
		background-color: #FEFDFB; /* Cream-50 */
		margin: 0;
		padding: 0;
		width: 100%;
		max-width: 100%;
		overflow-x: hidden;
		min-height: 100vh;
		position: relative;
	}

	:global(*) {
		box-sizing: border-box;
	}

	/* Fixed background for top overscroll - matches hero aesthetic */
	.fixed-background {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 50vh;
		background: linear-gradient(180deg, #0F172A 0%, #1E293B 100%);
		z-index: -1;
	}

	.app-wrapper {
		position: relative;
		z-index: 1;
	}
</style>
