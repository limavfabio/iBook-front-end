import React from 'react';
import PropTypes from 'prop-types';

function FormInput({
  type, id, value, placeholder, onChange,
}) {

  const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);


  return (
    <label htmlFor={id} className="mb-2 block">
      <p className="font-semibold">{capitalizedId}</p>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:border-[#85a80d] focus:bg-white focus:outline-none"
        required
      />
    </label>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
