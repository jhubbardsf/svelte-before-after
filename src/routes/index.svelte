<script lang="ts">
	let slider = 50;
</script>

<svelte:head>
	<title>Svelte Before/After</title>
	<meta name="description" content="Svelte Before/After Image Plugin" />
</svelte:head>

<section>
	<header>
		<h1>Svelte Before/After Image Plugin</h1>
	</header>

	<div class="slider-images">
		<div style="width: {slider}%;">
			<img class="after" src="after.png" alt="after" width="500" height="500" />
		</div>

		<img class="before" src="before.png" alt="before" width="500" height="500" />
		<input bind:value={slider} type="range" class="my-slider" min="0" step="1" />
	</div>
</section>

<style lang="scss">
	.slider-images {
		@apply grid;

		div {
			@apply row-[1/1] col-[1/1] overflow-hidden relative border-r-2 border-white;
		}

		img {
			@apply max-w-fit;

			&.before {
				@apply row-[1/1] col-[1/1];
			}
		}

		input {
			@apply row-[1/1] col-[1/1] z-[1] h-0 self-center appearance-none;
		}
	}

	input[type='range'] {
		height: 100%;
		cursor: pointer;
		background: rgba(0, 0, 0, 0);
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		cursor: pointer;
	}
	input[type='range']::-webkit-slider-thumb {
		height: 25px;
		width: 25px;
		border-radius: 100%;
		background: rgba(0, 0, 0, 0);
		cursor: pointer;
		-webkit-appearance: none;
	}

	//OLD
	section {
		@apply flex flex-col justify-center items-center;
	}
</style>
