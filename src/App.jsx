import { RouterProvider } from 'react-router-dom';
import { Provider }  from 'react-redux'
import store from './redux/store'

import router from './router';

function App() {
  return (
    <div className="text-stone-800">
      <div>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </div>
  );
}

export default App;
