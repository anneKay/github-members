import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import MemberDetails from '../components/MemberDetails';

const mockStore = configureStore([]);
describe('My Connected React-Redux Component', () => {
  let store, component;
  const location = {
    pathname: "",
  }
  beforeEach(() => {
    store = mockStore({
      data: 'sample data',
      error: '',
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <MemberDetails location={location} />
      </Provider>
    );
  })
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});