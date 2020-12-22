import path from 'path';
import autoprefixer from 'autoprefixer';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import { getPackages } from '@lerna/project';
import filterPackages from '@lerna/filter-packages';
import batchPackages from '@lerna/batch-packages';

async function getSortedPackages() {
  const packages = await getPackages(__dirname);

  const filtered = filterPackages(
    packages,
    '@digitransit-component/*',
    '@digitransit-component/digitransit-component',
    false,
  );
  return batchPackages(filtered).reduce((arr, batch) => arr.concat(batch), []);
}

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default async () => {
  const config = [];
  const packages = await getSortedPackages();
  packages.forEach(pkg => {
    /* Absolute path to package directory */
    const basePath = path.relative(__dirname, pkg.location);
    /* Absolute path to input file */
    const input = path.join(__dirname, basePath, 'src/index.js');
    const esmConfig = {
      input,
      output: [
        {
          dir: path.join(__dirname, basePath, 'lib'),
          format: 'esm',
          sourcemap: true,
          globals,
        },
      ],
      external: Object.keys(globals),
      plugins: [
        peerDepsExternal({
          packageJsonPath: path.join(__dirname, basePath, 'package.json'),
        }),
        nodeResolve(),
        postcss({
          extract: false,
          plugins: [autoprefixer()],
          modules: true,
          use: ['sass'],
        }),
        babel({
          runtimeHelpers: true,
          configFile: './digitransit-component/packages/babel.config.js',
          exclude: /node_modules/,
        }),
        commonjs({
          ignoreGlobal: true,
          sourceMap: true,
          namedExports: {
            './node_modules/react-is/index.js': ['isValidElementType'],
          },
        }),
        json(),
      ],
    };
    if (process.env.NODE_ENV === 'production') {
      esmConfig.plugins.push(terser());
    }
    config.push(esmConfig);
  });
  return config;
};
