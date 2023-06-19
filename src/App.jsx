import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import Header from './components/layout/Header';
import MobileSidebar from './components/layout/MobileSidebar';
import Sidebar from './components/layout/Sidebar';
import router from './router';

function App() {


  return (
    <div>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
