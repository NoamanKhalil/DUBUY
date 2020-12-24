import { Formik } from 'formik';
import React from 'react';

function AppForm({initialValues,onSubmit,validationSchemea,children}) {
    return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validat
        ionSchema={validationSchemea}
    >
        {()=>(<>{children}</>)}
    </Formik>
    );
}

export default AppForm;