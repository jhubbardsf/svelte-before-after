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
		<img class="before" src="before.png" alt="before" width="500" height="500" />

		<div class="after-container" style="width: {slider}%;">
			<img class="after" src="after.png" alt="after" width="500" height="500" />
		</div>

		<input bind:value={slider} type="range" class="my-slider" min="0" step="1" />
		<div class="scroll-thumb" style="left: {slider}%;">
			<div class="arrows" />
		</div>
	</div>
</section>

<style lang="scss">
	.slider-images {
		@apply grid row-[1/1] col-[1/1] overflow-hidden relative;

		div {
			@apply row-[1/1] col-[1/1] relative border-white;
		}

		.after-container {
			@apply overflow-hidden;
		}

		img {
			@apply max-w-fit;

			&.before {
				@apply row-[1/1] col-[1/1];
			}
		}

		input {
			@apply row-[1/1] col-[1/1] z-[2] appearance-none h-full bg-transparent cursor-pointer;

			&::-webkit-slider-thumb {
				@apply appearance-none w-1;
			}
		}

		.scroll-thumb {
			--diameter: 50px; // 40px
			--width: 4px; // 4px

			border-width: var(--width);
			@apply h-[var(--diameter)] w-[var(--diameter)] rounded-full z-[1] self-center -translate-x-1/2 flex items-center justify-center;
			&:before,
			&:after {
				@apply h-[9999px] w-[var(--width)] left-1/2 -translate-x-1/2 absolute bg-white block content-[''];
			}

			&:before {
				@apply bottom-full;
			}
			&:after {
				@apply top-full;
			}

			.arrows {
				@apply grid grid-cols-2 gap-3;
				&::before,
				&::after {
					@apply bg-white block w-3 h-2 content-[''];
					clip-path: polygon(50% 0, 100% 100%, 0% 100%);
				}

				&::before {
					@apply -rotate-90;
				}

				&::after {
					@apply rotate-90;
				}
			}
		}
	}

	//OLD
	section {
		@apply flex flex-col justify-center items-center;
	}
</style>
