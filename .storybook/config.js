/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator, addParameters } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { create as createTheme } from '@storybook/theming';
import { inlineSvgSprites } from '../src/icons/browser';
import '../src/scss/main.scss';

addDecorator(withKnobs);

addDecorator(withA11y);

addParameters({
  backgrounds: [
    { name: 'light', value: '#fff', default: true },
    { name: 'dark', value: 'rgb(46,54,56)' },
    { name: 'light blue ebury', value: 'rgb(0,190,240)' },
    { name: 'dark blue ebury', value: 'rgb(0,80,102)' },
  ],
});

addParameters({ viewport: INITIAL_VIEWPORTS });

addParameters({
  options: {
    theme: createTheme({
      base: 'light',
      brandTitle: 'Chameleon components',
      brandUrl: 'https://company-160717.frontify.com/document/271391',
      brandImage: '/ebury-chameleon-logo.png',
    }),
  },
});

const loadStories = () => {
  const req = require.context(
    '../src/',
    true,
    /\.story\.js$/,
  );

  req.keys().forEach(fileName => req(fileName));
};

configure(() => {
  inlineSvgSprites(['rounded', 'simple'], '/img');
  loadStories();
}, module);
