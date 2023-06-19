import PropTypes from 'prop-types';
import { Cog6ToothIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function ConfigureButton({ className }) {
  return (
    <button
      type="button"
      className={`flex w-min items-center gap-2 self-end rounded-full bg-[#97BF0F] p-3 font-bold text-white ${className}`}
    >
      <Cog6ToothIcon className="h-8" />
      Configure
      <ChevronRightIcon className="h-8" />
    </button>
  );
}

ConfigureButton.defaultProps = {
  className: '',
};

ConfigureButton.propTypes = {
  className: PropTypes.string,
};

export default ConfigureButton;
