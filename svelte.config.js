import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import Inspector from '@jhubbardsf/vite-plugin-svelte-inspector';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [Inspector({ enabled: true })],
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
