
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';
import EcPanel from './ec-panel.vue';

storiesOf('Panel', module)
  .add('basic', () => ({
    components: { EcPanel },
    props: {
      showFromProps: {
        default: boolean('Show Panel', true),
      },
      isContentOverflowing: {
        default: boolean('Overflow content', true),
      },
      isHeaderEnabled: {
        default: boolean('Show Header', true),
      },
      isFooterEnabled: {
        default: boolean('Show Footer', true),
      },
    },
    watch: {
      showFromProps: {
        immediate: true,
        handler(newValue) {
          this.show = newValue;
        },
      },
    },
    data() {
      return {
        show: true,
        isBackEnabled: true,
      };
    },
    methods: {
      clickBackButton() {
        action('Back button clicked')();
      },
    },
    template: `
      <div class="tw-bg-gray-7 tw-min-h-screen">
        <div class="tw-max-w-screen-lg tw-my-0 tw-mx-auto tw-bg-light ec-panel-container tw-p-24">
          <h1 class="tw-m-24">Panel story</h1>

          <div v-for="i in 12" class="tw-m-24">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis obcaecati optio magnam, porro inventore? Suscipit sit atque a! Ullam provident quidem recusandae, itaque error labore porro inventore? Suscipit sit atque a! Ullam provident quidem recusandae, itaque error labore</div>

          <ec-panel v-model="show" @back="clickBackButton()">
            <template v-if="isHeaderEnabled" #header>
              <h3 class="tw-mb-24">Header</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </template>

            <template #main>
              <h3>Main</h3>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis obcaecati optio magnam, porro inventore? Suscipit sit atque a! Ullam provident quidem recusandae</p>

              <div v-if="isContentOverflowing">
                <p v-for="i in 10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis obcaecati optio magnam, porro inventore? Suscipit sit atque a! Ullam provident quidem recusandae</p>
              </div>

              <div class="tw-mt-36 tw-text-center">
                <a href="#" class="ec-btn ec-btn--primary ec-btn--rounded ec-btn--md">Lorem, ipsum</a>
              </div>
            </template>

            <template v-if="isFooterEnabled" #footer>
              <h3>Footer</h3>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div class="tw-mt-36 tw-text-center">
                <a href="#" class="ec-btn ec-btn--primary ec-btn--rounded ec-btn--md">Lorem, ipsum</a>
              </div>
            </template>
          </ec-panel>
        </div>
      </div>
    `,
  }));
