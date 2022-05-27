import React from 'react';
import { shallow } from 'enzyme';
import Device from './Device';
import { findByTestAtrr } from '../../Utils';

const setUp = (props = {}) => {
	const component = shallow(<Device {...props} />);

	return component;
};

describe('Device Page', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it('Should Run Without Errors', async () => {
		const wrapper = await findByTestAtrr(component, 'deviceScreenComponent');
		expect(wrapper.length).toBe(1);
	});
});
