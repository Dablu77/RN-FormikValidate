import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'



export default function Coustom(props) {


    return (
        <ScrollView style={{ flex: 1, }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#D6FCED", }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/applogo.png')} style={Styles.iconestyle} />
                    <View style={Styles.textlable}>
                        <Text style={Styles.textstyl}>Dablu gupta</Text>
                        <Text style={Styles.textstyl2}>View profile</Text>
                    </View>
                </TouchableOpacity>

                <View style={Styles.linesstyles}></View>



                <View style={{ marginTop: 40 }}>
                    {/* <DrawerItemList {...props} /> */}

                </View>



            </DrawerContentScrollView>


        </ScrollView>
    )
}

const Styles = StyleSheet.create({

    lablebox: {
        height: 50,
        borderWidth: 1,
        borderColor: '#F7B02D',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconestyle: {
        height: 60,
        width: 60,
        left: 20,
        borderRadius: 20,
        marginVertical: 30
    },
    linesstyles: {
        borderWidth: 0.5,
        marginVertical: 40,
        borderColor: 'grey',



    },
    textlable: {
        left: 20,
    },
    textstyl: {
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold'

    },
    textstyl2: {
        color: 'grey',
        fontWeight: '500',

    }

})