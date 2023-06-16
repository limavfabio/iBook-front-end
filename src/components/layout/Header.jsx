import PropTypes from 'prop-types';

import { Bars3Icon } from '@heroicons/react/24/outline';

function Header({ toggleSidebar }) {
  return (
    <div className="flex items-center justify-between bg-lime-500 px-4 py-2 md:hidden">
      <button type="button" className="" onClick={toggleSidebar}>
        <Bars3Icon className="h-8 text-white" />
      </button>
      <p className="font-bold text-white">Vespa</p>
      <div />
    </div>
  );
}

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
