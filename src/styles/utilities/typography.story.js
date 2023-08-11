import { fonts as fontsStory } from '../generic/fonts.story.jsx';

export default {
  title: 'CSS/Typography',
};

export const basic = () => ({
  data() {
    return {
      types: [
        'tw-h1', 'tw-h2', 'tw-h3', 'tw-h4', 'tw-h5', 'tw-h6',
        'tw-body-text', 'tw-body-strong', 'tw-body-condensed',
        'tw-mini-header', 'tw-table-header',
        'tw-small-text', 'tw-small-strong', 'tw-caption-text',
        'tw-input-label', 'tw-btn-text', 'tw-flags-text',
        'tw-help-text',
      ],
    };
  },
  template: `
    <div>
      <p v-for="type of types"
        :key="type"
        :class="'tw-px-24 ' + type">{{ type.replace('tw-', '') }} - Lorem ipsum dolor sit amet, consectetur adipiscing <a href="#">elit</a>. Donec sodales felis nec libero vehicula, sit amet gravida dolor cursus</p>
    </div>
  `,
});

basic.parameters = {
  a11y: { disable: true },
  controls: { disable: true },
  actions: { disable: true },
};

// There are some cases where storyName is ignored, to solve it we need to
// export stories from other files as consts instead of exporting them directly
// See this for more info: https://github.com/storybookjs/storybook/pull/22689
export const fonts = fontsStory;
