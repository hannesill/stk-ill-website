<script lang="ts">
	import "../app.css";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
	<title>Digitale Steuerkanzlei am Bodensee | Steuerkanzlei Ill</title>
	<meta name="description" content="Ihre digitale Steuerkanzlei am Bodensee. Spezialisiert auf digitale Steuerberatung, Buchhaltung und Unternehmensberatung in Stockach, Singen und Radolfzell." />
	<meta name="keywords" content="Steuerberater Stockach, Steuerberater Singen, Steuerberater Radolfzell, Digitale Steuerberatung, Digitale Buchhaltung" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
</svelte:head>

<!-- White background element for top overscroll -->
<div class="top-background"></div>

<div class="flex flex-col min-h-screen w-full">
	<Header />
	<main class="flex-grow w-full">
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(html) {
		background-color: #111827; /* Footer color */
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
		z-index: 1; /* Ensure body is above the background elements */
	}
	
	:global(*) {
		box-sizing: border-box;
	}
	
	/* White background element for top overscroll */
	.top-background {
		position: fixed;
		left: 0;
		right: 0;
		top: 0; /* Position it above the viewport */
		height: 50vh;
		background-color: white;
		z-index: -1; /* Behind the body content */
	}
</style>
