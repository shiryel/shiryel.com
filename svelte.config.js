import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    // Static adapter provider >w<
    adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
