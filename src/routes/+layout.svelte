<script lang="ts">
	import "../app.css";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import ExitIntentPopup from "$lib/components/ExitIntentPopup.svelte";
	import MobileStickyCTA from "$lib/components/MobileStickyCTA.svelte";
</script>

<svelte:head>
	<title>Digitale Steuerkanzlei am Bodensee | Steuerkanzlei Ill</title>
	<meta name="description" content="Ihre digitale Steuerkanzlei am Bodensee. Spezialisiert auf digitale Steuerberatung, Buchhaltung und Unternehmensberatung in Stockach, Singen und Radolfzell." />
	<meta name="keywords" content="Steuerberater Stockach, Steuerberater Singen, Steuerberater Radolfzell, Digitale Steuerberatung, Digitale Buchhaltung" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.steuerkanzlei-ill.de/" />
	<meta property="og:title" content="Digitale Steuerkanzlei am Bodensee | Steuerkanzlei Ill" />
	<meta property="og:description" content="Monatliche Erfolgsreports statt jährlicher Überraschungen. Ihre digitale Steuerberatung für Unternehmer in Stockach, Singen, Radolfzell und deutschlandweit." />
	<meta property="og:image" content="https://www.steuerkanzlei-ill.de/images/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="de_DE" />
	<meta property="og:site_name" content="Steuerkanzlei Ill" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.steuerkanzlei-ill.de/" />
	<meta name="twitter:title" content="Digitale Steuerkanzlei am Bodensee | Steuerkanzlei Ill" />
	<meta name="twitter:description" content="Monatliche Erfolgsreports statt jährlicher Überraschungen. Ihre digitale Steuerberatung für Unternehmer." />
	<meta name="twitter:image" content="https://www.steuerkanzlei-ill.de/images/og-image.jpg" />

	<!-- Additional SEO -->
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Steuerkanzlei Ill" />
	<meta name="geo.region" content="DE-BW" />
	<meta name="geo.placename" content="Bodman-Ludwigshafen" />

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

<!-- Mobile Sticky CTA -->
<MobileStickyCTA />

<!-- Exit Intent Popup for Lead Recovery -->
<ExitIntentPopup />

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
