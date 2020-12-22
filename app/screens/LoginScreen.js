import React from 'react';
import {Image,StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });


function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo}
            source={require("../assets/d7.png")}/>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >

             {()=>(
                 <>
            <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            />
            <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            />
            <SubmitButton title ="login"/>
                 </>
             )}
            </Formik>
            
        </Screen>
    );
}
const styles = StyleSheet.create({
    logo :
    {
        width:180,
        height:180,
        alignSelf:'center',
    },
    container:
    {
        padding:20
    },

})
export default LoginScreen;