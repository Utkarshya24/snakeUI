import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript'; // Add this import

export default {
  input: './index.ts',  // Entry point for your components
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),  // Externalize peer dependencies (React, ReactDOM)
    postcss({
      extract: true,  // Extract the CSS from JS files
      minimize: true,  // Minify the CSS
    }),
    typescript(),  // Add the TypeScript plugin here
    terser(),  // Minify the final output
  ],
  external: ['react', 'react-dom'],  // Don't bundle React and React DOM
};
