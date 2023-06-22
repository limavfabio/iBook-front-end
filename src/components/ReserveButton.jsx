import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ReserveButton({ className, data }) {
  return (
    <Link to={`/products/${data.id}/reservation`} state={{ data }}>
      <button
        type="button"
        className={`flex w-min float-right items-center gap-2  rounded-full bg-[#97BF0F] p-3 font-bold text-white ${className}`}
      >
        <Cog6ToothIcon className="h-8" />
        <span className="mx-3">Reserve</span>
        <IoIosArrowDropright className="text-3xl" />
      </button>
    </Link>
  );
}

// Not yet working
ReserveButton.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default ReserveButton;
