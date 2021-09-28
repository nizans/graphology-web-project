import React from 'react';
import { useFormik } from 'formik';

const AddForm = ({ initialValues, validation, images, onSubmit, children }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: onSubmit,
  });
  return <form onSubmit={formik.handleSubmit}>{children}</form>;
};

export default AddForm;
