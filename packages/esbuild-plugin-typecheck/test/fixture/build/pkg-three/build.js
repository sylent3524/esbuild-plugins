#!/usr/bin/env node

const { typecheckPlugin } = require('../../../lib');
const { build } = require('esbuild');
const path = require('path');

build({
  absWorkingDir: __dirname,
  entryPoints: ['./three.ts'],
  bundle: true,
  format: 'esm',
  outdir: './dist',
  platform: 'node',
  plugins: [
    typecheckPlugin({
      buildMode: process.env.BUILD_MODE,
    }),
  ],
  watch: !!process.env.WATCH,
  write: false,
}).catch(() => process.exit(1));
