<svelte:head>
	<title>Svelte Before/After</title>
	<meta name="description" content="Svelte Before/After Image Plugin" />
</svelte:head>

<section>
	<header>
		<h1>Svelte Before/After Image Plugin</h1>
	</header>

	<input type="range" class="my-slider" min="0" step="1" value="" />
</section>

<style>
	.my-slider {
		-webkit-appearance: none;
		width: 100%;
		border: 2px solid green;
		border-radius: 5px;
		/* transform: rotate(270deg); */
	}
	.my-slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 20px;
		width: 40px;
		border-radius: 10%;
		background: pink;
		box-shadow: 2px 2px 1px #000000;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
