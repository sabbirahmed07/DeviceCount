import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './Button';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props = {}) => {
	const component = shallow(<CustomButton {...props} />);

	return component;
};

describe('Test The Share Button', () => {
	let component;
	beforeEach(() => {
		const expectedProps = {
			title: 'Test Title',
			onClick: () => {},
			fullWidth: true,
			className: 'String',
		};
		component = setUp(expectedProps);
	});

	it('should render the shared button', async () => {
		const wrapper = await findByTestAtrr(component, 'sharedButton');
		expect(wrapper.length).toBe(1);
	});
});
