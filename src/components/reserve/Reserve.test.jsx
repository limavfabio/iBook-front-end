import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, useLocation } from 'react-router-dom';
import store from '../../redux/store';
import Reserve from './Reserve';
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn(),
  }));
describe('Main Home', () => {
  it('expects to render a snapshot of the Home component', () => {
    const mockLocation = {
        state: { data: 1 },
      };
      useLocation.mockReturnValue(mockLocation);
  
    const episodeTest = render(
      <Provider store={store}>
        <BrowserRouter>
          <Reserve/>
        </BrowserRouter>
      </Provider>,
    );
    expect(episodeTest).toMatchSnapshot();
  });
});