import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';


function AppFormPicker({items,numberOfColumns,name,placeholder,width,PickerItemComponent}) {
    const {errors,setFieldValue,touched,values}= useFormikContext();
    return (
        <>
        <AppPicker
         items={items}
         numberOfColumns={numberOfColumns}
         onSelectedItem={(item)=> setFieldValue(name,item)}
         PickerItemComponent={PickerItemComponent}
         placeholder={placeholder}
         selectedItem={values[name]}
         width={width}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;