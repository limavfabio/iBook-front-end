import PropTypes from 'prop-types';

function DetailRow({ label, value, isGrayBackground }) {
  const backgroundClass = isGrayBackground ? 'bg-gray-300' : '';

  return (
    <div
      className={`flex justify-between px-4 py-2 text-sm ${backgroundClass}`}
    >

      <p>{label}</p>

      {value ? (
        <p>{value.toString()}</p>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

DetailRow.defaultProps = {
  isGrayBackground: false,
  value: 'Loading',
};

DetailRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  isGrayBackground: PropTypes.bool,
};

export default DetailRow;
