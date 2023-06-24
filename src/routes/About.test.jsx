import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import About from './About';

describe('Main Home', () => {
  it('expects to render a snapshot of the Home component', () => {
    const episodeTest = render(
      <Provider store={store}>
        <BrowserRouter>
          <About />
        </BrowserRouter>
      </Provider>,
    );
    expect(episodeTest).toMatchSnapshot();
  });
});
