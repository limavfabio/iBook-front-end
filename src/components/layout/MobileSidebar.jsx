import { BiLogIn } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import { CgPlayListAdd } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { HiClipboardList } from 'react-icons/hi';
import { VscTasklist } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { useLogout } from '../../lib/auth';
import SidebarLink from './SidebarLink';

function MobileSidebar() {
  const logout = useLogout();
  const user = useSelector((state) => state.user);

  return (
    <div className="fixed flex h-screen flex-col border border-gray-100 z-10 bg-white md:hidden">

      <div className="flex mt-10 justify-center">
        <img className="w-40" src="/venom-precision-logo.png" alt="logo" />
      </div>

      <ul className="mt-10">

        <SidebarLink text="MAIN PAGE" path="/" icon={<HiClipboardList />} />

        {user.username === '' ? (
          // If NOT logged in ->
          null
        ) : (
          // if logged in ->
          <SidebarLink text="MY RESERVATIONS" path="/reservations" icon={<VscTasklist />} />
        )}

        <SidebarLink text="ALL PRODUCTS" path="/products" icon={<BsCardChecklist />} />

        {user.username === '' ? (
          // If NOT logged in ->
          null
        ) : (
          // if logged in ->
          <SidebarLink text="ADD NEW PRODUCT" path="/products/new" icon={<CgPlayListAdd />} />
        )}

        {user.username === '' ? (
          // If NOT logged in ->
          <SidebarLink text="LOGIN" path="/login" icon={<BiLogIn />} />
        ) : (
          // If logged in ->
          <div className="">

            <button
              type="button"
              className="ml-2 py-2 pl-3 font-bold text-slate-700 hover:cursor-pointer"
              onClick={logout}
            >
              <span className="inline-block mr-4 text-2xl align-middle"><CiLogout /></span>
              LOGOUT
            </button>
          </div>
        )}

      </ul>
    </div>
  );
}

export default MobileSidebar;
