import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgr from '@svgr/rollup'
import glsl from 'vite-plugin-glsl'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import path from 'path'

export default defineConfig({
  base: '/',
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    exclude: ['@rollup/browser'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      libs: path.resolve(__dirname, './libs'),
    },
  },
  plugins: [
    wasm(),
    topLevelAwait(),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    viteTsconfigPaths(),
    svgr(),
    glsl(),
  ],
})
