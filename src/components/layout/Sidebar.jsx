import { Link } from 'react-router-dom';
import { useLogout } from '../../lib/auth';

function Sidebar() {
  const logout = useLogout();

  return (
    <div className=" hidden h-screen w-3/4 flex-col border border-gray-100 bg-white sm:w-1/2 md:static md:flex lg:w-1/4">
      <h2 className="mt-8 self-center text-xl">Vespa</h2>
      <ul className="mt-16">
        <li className="ml-2 bg-[#97BF0F] py-2 pl-3 font-bold text-white">
          MODELS
        </li>
        <Link to='/reservations'>
          <li className="ml-2 py-2 pl-3 font-bold text-slate-700">MY RESERVATIONS</li>
        </Link>
        <Link to="/products">
          <li className="ml-2 py-2 pl-3 font-bold text-slate-700">ALL PRODUCTS</li>
        </Link>
        <button type="button" className="ml-2 py-2 pl-3 font-bold text-slate-700 hover:cursor-pointer" onClick={logout}>LOGOUT</button>
      </ul>
      <ul className="mt-auto flex">
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
      </ul>
    </div>
  );
}

export default Sidebar;
