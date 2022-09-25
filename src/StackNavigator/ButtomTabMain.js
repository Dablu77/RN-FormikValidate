import React from "react";
import Lottie from 'lottie-react-native';
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImagePath from "../components/constants/ImagePath";
import {
    HomeVirtual,
    VideoVirtual,
    PostVirtual,
    NotificationsVirtual,
    MessageVirtual
} from '../components/ButtomTabMainScreen/Index'


const Tab = createBottomTabNavigator();

function ButtomTabMain({ }) {
    return (


        <Tab.Navigator
            // activeColor='grey'


            initialRouteName="HomeScreen"
            screenOptions={() => ({


                // tabBarActiveTintColor: 'red',
                // tabBarInactiveTintColor: 'white',
                // activeColor: 'black',
                tabBarShowLabel: false,
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#003333',
                    height: 60,


                },
                headerStyle: {
                    backgroundColor: '#141f27',

                }


            })} >





            <Tab.Screen name="Home" component={HomeVirtual}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (<Image source={ImagePath.icHome}
                        style={{
                            height: 27, width: 27, marginBottom: 5,
                            tintColor: focused ? 'white' : "#bfbfbf"
                        }}
                    />
                    )
                }}

            />
            <Tab.Screen name="Video" component={VideoVirtual}
                options={{
                    headerShown: false,
                    tabBarColor: "blue",
                    tabBarIcon: ({ focused }) => (<Image source={ImagePath.icvideo}
                        style={{
                            height: 28, width: 28,
                            tintColor: focused ? 'white' : "#bfbfbf"
                        }}
                    />
                    )
                }}

            />
            <Tab.Screen name="Post" component={PostVirtual}
                options={{
                    tabBarIcon: ({ focused }) => (<Lottie source={require('../assets/Postlogo.json')}
                        autoPlay
                        loop
                        // renderMode="contain"
                        style={{
                            height: 40, marginBottom: 5,
                            tintColor: focused ? 'blue' : "blue"
                        }}

                    />)
                }}
            />
            <Tab.Screen name="Notifications" component={NotificationsVirtual}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<Image source={ImagePath.icnotifications}
                        style={{
                            height: 29, width: 29,
                            tintColor: focused ? 'white' : "#bfbfbf"
                        }}
                    />
                    )
                }}
            />




            <Tab.Screen name="message" component={MessageVirtual}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<Image source={ImagePath.icmessage}
                        style={{
                            height: 28, width: 28,
                            tintColor: focused ? 'white' : "#bfbfbf"
                        }}
                    />
                    )
                }}
            />


        </Tab.Navigator>

    );
}

export default ButtomTabMain;



