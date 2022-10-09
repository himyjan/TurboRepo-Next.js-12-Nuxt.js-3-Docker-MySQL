import { defineConfig } from 'astro/config';
import angular from '@analogjs/astro-angular';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	// Enable many frameworks to support all different kinds of components.
	integrations: [angular(), preact(), react(), svelte(), vue(), solid()],
});
