import { Link } from 'react-router-dom';
import MainHome from '../components/home/MainHome';

function Home() {
  return (
    <div className="flex gap-5">
      <div className='flex-none'>
        <h1>Home</h1>
        <p>This is the home page</p>
        <Link to="/about">Link to the about page</Link>
      </div>
      <div className=' w-3/4 mx-auto'>
       <MainHome />
      </div>
    </div>
  );
}

export default Home;
