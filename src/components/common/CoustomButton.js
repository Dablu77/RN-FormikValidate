import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';


function CoustomButton({ Title, onPress, }) {
    const pulseAnimRef = useRef();

    return (
        <View>

            {/* <View style={[Styles.button]}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={Styles.buttonText}>{Title}</Text>
                </TouchableOpacity>
            </View> */}
            <Animatable.View ref={pulseAnimRef}>
                <TouchableOpacity
                    onPress={onPress}
                    style={[Styles.animButton, { backgroundColor: 'white' }]}
                // onPress={() => {
                //     pulseAnimRef.current.pulse(1000);


                // }}

                >
                    <Text
                        style={Styles.animButtonText}
                    >
                        {Title}
                    </Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

export default CoustomButton;

const Styles = StyleSheet.create({

    animButton: {
        marginHorizontal: 20,
        borderColor: 'white',
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 5,
        shadowOffset: {
            width: 2,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 9


    },
    animButtonText: {
        color: '#000',
        fontWeight: "500",
        fontSize: 15,
        textAlign: 'center',


    }
});
