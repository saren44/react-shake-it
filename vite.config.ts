import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/ShakeIt/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'ReactShakeIt',
      formats: ['es', 'umd'],
      fileName: (format) => `react-shake-it.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))