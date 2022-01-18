import { mount, createLocalVue } from '@vue/test-utils';
import EcPhoneNumberInput from './ec-phone-number-input.vue';
import { withMockedConsole } from '../../../tests/utils/console';

jest.mock('svg-country-flags/png100px/gb.png', () => '/my-path/gb.png');
jest.mock('svg-country-flags/png100px/jm.png', () => '/my-path/jm.png');
jest.mock('svg-country-flags/png100px/es.png', () => '/my-path/es.png');

const countries = [
  { areaCode: '+44', text: 'United Kingdom', countryCode: 'GB' },
  { areaCode: '+1 658', text: 'Jamaica', countryCode: 'JM' },
  { areaCode: '+34', text: 'Spain', countryCode: 'ES' },
  { areaCode: '+204', text: 'New Country', countryCode: 'XX' },
  { areaCode: '+204', text: 'New Country', countryCode: null },
];

describe('EcPhoneNumberInput', () => {
  function mountPhoneNumberInput(props) {
    return mount(EcPhoneNumberInput, {
      propsData: {
        countries,
        value: {},
        ...props,
      },
    });
  }

  function mountPhoneNumberInputAsTemplate(template, props, wrapperComponentOpts, mountOpts) {
    const localVue = createLocalVue();

    const Component = localVue.extend({
      components: { EcPhoneNumberInput },
      template,
      ...wrapperComponentOpts,
    });

    return mount(Component, {
      localVue,
      propsData: { ...props },
      ...mountOpts,
    });
  }

  it('should render properly', () => {
    const wrapper = mountPhoneNumberInput();

    expect(wrapper.element).toMatchSnapshot();
  });

  describe(':props', () => {
    it('should render with a label', () => {
      const wrapper = mountPhoneNumberInput({ label: 'Phone number input label' });

      expect(wrapper.element).toMatchSnapshot();
    });

    it('should render with a note', () => {
      const wrapper = mountPhoneNumberInput({ note: 'Phone number input note' });

      expect(wrapper.element).toMatchSnapshot();
    });

    it('should render with a bottom note', () => {
      const wrapper = mountPhoneNumberInput({ bottomNote: 'Phone number input bottom note' });

      expect(wrapper.findByDataTest('ec-phone-number-input__bottom-note').element).toMatchSnapshot();
    });

    it('should render with a warning', () => {
      const wrapper = mountPhoneNumberInput({
        bottomNote: 'Phone number input bottom note',
        isWarning: true,
      });

      expect(wrapper.findByDataTest('ec-phone-number-input__bottom-note').element).toMatchSnapshot();
    });

    it('should render with a warning tooltip', () => {
      const warningTooltipMessage = 'Warning tooltip message';
      const wrapper = mountPhoneNumberInput({
        bottomNote: 'Phone number input bottom note',
        isWarning: true,
        warningTooltipMessage,
      });

      expect(wrapper.findByDataTest('ec-phone-number-input__bottom-note').element).toMatchSnapshot();
      expect(wrapper.findByDataTest('ec-phone-number-input__warning-tooltip').attributes('data-ec-tooltip-mock-content')).toBe(warningTooltipMessage);
    });

    it('should render with an error message', () => {
      const wrapper = mountPhoneNumberInput({
        bottomNote: 'Phone number input bottom note',
        errorMessage: 'Random error message',
      });

      expect(wrapper.findByDataTest('ec-phone-number-input__bottom-note').exists()).toBeFalsy();
      expect(wrapper.findByDataTest('ec-phone-number-input__error-text').exists()).toBeTruthy();
      expect(wrapper.element).toMatchSnapshot();
    });

    it('should render with an error tooltip', () => {
      const errorTooltipMessage = 'Error tooltip message';

      const wrapper = mountPhoneNumberInput({
        bottomNote: 'Phone number input bottom note',
        errorMessage: 'Random error message',
        errorTooltipMessage,
      });

      expect(wrapper.findByDataTest('ec-phone-number-input__bottom-note').element).toMatchSnapshot();
      expect(wrapper.findByDataTest('ec-phone-number-input__error-tooltip').attributes('data-ec-tooltip-mock-content')).toBe(errorTooltipMessage);
    });

    it('should render in a loading state', () => {
      const wrapper = mountPhoneNumberInput({ areCountriesLoading: true });

      expect(wrapper.findByDataTest('ec-popover-dropdown-search').element).toMatchSnapshot();
    });

    it('should render in a disabled state', () => {
      const wrapper = mountPhoneNumberInput({ isDisabled: true });

      expect(wrapper.element).toMatchSnapshot();
    });

    it('should render with a disabled tooltip message', () => {
      const disabledTooltipMessage = 'Disabled tooltip message';
      const wrapper = mountPhoneNumberInput({
        isDisabled: true,
        disabledTooltipMessage,
      });

      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.findByDataTest('ec-phone-number-input__input-group').attributes('data-ec-tooltip-mock-content')).toBe(disabledTooltipMessage);
    });

    it('should render with a sensitive class when isSensitive prop is set to true', () => {
      const wrapper = mountPhoneNumberInput({ isSensitive: true });

      expect(wrapper.element).toMatchSnapshot();
    });

    it('should render with a country placeholder', () => {
      const countryPlaceholder = '+44';
      const wrapper = mountPhoneNumberInput({ countryPlaceholder });

      expect(wrapper.findByDataTest('ec-phone-number-input__countries').attributes('placeholder')).toBe(countryPlaceholder);
    });

    it('should render with a number placeholder', () => {
      const phoneNumberPlaceholder = 'Phone Number';
      const wrapper = mountPhoneNumberInput({ phoneNumberPlaceholder });

      expect(wrapper.findByDataTest('ec-phone-number-input__number').attributes('placeholder')).toBe(phoneNumberPlaceholder);
    });

    it('should render with a search field', async () => {
      const wrapper = mountPhoneNumberInput({ isSearchEnabled: true });

      await wrapper.findByDataTest('ec-phone-number-input__countries').trigger('mousedown');

      expect(wrapper.findByDataTest('ec-dropdown-search__search-input').element).toMatchSnapshot();
    });

    it('should accept a custom search field text', async () => {
      const wrapper = mountPhoneNumberInput({
        isSearchEnabled: true,
        searchCountryPlaceholder: 'Search calling code',
      });

      await wrapper.findByDataTest('ec-phone-number-input__countries').trigger('mousedown');

      expect(wrapper.findByDataTest('ec-dropdown-search__search-input').element).toMatchSnapshot();
    });

    it('should accept a custom "no countries" search result text', async () => {
      const wrapper = mountPhoneNumberInput({
        isSearchEnabled: true,
        searchCountryPlaceholder: 'Search calling code',
        noCountriesText: 'No country found',
      });

      await wrapper.findByDataTest('ec-phone-number-input__countries').trigger('mousedown');
      await wrapper.findByDataTest('ec-dropdown-search__search-input').setValue('Norway');

      expect(wrapper.findByDataTest('ec-dropdown-search__item-list').element).toMatchSnapshot();
    });

    it.each([
      ['modal', false],
      ['tooltip', false],
      ['notification', false],
      ['level-1', false],
      ['level-2', false],
      ['level-3', false],
      ['random', true],
    ])('should validate if the level prop("%s") is on the allowed array of strings', (str, error) => {
      if (error) {
        withMockedConsole((errorSpy) => {
          mountPhoneNumberInput({ level: str });
          expect(errorSpy).toHaveBeenCalledTimes(3);
          // this is the test for the dropdown
          expect(errorSpy.mock.calls[0][0]).toContain('Invalid prop: custom validator check failed for prop "level"');
          // this is the test for the
          expect(errorSpy.mock.calls[1][0]).toContain('Invalid prop: custom validator check failed for prop "level"');
        });
      } else {
        const wrapper = mountPhoneNumberInput({ level: str });
        expect(wrapper.findByDataTest('ec-popover-dropdown-search').attributes('level')).toBe(str);
      }
    });
  });

  describe('@events', () => {
    it('should emit change events when an item is selected', async () => {
      const wrapper = mountPhoneNumberInput();

      await selectItem(wrapper, 1);
      expect(wrapper.emitted('change').length).toEqual(1);
      expect(wrapper.emitted('focus').length).toEqual(1);
      expect(wrapper.emitted('value-change').length).toEqual(1);
      expect(wrapper.emitted('country-change').length).toEqual(1);
      await selectItem(wrapper, 2);
      expect(wrapper.emitted('change').length).toEqual(2);
      expect(wrapper.emitted('focus').length).toEqual(2);
      expect(wrapper.emitted('value-change').length).toEqual(2);
      expect(wrapper.emitted('country-change').length).toEqual(2);
    });

    it('should emit value-change event when number is set', async () => {
      const wrapper = mountPhoneNumberInput();

      await wrapper.findByDataTest('ec-phone-number-input__number').setValue('11');
      await wrapper.findByDataTest('ec-phone-number-input__number').trigger('change');
      expect(wrapper.emitted('change').length).toEqual(1);
      expect(wrapper.emitted('phone-number-change').length).toEqual(1);
      expect(wrapper.emitted('value-change').length).toEqual(1);

      await wrapper.findByDataTest('ec-phone-number-input__number').setValue('111');
      await wrapper.findByDataTest('ec-phone-number-input__number').trigger('change');
      expect(wrapper.emitted('change').length).toEqual(2);
      expect(wrapper.emitted('phone-number-change').length).toEqual(2);
      expect(wrapper.emitted('value-change').length).toEqual(2);
    });
  });

  describe('v-model', () => {
    it('should use the v-model with the country and emit the changes', async () => {
      const wrapper = mountPhoneNumberInputAsTemplate(
        '<ec-phone-number-input :countries="countries" v-model="value" />',
        {},
        {
          data() {
            return {
              countries,
              value: {
                country: {},
                phoneNumber: '',
              },
            };
          },
        },
      );

      await selectItem(wrapper, 0);
      expect(wrapper.vm.value.country).toEqual(countries[1]);
      await selectItem(wrapper, 1);
      expect(wrapper.vm.value.country).toEqual(countries[3]);
    });

    it('should preselect the country item in the dropdown and the number in the input from the v-model', () => {
      const wrapper = mountPhoneNumberInputAsTemplate(
        '<ec-phone-number-input :countries="countries" v-model="value" />',
        {},
        {
          data() {
            return {
              countries,
              value: {
                country: countries[0],
                phoneNumber: '123456789',
              },
            };
          },
        },
      );
      expect(wrapper.findByDataTest('ec-phone-number-input__countries-selected-area-code').text()).toBe(countries[0].areaCode);
      expect(wrapper.findByDataTest('ec-phone-number-input__number').element.value).toBe('123456789');

      expect(wrapper.findByDataTest('ec-phone-number-input__countries-selected').element).toMatchSnapshot();
    });

    it('should preselect a country item from the v-model and do not show the image if does not exist', () => {
      const wrapper = mountPhoneNumberInputAsTemplate(
        '<ec-phone-number-input :countries="countries" v-model="value" />',
        {},
        {
          data() {
            return {
              countries,
              value: {
                country: countries[3],
                phoneNumber: '123456789',
              },
            };
          },
        },
      );
      expect(wrapper.findByDataTest('ec-phone-number-input__countries-selected-area-code').text()).toBe(countries[3].areaCode);
      expect(wrapper.findByDataTest('ec-phone-number-input__number').element.value).toBe('123456789');

      expect(wrapper.findByDataTest('ec-phone-number-input__countries-selected').element).toMatchSnapshot();
    });

    it('should preselect a country item from the v-model and do not show the image if country code is not set', () => {
      const wrapper = mountPhoneNumberInputAsTemplate(
        '<ec-phone-number-input :countries="countries" v-model="value" />',
        {},
        {
          data() {
            return {
              countries,
              value: {
                country: countries[4],
                phoneNumber: '123456789',
              },
            };
          },
        },
      );
      expect(wrapper.findByDataTest('ec-phone-number-input__countries-selected-area-code').text()).toBe(countries[4].areaCode);
      expect(wrapper.findByDataTest('ec-phone-number-input__number').element.value).toBe('123456789');

      expect(wrapper.findByDataTest('ec-phone-number-input__countries-selected').element).toMatchSnapshot();
    });

    it('should preselect the country item in the dropdown and the number in the input from the v-model AND mask them when "is-masked" prop is true', () => {
      const wrapper = mountPhoneNumberInputAsTemplate(
        '<ec-phone-number-input :is-masked="true" :countries="countries" v-model="value" />',
        {},
        {
          data() {
            return {
              countries,
              value: {
                country: countries[1],
                phoneNumber: '123456789',
              },
            };
          },
        },
      );
      expect(wrapper.findByDataTest('ec-phone-number-input__countries-selected-area-code').text()).toBe(countries[1].areaCode);
      expect(wrapper.findByDataTest('ec-phone-number-input__number').element.value).toBe('*******89');
    });

    it('should use the v-model with the phone number and emit the changes', async () => {
      const wrapper = mountPhoneNumberInputAsTemplate(
        '<ec-phone-number-input :countries="countries" v-model="value" />',
        {},
        {
          data() {
            return { countries, value: { phoneNumber: 0 } };
          },
        },
      );

      await wrapper.findByDataTest('ec-phone-number-input__number').setValue('11');
      expect(wrapper.vm.value.phoneNumber).toEqual('11');
    });
  });
});

async function selectItem(wrapper, index) {
  wrapper.findByDataTest('ec-phone-number-input__countries').trigger('mousedown');
  wrapper.findByDataTest('ec-phone-number-input__countries').trigger('focus');
  wrapper.findByDataTest(`ec-dropdown-search__item--${index}`).trigger('click');
  await wrapper.vm.$nextTick();
}
