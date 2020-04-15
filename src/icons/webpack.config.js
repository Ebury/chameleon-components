const path = require('path');
const fs = require('fs');
const SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');

class CurrencyFlagsManifestPlugin {
  constructor(opts) {
    this.opts = opts;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('CurrencyFlagsManifestPlugin', (compilation) => {
      compilation.hooks.afterOptimizeChunkModules.tap('CurrencyFlagsManifestPlugin', (chunks) => {
        const flags = [];
        for (const chunk of chunks) {
          for (const chunkModule of chunk.modulesIterable) {
            if (chunkModule.resource && chunkModule.resource.includes('/icons/currency/')) {
              const match = chunkModule.resource.match(/\/icons\/currency\/(?<currency>.+).svg$/i);
              if (match) {
                const currencyName = match.groups.currency;
                if (currencyName !== 'no-flag') {
                  flags.push(currencyName.toUpperCase());
                }
              }
            }
          }
        }
        fs.writeFileSync(
          this.opts.manifestPath,
          `export default ${JSON.stringify(flags.sort(), null, 2)};`,
        );
      });
    });
  }
}

module.exports = {
  context: path.resolve(__dirname, '..'),
  output: {
    path: path.resolve(__dirname, '../assets'),
  },
  entry: {
    'svg-sprites': ['./icons/build.js'],
  },
  module: {
    rules: [
      {
        test: /\.(svg)(\?.*)?$/,
        include: [
          /\/icons\/(rounded|simple)\//,
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              runtimeCompat: true,
              symbolId: symbolIdGenerator,
              spriteFilename: spriteFilenameGenerator,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeAttrs: { attrs: '(fill)' } },
              ],
            },
          },
        ],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        include: [
          /\/icons\/(currency|country)\//,
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              runtimeCompat: true,
              symbolId: symbolIdGenerator,
              spriteFilename: spriteFilenameGenerator,
            },
          },
          {
            loader: 'svgo-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new SvgSpriteLoaderPlugin({ plainSprite: true }),
    new CurrencyFlagsManifestPlugin({ manifestPath: path.resolve(__dirname, 'currency-flags.js') }),
  ],
};

function getIconDirectoryName(iconPath) {
  return path.dirname(iconPath).split(path.sep).pop().toLowerCase();
}

function getIconFileName(iconPath) {
  return path.basename(iconPath.toLowerCase(), '.svg').replace(/\s/g, '-');
}

function symbolIdGenerator(filePath) {
  return [
    'ec', // icon prefix
    getIconDirectoryName(filePath),
    getIconFileName(filePath),
  ].join('-');
}

function spriteFilenameGenerator(svgPath) {
  if (svgPath.includes('/icons/rounded/')) {
    return 'img/rounded-icons.svg';
  }
  if (svgPath.includes('/icons/simple/')) {
    return 'img/simple-icons.svg';
  }
  if (svgPath.includes('/icons/currency/')) {
    return 'img/currency-flags.svg';
  }
  if (svgPath.includes('/icons/country/')) {
    return 'img/country-flags.svg';
  }

  throw new Error(`Unsupported icon sprite for path ${svgPath}.`);
}
