import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Lottie from 'lottie-react-native';

const { height, width } = Dimensions.get('window');
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const SplashScreen = props => {
    const [align, setAlign] = useState('center');
    const [alignsecond, setAlignsecond] = useState(false);



    useEffect(() => {
        setTimeout(() => {
            setAlignsecond(true);
        }, 3000);
    }, []);


    useEffect(() => {
        if (alignsecond) {
            props.navigation.replace('OnboardingCoustom');
        }
    }, [alignsecond, props.navigation]);

    return (
        <View style={[Styles.container, { justifyContent: align }]}>
            <Lottie
                source={require('../../assets/spalshicone.json')}

                autoPlay
                // loop
                style={Styles.imgstyles}
            />


        </View>
    );
};

export default SplashScreen;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    imgstyles: {
        justifyContent: 'center',
        height: height / 1,
        // width: width / 1
    },
})
