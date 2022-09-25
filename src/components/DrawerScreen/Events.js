import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

export default function Events() {
    return (
        <View style={{ flex: 1 }}>
            <Lottie
                // source={require('../../assets/helmet.json')}
                source={require('../../assets/spalshicone.json')}

                autoPlay
                loop
                style={Styles.imgstyles}
            />
        </View>
    )
}
const Styles = StyleSheet.create({
    // imgstyles: {
    //     height: 250,
    //     marginHorizontal: 12,
    //     marginVertical: -70

    // },
})