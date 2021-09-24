import React from 'react';

const FormField = ({ htmlFor, formik, placeholder, borderWidth = '2', type = 'text', className, topLabel = null }) => {
  return (
    <div className={`grid grid-rows-2 mx-4 _text-3xl  ${className}`}>
      <div className="flex flex-col">
        {topLabel && (
          <label className="" htmlFor={htmlFor}>
            {topLabel}
          </label>
        )}
        <input
          className={`placeholder-p-blue bg-transparent border-p-blue border-b-${borderWidth} outline-none`}
          placeholder={placeholder}
          id={htmlFor}
          name={htmlFor}
          type={type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[htmlFor]}
        />
      </div>

      <label htmlFor={htmlFor} className="_text-lg text-red-500 font-bold">
        {formik.touched[htmlFor] && formik.errors[htmlFor] && formik.errors[htmlFor]}
      </label>
    </div>
  );
};

export default FormField;
