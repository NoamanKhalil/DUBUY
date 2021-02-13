import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchemea, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchemea}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
