import React from 'react';
import { shallow } from 'enzyme';
import DeviceCircle from './device-circle';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props = {}) => {
	const component = shallow(<DeviceCircle {...props} />);

	return component;
};

describe('Device Circle Component', () => {
	describe('User Number Props', () => {
		let component;
		const props = {
			devices: [],
		};
		beforeEach(() => {
			component = setUp(props);
		});

		it('should render a device circle', async () => {
			const wrapper = await findByTestAtrr(component, 'deviceCircleComponent');
			expect(wrapper.length).toBe(1);
		});

		it('should render the exact user numbers', async () => {
			const wrapper = await findByTestAtrr(component, 'circleNumber');
			expect(wrapper.length).toBe(props.devices.length);
		});
	});

	describe('User Number No Props', () => {
		let component;
		beforeEach(() => {
			component = setUp();
		});

		it('should render without props of user', async () => {
			const wrapper = await findByTestAtrr(component, 'deviceCircleComponent');
			expect(wrapper.length).toBe(1);
		});

		it('should render without props of user numbers', async () => {
			const wrapper = await findByTestAtrr(component, 'circleNumber');
			expect(wrapper.length).toBe(0);
		});
	});
});
