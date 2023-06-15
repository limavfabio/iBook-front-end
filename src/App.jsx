import { RouterProvider } from 'react-router-dom';

import router from './router';
import SideBar from './components/layout/SideBar';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
