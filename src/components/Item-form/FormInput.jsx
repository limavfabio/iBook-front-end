import React from 'react';

function FormInput({
  type, id, value, placeholder, onChange,
}) {
  return (
    <label htmlFor={value} className="mb-2 block">
      <p className="font-semibold">Name</p>
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

export default FormInput;
