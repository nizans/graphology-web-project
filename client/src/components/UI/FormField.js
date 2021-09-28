import React from 'react';

const FormField = ({
  htmlFor,
  formik,
  placeholder,
  borderWidth = '2',
  type = 'text',
  className,
  topLabel = null,
  icon = false,
}) => {
  return (
    <div className={`grid grid-rows-2 mx-4 _text-3xl  ${className}`}>
      <div className="flex flex-col">
        {topLabel && (
          <label className="text-p-blue-dark" htmlFor={htmlFor}>
            {topLabel}
          </label>
        )}
        <div className="relative w-full flex flex-col">
          <input
            className={`placeholder-p-blue bg-transparent border-p-blue border-b-${borderWidth} ${
              icon && 'pr-5'
            } outline-none`}
            placeholder={placeholder}
            id={htmlFor}
            name={htmlFor}
            type={type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[htmlFor]}
          />
          {icon && <span className="absolute top-1/2 transform -translate-y-1/2">{icon}</span>}
        </div>
      </div>
      <label htmlFor={htmlFor} className="_text-lg text-red-500 font-bold">
        {formik.touched[htmlFor] && formik.errors[htmlFor] && formik.errors[htmlFor]}
      </label>
    </div>
  );
};

export default FormField;
