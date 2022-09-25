import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import * as Animatable from 'react-native-animatable';




export default function ChatesVirtual() {
    const pulseAnimRef = useRef();
    return (
        <View>
            <Animatable.View ref={pulseAnimRef}>
                <TouchableOpacity
                    style={[Style.animButton, { backgroundColor: 'red' }]}
                    onPress={() => {
                        pulseAnimRef.current.pulse(800);
                    }}
                >
                    <Text
                        style={Style.animButtonText}
                    >
                        Push
                    </Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const Style = StyleSheet.create({
    animButton: {
        backgroundColor: 'blue',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 5,
        elevation: 5,
        shadowOffset: {
            width: 2,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,



    },
    animButtonText: {
        color: '#fff',
        fontWeight: "500",
        fontSize: 18

    }
})

