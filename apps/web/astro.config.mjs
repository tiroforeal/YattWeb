// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  adapter: node({ mode: "standalone" }),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sanity({
    projectId: 'c4p05qfe',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2026-09-26',
    logClientRequests: 'dev',
    studioBasePath: '/admin'
  }), react()]
});