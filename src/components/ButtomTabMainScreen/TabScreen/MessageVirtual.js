import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatesVirtual from '../../MessageVirtualTopTabScreen/ChatesVirtual';
import StatusVirtual from '../../MessageVirtualTopTabScreen/StatusVirtual';
import CallsVirtual from '../../MessageVirtualTopTabScreen/CallsVirtual';
import Lottie from 'lottie-react-native';
// import ImagePicker from 'react-native-image-crop-picker';

const Tab = createMaterialTopTabNavigator();

function MessageVirtual() {

    // const [imageUrlPath, setImageUrlPath] = useState('');
    // const [imageUrlData, setImageUrlData] = useState('');


    // const onCamera = () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true,
    //         includeBase64: true,
    //         mediaType: 'any',
    //     }).then(image => {
    //         // console.log("===== Open Camera =====222", image);
    //         setImageUrlPath(image.path);
    //         setImageUrlData(image.data);
    //     });
    // };


    return (
        <>
            <View style={{ backgroundColor: '#141f27', paddingTop: 15, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, marginVertical: 10, color: 'white', padding: 5, letterSpacing: .4, fontWeight: '500' }}>VirtualNext</Text>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Image source={require('../../../assets/search.png')}
                        style={{ height: 25, width: 25, right: 10, marginVertical: 5 }}
                    />
                    <Pressable
                    //  onPress={onCamera}
                    >
                        <Lottie
                            source={require('../../../assets/camera.json')}
                            autoPlay
                            loop
                            // style={Styles.arowimgstyles}
                            style={{ height: 35, width: 35, }}
                        />
                    </Pressable>
                </View>
            </View>
            <Tab.Navigator screenOptions={{
                tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', },
                tabBarStyle: { backgroundColor: '#141f27', },
                tabBarActiveTintColor: "white",
                tabBarIndicatorStyle: {
                    borderBottomColor: "#FAB0A4",
                    borderBottomWidth: 1,
                }

            }}>
                <Tab.Screen name="Chates" component={ChatesVirtual} />
                <Tab.Screen name="Status" component={StatusVirtual} />
                <Tab.Screen name="Calls" component={CallsVirtual} />
            </Tab.Navigator>
        </>
    )
}



export default MessageVirtual;