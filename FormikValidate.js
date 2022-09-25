import { View, Text, SafeAreaView, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { min } from 'react-native-reanimated';

const { height, width } = Dimensions.get("window")



const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please enter your full name'),
    email: Yup.string()
        .email('Invalid email')
        .required('Please enter Your Email Address'),
    password: Yup.string()
        .min(8)
        .required("Please enter your password")
        .matches(
            // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            /^[0-9]+$/,  // only number letter

            "Must contain minimum 8 characters, at least one uppercase letter, one number and special character "
        ),
    confirmpassword: Yup.string()
        .min(8, "Confirm password must be 8 characters long.")
        .oneOf([Yup.ref("password")], "Your password do not match")
        .required('Confirm password is required'),

    mobile: Yup.string()
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("please enter your mobile nummber. ")

});


export default function FormikValidate() {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirmpassword: '',
                mobile: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => Alert.alert(JSON.stringify(values))}
        >
            {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (


                <SafeAreaView style={{ backgroundColor: '#4D774E', flex: 1 }}>
                    <Text style={{ color: '#F5772E', fontSize: 25, fontWeight: '900', margin: 30 }}>Sign Up</Text>
                    <View style={{ backgroundColor: '#E7FDFB', borderWidth: 1, height: height / 1.5, marginHorizontal: 20, borderRadius: 10 }}>
                        <View style={{ backgroundColor: 'black', borderWidth: 1, borderColor: 'red', borderRadius: 10, marginHorizontal: 20, marginVertical: 20 }}>
                            <TextInput
                                style={{ color: 'white', paddingHorizontal: 15, }}
                                placeholder="Full Name"
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={() => setFieldTouched("name")}
                            />

                        </View>
                        {touched.name && errors.name && (
                            <Text style={{ color: '#DA103A', fontWeight: 'bold', fontSize: 15, marginHorizontal: 25, top: -15 }}>{errors.name}</Text>
                        )}
                        <View style={{ backgroundColor: 'black', borderWidth: 1, borderColor: 'red', borderRadius: 10, marginHorizontal: 20, marginVertical: 10 }}>
                            <TextInput
                                style={{ color: 'white', paddingHorizontal: 15, }}
                                placeholder="Email Address"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={() => setFieldTouched("email")}

                            />
                        </View>
                        {touched.email && errors.email && (
                            <Text style={{ color: '#DA103A', fontWeight: 'bold', fontSize: 15, marginHorizontal: 25, top: -6 }}>{errors.email}</Text>
                        )}
                        <View style={{ backgroundColor: 'black', borderWidth: 1, borderColor: 'red', borderRadius: 10, marginHorizontal: 20, marginVertical: 10 }}>
                            <TextInput
                                style={{ color: 'white', paddingHorizontal: 15, }}
                                placeholder="Password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={() => setFieldTouched("password")}
                                autoCapitalize={false}
                            />
                        </View>
                        {touched.password && errors.password && (
                            <Text style={{ color: '#DA103A', fontWeight: 'bold', fontSize: 15, marginHorizontal: 25, top: -6 }}>{errors.password}</Text>
                        )}
                        <View style={{ backgroundColor: 'black', borderWidth: 1, borderColor: 'red', marginVertical: 10, marginHorizontal: 20, borderRadius: 10 }}>
                            <TextInput
                                style={{ color: 'white', paddingHorizontal: 15, }}
                                placeholder="Confirm Password"
                                autoCapitalize={false}
                                value={values.confirmpassword}
                                onChangeText={handleChange('confirmpassword')}
                                onBlur={() => setFieldTouched("confirmpassword")}

                            />
                        </View>
                        {touched.confirmpassword && errors.confirmpassword && (
                            <Text style={{ color: '#DA103A', fontWeight: 'bold', fontSize: 15, marginHorizontal: 25, top: -6 }}>{errors.confirmpassword}</Text>
                        )}
                        <View style={{ backgroundColor: 'black', borderWidth: 1, borderColor: 'red', marginHorizontal: 20, borderRadius: 10, marginVertical: 10 }}>
                            <TextInput
                                style={{ color: 'white', paddingHorizontal: 15, }}
                                placeholder="Mobile No."
                                value={values.mobile}
                                onChangeText={handleChange('mobile')}
                                onBlur={() => setFieldTouched("mobile")}
                            />
                        </View>
                        {touched.mobile && errors.mobile && (
                            <Text style={{ color: '#DA103A', fontWeight: 'bold', fontSize: 15, marginHorizontal: 25, top: -6 }}>{errors.mobile}</Text>
                        )}
                        <TouchableOpacity
                            onPress={() => { handleSubmit }}
                            disabled={isValid}
                            style={[{ backgroundColor: isValid ? "red" : "grey" }]}
                        >
                            <View style={{ borderWidth: 1, borderColor: 'red', alignItems: 'center', height: height / 15, marginHorizontal: 20, justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            )
            }
        </Formik>
    )
}