import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'; 

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      exclude: ['node_modules/**' , '**/node_modules/**'],
      babelHelpers: 'bundled',
    }),
    postcss({
      extensions: [".css"],
      extract: "dist/styles.css",
      plugins: [
        tailwindcss,
        autoprefixer, 
      ],
    }),
  ],
  external: ['react', 'react-dom' , 'framer-motion'],
};