import Vue from 'vue';
import { mount } from '@vue/test-utils';
import EcAlert from './ec-alert.vue';
import { withMockedConsole } from '../../../tests/utils/console';

describe('EcAlert', () => {
  function mountAlert(props, mountOpts) {
    return mount(EcAlert, {
      propsData: {
        title: 'Title example',
        type: 'info',
        ...props,
      },
      ...mountOpts,
    });
  }

  it('should throw if no props were given', () => {
    withMockedConsole((errorSpy) => {
      mount(EcAlert);
      expect(errorSpy).toHaveBeenCalledTimes(2);
      expect(errorSpy.mock.calls[0][0]).toContain('Missing required prop: "type"');
      expect(errorSpy.mock.calls[1][0]).toContain('Missing required prop: "title"');
    });
  });

  it('should display only with a title given and the type', () => {
    const wrapper = mountAlert({ title: 'Random Title', type: 'info' });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should display with a subtitle given', () => {
    const wrapper = mountAlert({ subtitle: 'Subtitle example' });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should display with a button with the text given in the buttonText', () => {
    const wrapper = mountAlert({ buttonText: 'Button text' });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should use the given type for the alert type and for the button too', () => {
    const wrapper = mountAlert({ type: 'error', buttonText: 'Warning button' });

    expect(wrapper.element).toMatchSnapshot();
  });

  it.each(['error', 'info', 'success', 'warning'])('should use the type "%s"', (type) => {
    const wrapper = mountAlert({ type });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should throw an error if type is not valid', () => {
    withMockedConsole((errorSpy) => {
      mountAlert({ type: 'invalid-value' });
      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy.mock.calls[0][0]).toContain('Invalid prop: custom validator check failed for prop "type"');
    });
  });

  it('should render the dismiss icon when is given the prop dismissable', () => {
    const wrapper = mountAlert({ dismissable: true });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should dismiss the alert when user clicks on the dismiss icon ', () => {
    const wrapper = mountAlert({ dismissable: true });

    expect(wrapper.find('.ec-alert__dismiss-icon').exists()).toBe(true);
    wrapper.find('.ec-alert__dismiss-icon').trigger('click');
  });

  it('should emit the event when user clicks on the button', () => {
    const wrapper = mountAlert({ buttonText: 'Click here' });

    wrapper.find('.ec-alert__button').trigger('click');
    expect(wrapper.emitted('action').length).toBe(1);
  });

  it('should dismiss or show the alert when we change the v-model', () => {
    const wrapper = mount(Vue.extend({
      components: { EcAlert },
      data() {
        return { isOpen: true };
      },
      template: `
        <ec-alert v-model="isOpen" type="info" title="Custom random" :dismissable="true" />
      `,
    }));

    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.isVisible()).toBe(true);
    wrapper.find('.ec-alert__dismiss-icon').trigger('click');
    expect(wrapper.isVisible()).toBe(false);
    expect(wrapper.vm.isOpen).toBe(false);
  });
  it('should render with the slot given', () => {
    const wrapper = mount(EcAlert, {
      propsData: {
        title: 'Title example',
        subtitle: 'Subtitle example',
        type: 'info',
      },
      scopedSlots: {
        default: '<div slot-scope="{ title, subtitle }">Custom: {{ title }} - {{ subtitle }}</div>',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
