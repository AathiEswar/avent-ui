import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'; 

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationDir: './dist',
          }
        }
      }),
      babel({
        exclude: ['node_modules/**' , '**/node_modules/**'],
        babelHelpers: 'bundled',
      }),
    ],
    external: ['react', 'react-dom' , 'framer-motion'],
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      unknownGlobalSideEffects: false,
    },
  },
  {
    input: 'src/styles/tailwind.css',
    output: [
      {
        file: 'dist/styles.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/styles.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extensions: [".css"],
        extract: "dist/styles.css",
        plugins: [
          tailwindcss,
          autoprefixer, 
        ],
      }),
    ],
  }
];