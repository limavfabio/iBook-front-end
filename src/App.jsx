import { RouterProvider } from 'react-router-dom';

import router from './AppRouter';
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
