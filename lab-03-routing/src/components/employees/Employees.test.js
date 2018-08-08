import React from 'react';
import Employees from './Employees';
import { shallow, mount } from 'enzyme';

it('should instantiate the Employee Table', () => {
  const employee = {
    username: 'fflintstone',
    email: 'fred.flintstone@slatequarry.com',
    firstName: 'Fred',
    lastName: 'Flintstone',
    admin: true,
  };

  const component = shallow(<EmployeeRow employee={employee} />);

  expect(component).toContainReact(<td>Flintstone</td>);
  expect(component).toContainReact(<td>fflintstone</td>);
  expect(component).toContainReact(<td>Yes</td>);
});

it('should instantiate the Employee Component', () => {
  const component = shallow(<Employees />);

  expect(component).toHaveLength(1);
});

it('should contain a correct employee', () => {
  const component = mount(<Employees />);

  expect(component).toIncludeText('admin@mixtape.com');
});
