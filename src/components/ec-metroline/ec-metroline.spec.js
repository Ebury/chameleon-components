import { mount, createLocalVue } from '@vue/test-utils';
import EcMetroline from './ec-metroline.vue';
import EcMetrolineItem from '../ec-metroline-item';
import { withMockedConsole } from '../../../tests/utils/console';

function mountMetrolineAsTemplate(template, wrapperComponentOpts) {
  const localVue = createLocalVue();

  const Component = localVue.extend({
    components: { EcMetroline, EcMetrolineItem },
    template,
    ...wrapperComponentOpts,
  });

  return mount(Component, {
    localVue,
  });
}

const metrolineWithItemsTemplate = `
<ec-metroline>
  <ec-metroline-item
    :id="1"
  >
    <template #heading>
      <span>Item 1 Heading</span>
    </template>

    <template #sub-heading>
      <span>Item 1 Sub-heading</span>
    </template>

    <template #header-cta="{ goTo }">
      <button
        @click="goTo"
        data-test="header-cta-button">
        Edit
      </button>
    </template>

    <template #header-cta-complete>
      <button
        data-test="header-cta-completed-button">
        Download
      </button>
    </template>

    <template #main="{ status }">
      <p>Item 1 Main Content</p>
    </template>

    <template #footer-cta="{ goToNext }">
      <button
        @click="goToNext"
        data-test="footer-cta-button"
      >
        Continue
      </button>
    </template>
  </ec-metroline-item>

  <ec-metroline-item
    :id="2"
  >
    <template #heading>
      <span>Item 2 Heading</span>
    </template>

    <template #sub-heading>
      <span>Item 2 Sub-heading</span>
    </template>

    <template #header-cta="{ goTo }">
      <button
        @click="goTo"
        data-test="header-cta-button"
      >
        Edit
      </button>
      <p>Item 2 Main Content</p>
    </template>

    <template #main="{ status }">
    </template>

    <template #footer-cta="{ goToNext }">
      <button
        @click="goToNext"
        data-test="footer-cta-button"
      >
          Continue
      </button>
    </template>
  </ec-metroline-item>
</ec-metroline>
`;

