import { ChevronRightIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ConfigureButton({ className,data, productId, ownerId, productImage }) {
  return (
    <Link to={`/reserve`} state={{data}}>
      <button
        type="button"
        className={`flex w-min float-right items-center gap-2  rounded-full bg-[#97BF0F] p-3 font-bold text-white ${className}`}
      >
        <Cog6ToothIcon className="h-8" />
         Reserve
        <ChevronRightIcon className="h-8" />
      </button>
      </Link>
  );
}

ConfigureButton.defaultProps = {
  className: '',
};

ConfigureButton.propTypes = {
  className: PropTypes.string,
};

export default ConfigureButton;
