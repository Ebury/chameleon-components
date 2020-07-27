# Chameleon Components

Chameleon components is Ebury's vue.js components library.
The library is in its initial phase, more components are added regularly.

You can check the current status of the library [here](https://docs.google.com/spreadsheets/d/101NhAtDJ_6YLybdmWnhTvfem9yCtCeHJK5LtCZcX6Rk/edit#gid=0).

Also, check out the latest version deployed in [Storybook](https://chameleon.ebury.now.sh/).

## Installation

Install @ebury/chameleon-components in your project with npm:

```sh
npm install @ebury/chameleon-components --save
```

## Usage

All of our components are exported by name from @ebury/chameleon-components, so you can import them with:

```js
import { ComponentName } from '@ebury/chameleon-components';
```

## Theming

The components can use a custom theme. There are four color palettes used by the CSS, two of them can be adjusted via
CSS variables, e.g. the default blue color is defined as `--ec-key-color-level-4` and can be configured via `--ec-theme-key-color-level-4`.

Checkout the list of possible variables in the [storybook colors story](https://chameleon.ebury.now.sh/?path=/story/css-colors-all).

A few examples of a theme can be found in the [src/styles/themes/](src/styles/themes/) folder.

## I18n

Some components, e.g. `ec-amount-input` or `ec-donut` require `Intl` API to format values properly or to detect
what is the decimal/grouping separator for a current locale. They both do that via [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
which might have issues in some browsers for not having all locales set up properly. See the issues we discovered in this [PR](https://github.com/Ebury/chameleon/pull/156#issuecomment-623705733).
If you need to support every single locale on the planet, we recommend to polyfill the Intl API using [intl](https://www.npmjs.com/package/intl) package
so it's consistent across all browsers.

```html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en|always"></script>
```

### CSS variables polyfill

If you support **IE11** browser, you have to include the [CSS vars ponyfill](https://jhildenbiddle.github.io/css-vars-ponyfill/#/) when using our components.
Follow their instructions how to [install it](https://jhildenbiddle.github.io/css-vars-ponyfill/#/?id=installation) an [used it](https://jhildenbiddle.github.io/css-vars-ponyfill/#/?id=usage).

### AbortController polyfill

`ec-smart-table` component uses `withAbortableFetch` HOC, which uses [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to
abort previous requests. If you support **IE11** browser, you have to include [AbortController polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) in your code.

## Contributing

For the development of @ebury/chameleon-components, we use storybook [Storybook](https://storybook.js.org/).
If you want to contribute to the library then you must do the following to set up your local environment:

### Storybook

1\. Clone chameleon-components repo

2\. Install all dependencies with:

```sh
npm install
```

3\. Run Storybook with:

```sh
npm start
```

That's it!
By now you should be up and running. You can check the existing components or create new ones.

### CSS

For chameleon components, we use ITCSS architecture with BEM naming, TailwindCSS for Utilities, and PostCSS as a postprocessor.
Please don't add any CSS styles without following the rules below.

#### Vue

The single-file Vue components should not use scoped styles as is not necessary since we follow BEM.

#### BEM

A methodology on how to name your classes
http://getbem.com/introduction/

```css
/* Block component */
.btn {}

/* Element that depends upon the block */
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {}
.btn--big {}
```

#### ITCSS

https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

Following the ITCSS the file CSS structure should look like

1. Settings -
Global CSS variables, e.g. color definitions and maximum widths.

2. Tools -
Mixins, functions etc.

3. Generic -
CSS resets, normalizecss and font-faces. No classes, IDs, or elements.

4. Elements -
Only base HTML elements like p, h1, h2, div etc.

5. Objects -
Layouts and grids.

6. Components -
Classes for specific UI components, most likely you want to add your classes in here.

7. Utilities -
Utility classes generated by TailwindCSS.

#### PurgeCSS

All utility classes are automatically purged if they are not used in any `*.vue` or `*.story.js` files. We are following the guide about [controlling the file size](https://tailwindcss.com/docs/controlling-file-size/) when using TailwindCSS.

### Vue app

If you would like to consume and test the behavior of your newly developed components in your local Vue app:

1\. You must create a symlink that will connect the two repos via the npm global folder. On chameleon-components folder run:

```sh
npm link
```

3\. On your Vue app folder run:

```sh
npm link @ebury/chameleon-components
```

4\. All components are exported by name so you can import them with:

```js
import { ComponentName } from '@ebury/chameleon-components';
```

### Testing

#### Unit tests

To run your tests:

```sh
npm run test
```

The test coverage is set to 100%, but if you think the test for a particular piece of code is not necessary, then mark the code with
`/* istanbul ignore */` flags and get prepared to defend it during the PR. This process gives us visibility that every exclusion has
been approved. For more information see the [istanbul docs](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md)

#### Visual regression tests

To run visual regression tests:

```sh
make cypress-integration
```

You can also just run `make cypress-install` and then `make cypress-run` as many times as you want.
It will skip the installation part before each run.

To run tests only for specific story, you can use `storyIdFilter`. The ID of the story can be found in the URL of the storybook, e.g.
"Icon / basic" story has ID `icon--basic`, "Layout / Container / with navigation" has ID `layout-container--with-navigation`.
`storyIdFilter` accepts any regex.

```json
// update in package.json
{
  "test:visual:all": "cypress run -e storyIdFilter=icon ..."
}
```

Visual regression tests run in headless Chrome and Firefox.

NOTE: Because of bugs in Cypress, visual regression tests cannot run All Specs mode. See https://github.com/cypress-io/cypress/issues/3090 for reference.

NOTE2: Because of another bugs in Cypress, visual regression tests can run only in headless mode. See https://github.com/cypress-io/cypress/issues/3324 for reference.

To configure visual regression tests for the story, you can use storybook parameters to do so:

```js
{
  visualRegressionTests: {
    enabled: true, // true by default, if set to false, it will skip the story.
    waitOn: '.search-results', // wait on this element to appear before taking snapshot (cy.get(waitOn)). defaults to #root
    snapshotElement: '.search-results', // take snapshot of this element only. defaults to entire viewport
    knobs: { // you can run the tests using custom knobs, if the story supports them.
      large: { Size: 64 }, // "large" is the name of test, it will be used in the name of the snapshot file. "Size" is the label of the knob, e.g. size: { default: number('Size', 48) }
      'type-error': { Type: 'error' },
    },
  },
}
```

### Linting

To lint and fix errors in files:

```sh
npm run lint
```

### Build

To build your Storybook:

```sh
npm run build-storybook
```

## References

### Vue.js

[Vue](https://vuejs.org/)

[Vue CLI](https://cli.vuejs.org/)

### Storybook

[Storybook](https://storybook.js.org/)

### Testing

[Jest](https://jestjs.io/)

[Cypress](https://www.cypress.io/)

### CSS

[SCSS](https://sass-lang.com/documentation/syntax)

[PostCSS](https://postcss.org/)

[TailwindCSS](https://tailwindcss.com/)

[PurgeCSS](https://purgecss.com/plugins/postcss.html)

[CSS vars ponyfill](https://jhildenbiddle.github.io/css-vars-ponyfill/#/)

[Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/)
