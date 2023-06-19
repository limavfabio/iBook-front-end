import PropTypes from 'prop-types';

function DetailRow({ label, value, isGrayBackground }) {
  const backgroundClass = isGrayBackground ? 'bg-gray-300' : '';

  return (
    <div
      className={`flex justify-between px-4 py-2 text-sm ${backgroundClass}`}
    >
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
}

DetailRow.defaultProps = {
  isGrayBackground: false,
};

DetailRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isGrayBackground: PropTypes.bool,
};

export default DetailRow;
