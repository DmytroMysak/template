// eslint-disable-next-line import/no-extraneous-dependencies
import * as esbuild from 'esbuild';

await Promise.all([
  esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outdir: 'dist/esm',
    platform: 'node',
    tsconfig: 'tsconfig.esm.json',
    format: 'esm',
  }),
  esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outdir: 'dist/cjs',
    platform: 'node',
    tsconfig: 'tsconfig.cjs.json',
    format: 'cjs',
  }),
]);
