import { useState } from 'react';

import MainHome from '../components/home/MainHome';
import Header from '../components/layout/Header';
import MobileSidebar from '../components/layout/MobileSidebar';
import Sidebar from '../components/layout/Sidebar';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}
        <div className="min-w-0">
          <div className="mx-5">
            <MainHome />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
