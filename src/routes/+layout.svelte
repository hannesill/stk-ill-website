<script lang="ts">
	import "../app.css";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
	<title>Digitale Steuerkanzlei am Bodensee | Steuerkanzlei Ill</title>
	<meta name="description" content="Ihre digitale Steuerkanzlei am Bodensee. Spezialisiert auf digitale Steuerberatung, Buchhaltung und Unternehmensberatung in Stockach, Singen und Radolfzell." />
	<meta name="keywords" content="Steuerberater Stockach, Steuerberater Singen, Steuerberater Radolfzell, Digitale Steuerberatung, Digitale Buchhaltung" />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
