import React from 'react';
import {Image,StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });


function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo}
            source={require("../assets/adaptive-icon.png")}/>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >

             {({handleChange,handleSubmit,errors })=>(
                 <>
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            placeholder="Email"
            textContentType="emailAddress"
            />
            <AppText style={{color: 'red'}}>{errors.email}</AppText>
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            onChangeText={handleChange("password")}
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            />
            <AppText style={{color: 'red'}}>{errors.password}</AppText>
            <AppButton title="login" onPress={handleSubmit}/>
                 </>
             )}
            </Formik>
            
        </Screen>
    );
}
const styles = StyleSheet.create({
    logo :
    {
        width:80,
        height:80,
        alignSelf:'center',
    },
    container:
    {
        padding:20
    },

})
export default LoginScreen;