describe('EcMetroline', () => {
  it('should render a metroline with items', async () => {
    const wrapper = await mountMetrolineAsTemplate(metrolineWithItemsTemplate);

    expect(wrapper.element).toMatchSnapshot();
  });

  describe(':props', () => {
    it('should render the metroline badgeText', async () => {
      const wrapper = await mountMetrolineAsTemplate(
        `<ec-metroline>
          <ec-metroline-item :id="1" badgeText="IV">
            <template #heading>
              <span>Item 1 Heading</span>
            </template>

            <template #main="{ status }">
              <p>Item 1 Main Content</p>
            </template>
          </ec-metroline-item>
        </ec-metroline>`,
      );

      expect(wrapper.element).toMatchSnapshot();
    });

    it('should throw an error if we don\'t pass an id', () => {
      withMockedConsole((errorSpy) => {
        mountMetrolineAsTemplate(
          `<ec-metroline>
            <ec-metroline-item>
              <template #heading>
                <span>Item 1 Heading</span>
              </template>
            </ec-metroline-item>
          </ec-metroline>`,
        );

        expect(errorSpy.mock.calls[0][0]).toContain('Missing required prop: "id"');
        expect(errorSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('@events', () => {
    it('should emit a "change" event when we go to next item', async () => {
      const onChange = jest.fn();
      const wrapper = await mountMetrolineAsTemplate(`
      <ec-metroline @change="onChange">
        <ec-metroline-item
          v-for="index in 2"
          :key="index"
          :id="index">
          <template #heading>
            <span>Heading</span>
          </template>

          <template #footer-cta="{ goToNext }">
            <button
              data-test="footer-cta-button"
              @click="goToNext"
            >
              Continue
            </button>
          </template>
        </ec-metroline-item>
      </ec-metroline>`,
      {
        methods: {
          onChange,
        },
      });

      wrapper
        .findByDataTest('ec-metroline-item--1')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick();

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should emit a "complete" event when  the metroline is complete', async () => {
      const onComplete = jest.fn();
      const wrapper = await mountMetrolineAsTemplate(`
      <ec-metroline @complete="onComplete">
        <ec-metroline-item :id="1">
          <template #heading>
            <span>Heading</span>
          </template>

          <template #main="{ status }">
            <p>Main Content</p>
          </template>

          <template #footer-cta="{ goToNext }">
            <button
              data-test="footer-cta-button"
              @click="goToNext"
            >
              Continue
            </button>
          </template>
        </ec-metroline-item>
      </ec-metroline>`,
      {
        methods: {
          onComplete,
        },
      });

      wrapper
        .findByDataTest('ec-metroline-item--1')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick();

      expect(onComplete).toHaveBeenCalledTimes(1);
    });
  });

  describe('order', () => {
    it('should have the correct next item order if we show, hide and show again a metro item', async () => {
      const wrapper = await mountMetrolineAsTemplate(
        `<ec-metroline>
          <ec-metroline-item :id="1" >
            <template #heading>
              <span>First</span>
            </template>

            <template #footer-cta="{ goToNext }">
              <button
                data-test="footer-cta-button"
                @click="goToNext"
              >
                Continue
              </button>
            </template>
          </ec-metroline-item>

          <ec-metroline-item v-if="isVisible" :id="2" >
            <template #heading>
              <span>Second</span>
            </template>

            <template #footer-cta="{ goToNext }">
              <button
                data-test="footer-cta-button"
                @click="goToNext"
                >
                  Continue
                </button>
            </template>
          </ec-metroline-item>

          <ec-metroline-item :id="3" >
            <template #heading>
              <span>Third</span>
            </template>

            <template #footer-cta="{ goToNext }">
              <button
                data-test="footer-cta-button"
                @click="goToNext"
              >
                Continue
              </button>
            </template>
          </ec-metroline-item>
        </ec-metroline>`,
        {
          data() {
            return { isVisible: true };
          },
        },
      );
      await wrapper.setData({ isVisible: false });
      await wrapper.setData({ isVisible: true });

      // Item 1: active, Item 2: not active, Item 3: not active
      expect(wrapper.element).toMatchSnapshot();

      wrapper
        .findByDataTest('ec-metroline-item--1')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick;

      expect(wrapper.element).toMatchSnapshot();

      wrapper
        .findByDataTest('ec-metroline-item--2')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick;

      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe('permissions', () => {
    it('should not go to next if we click continue on a completed item', async () => {
      const wrapper = await mountMetrolineAsTemplate(metrolineWithItemsTemplate);

      wrapper
        .findByDataTest('ec-metroline-item--1')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick();
      expect(wrapper.element).toMatchSnapshot();

      // Click continue on the first item again. Nothing should happen this time.
      wrapper
        .findByDataTest('ec-metroline-item--1')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick();
      expect(wrapper.element).toMatchSnapshot();
    });

    it('should be able to go back to a previous item if metroline is not complete', async () => {
      const wrapper = await mountMetrolineAsTemplate(metrolineWithItemsTemplate);
      expect(wrapper.element).toMatchSnapshot();

      wrapper
        .findByDataTest('ec-metroline-item--1')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick();
      expect(wrapper.element).toMatchSnapshot();

      wrapper
        .findByDataTest('ec-metroline-item--1')
        .findByDataTest('header-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick();
      expect(wrapper.element).toMatchSnapshot();
    });

    it('should not be able to go back to a previous item if metroline is complete and should show the header-cta-complete instead', async () => {
      const wrapper = await mountMetrolineAsTemplate(metrolineWithItemsTemplate);

      wrapper
        .findByDataTest('ec-metroline-item--1')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick();

      expect(wrapper.findByDataTest('ec-metroline-item--1').findByDataTest('header-cta-button').exists()).toBe(true);

      wrapper
        .findByDataTest('ec-metroline-item--2')
        .findByDataTest('footer-cta-button')
        .trigger('click');

      await wrapper.vm.$nextTick();

      expect(wrapper.findByDataTest('ec-metroline-item--1').findByDataTest('header-cta-button').exists()).toBe(false);
      expect(wrapper.findByDataTest('ec-metroline-item--1').findByDataTest('header-cta-completed-button').exists()).toBe(true);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
