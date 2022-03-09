/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    hot: !process.env.VITEST,
    preprocess: sveltePreprocess()
  })],
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
