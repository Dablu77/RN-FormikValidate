import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import CoustomButton from '../common/CoustomButton';
import { Formik } from 'formik';



export default function FirstScreenLogin({ navigation }) {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <SafeAreaView style={{ flex: 1, backgroundColor: '#141f27' }}>

                    <Lottie source={require('../../assets/Loginscreen.json')}
                        autoPlay
                        loop
                        style={Styles.imgstyle}
                    />

                    <Text style={Styles.titlestyle}>LOG-IN</Text>


                    <View style={Styles.sectionStyle}>
                        <Lottie source={require('../../assets/email.json')}
                            autoPlay
                            loop
                            style={{ height: 40, marginVertical: -5 }}
                        />
                        <TextInput
                            style={Styles.input}
                            placeholder="Phone or Email"
                            placeholderTextColor="#888888"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}

                        />
                    </View>
                    <View style={Styles.sectionStyle}>
                        <Lottie source={require('../../assets/enterpassword.json')}
                            autoPlay
                            loop
                            style={{ height: 40, marginVertical: -5 }}
                        />
                        <TextInput
                            style={Styles.input}
                            placeholder="Enter Your Passowrd"
                            placeholderTextColor="#888888"
                            // keyboardType="numeric"
                            maxLength={16}


                        />
                    </View>

                    <TouchableOpacity>
                        <Text style={Styles.Forgottextstyle}>Forgot Password</Text>
                    </TouchableOpacity>
                    <View style={{ marginVertical: 15 }}>
                        <CoustomButton Title="Log-In" onPress={() => navigation.navigate("ButtomTabMain")} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Lottie source={require('../../assets/horizontaline.json')}
                            autoPlay
                            loop
                            style={{ width: 150, marginHorizontal: 10, marginVertical: 5 }}
                        />
                        <Text style={{ color: "grey", fontSize: 14, fontWeight: '500', }}>or</Text>
                        <Lottie source={require('../../assets/horizontaline.json')}
                            autoPlay
                            loop
                            style={{ width: 150, marginHorizontal: 10, marginVertical: 5, right: 10 }}
                        />
                    </View>
                    <View style={{ marginVertical: 15 }}>
                        <CoustomButton Title="Create new VirtualNext account" onPress={() => navigation.navigate("Createnewscren")} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Lottie source={require('../../assets/gooleiconeG.json')}
                            autoPlay
                            loop
                            style={{ height: 55, width: 50, right: 7 }}
                        />
                        <Lottie source={require('../../assets/appleicone.json')}
                            autoPlay
                            loop
                            style={{ height: 30, width: 50, left: 7, marginVertical: 5 }} />
                    </View>

                </SafeAreaView>
            )}
        </Formik>
    )
}

const Styles = StyleSheet.create({
    imgstyle: {
        height: 350,
        marginHorizontal: 10
    },
    titlestyle: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 30,
        margin: 10

    },
    input: {
        flex: 1,
        height: 40,
        color: '#F7B02D',
        fontSize: 15,
        paddingHorizontal: 15,



    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        height: 45,
        marginHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10

    },
    Forgottextstyle: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'flex-end',
        right: 23,
        fontWeight: '500',
        marginVertical: -5
    }
})


