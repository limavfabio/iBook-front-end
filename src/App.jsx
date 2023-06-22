import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';

import router from './router';

function App() {
  return (
    <div className="text-stone-800">
      <div>
        <Provider store={store}>
          <ToastContainer />
          <RouterProvider router={router} />
        </Provider>
      </div>
    </div>
  );
}

export default App;
