import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import CoustomButton from '../common/CoustomButton';



export default function Createnewscren({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#141f27" }}>
            <View style={Styles.boxconstaner}>
                <Pressable onPress={() => navigation.navigate("FirstScreenLogin")}>
                    <Lottie
                        source={require('../../assets/arowicone1.json')}
                        autoPlay
                        loop
                        style={Styles.arowimgstyles}
                    />
                </Pressable>
                <Text style={Styles.arowtextstle}>Create account</Text>
            </View>
            <Lottie
                source={require('../../assets/createnewaccount.json')}
                autoPlay
                loop
                style={Styles.imgstyles}
            />
            <Text style={Styles.titalstyles}>Join VirtualNext</Text>
            <Text style={Styles.subtitles}>we'll help you create a new account in a few easy step.</Text>
            <CoustomButton Title='Next' />
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    arowimgstyles: {
        height: 30,
        marginHorizontal: 4

    },
    imgstyles: {
        height: 350,
        marginVertical: -15

    },
    boxconstaner: {
        height: 50,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    arowtextstle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 10

    },
    titalstyles: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',

    },
    subtitles: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 20,
        margin: 10

    }
})