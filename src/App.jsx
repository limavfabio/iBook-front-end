import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import Header from './components/layout/Header';
import MobileSidebar from './components/layout/MobileSidebar';
import Sidebar from './components/layout/Sidebar';
import router from './router';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="container flex mx-auto ">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
