import { Link, useLocation } from 'react-router-dom';
import { useLogout } from '../../lib/auth';

function Sidebar() {
  const logout = useLogout();
  const location = useLocation();

  return (
    <div className=" hidden h-screen min-w-max pr-5 w-3/4 flex-col border border-gray-100 bg-white sm:w-1/2 md:static md:flex lg:w-1/4">
      <h2 className="mt-8 self-center text-xl">VenomPrecision</h2>
      <ul className="mt-16">
        <Link to="/">
          <li
            className={`ml-2 py-2 pl-3 font-bold text-slate-700 ${
              location.pathname === '/' ? 'bg-lime-500' : ''
            }`}
          >
            MAIN PAGE
          </li>
        </Link>
        <Link to="/reservations">
          <li
            className={`ml-2 py-2 pl-3 font-bold text-slate-700 ${
              location.pathname === '/reservations' ? 'bg-lime-500' : ''
            }`}
          >
            MY RESERVATIONS
          </li>
        </Link>
        <Link to="/products">
          <li
            className={`ml-2 py-2 pl-3 font-bold text-slate-700 ${
              location.pathname === '/products' ? 'bg-lime-500' : ''
            }`}
          >
            ALL PRODUCTS
          </li>
        </Link>
        <button
          type="button"
          className="ml-2 py-2 pl-3 font-bold text-slate-700 hover:cursor-pointer"
          onClick={logout}
        >
          LOGOUT
        </button>
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
