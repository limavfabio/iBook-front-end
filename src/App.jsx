import { RouterProvider } from 'react-router-dom';

import router from './router';
import Header from './components/layout/Header';

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
