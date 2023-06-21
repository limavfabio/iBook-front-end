import { useLogout } from '../../lib/auth';
import SidebarLink from './SidebarLink'

function MobileSidebar() {
  const logout = useLogout();

  return (
    <div className="fixed flex h-screen w-3/4 flex-col border border-gray-100 z-10 bg-white sm:w-1/2 md:hidden">
      <h2 className="mt-8 self-center text-xl">VenomPrecision</h2>
      <ul className="mt-16">

        <SidebarLink text='MAIN PAGE' path='/' />
        <SidebarLink text='MY RESERVATIONS' path='/reservations' />
        <SidebarLink text='ALL PRODUCTS' path='/products' />
        <SidebarLink text='ADD NEW PRODUCT' path='/products/new' />

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

export default MobileSidebar;
