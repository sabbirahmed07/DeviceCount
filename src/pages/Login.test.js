import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { findByTestAtrr } from '../../Utils';

const setUp = (props = {}) => {
	const component = shallow(<Login {...props} />);

	return component;
};

describe('Login Page', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it('Should Run Without Errors', async () => {
		const wrapper = await findByTestAtrr(component, 'loginFormComponent');
		expect(wrapper.length).toBe(1);
	});
});
