import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import router from './router';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import MobileSidebar from './components/layout/MobileSidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div className='text-stone-800'>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex container mx-auto">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
