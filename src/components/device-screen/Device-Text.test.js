import React from 'react';
import { shallow } from 'enzyme';
import DeviceText from './device-text';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props = {}) => {
	const component = shallow(<DeviceText {...props} />);

	return component;
};

describe('Device Text Component', () => {
	describe('User Number Props', () => {
		let component;
		beforeEach(() => {
			const props = {
				userNumber: 4,
			};

			component = setUp(props);
		});

		it('should render a device text', async () => {
			const wrapper = await findByTestAtrr(component, 'deviceTextComponent');
			expect(wrapper.length).toBe(1);
		});
	});

	describe('User Number No Props', () => {
		let component;
		beforeEach(() => {
			component = setUp();
		});

		it('should render without device text', async () => {
			const wrapper = await findByTestAtrr(component, 'deviceTextComponent');
			expect(wrapper.length).toBe(1);
		});
	});
});
