import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Groups from '../../DrawerScreen/Groups';
import Events from '../../DrawerScreen/Events';
import Coustom from '../../DrawerScreen/Coustom';
import { Image, } from 'react-native'



const Drawer = createDrawerNavigator();


export default function DrawerNavigator({ }) {
    return (


        <Drawer.Navigator
            drawerContent={(props) => <Coustom {...props} />}
            screenOptions={{


                drawerActiveBackgroundColor: "#AFFBC8",
                drawerInactiveTintColor: "#150F0F",
                drawerActiveTintColor: "#563D31",
                // headerTintColor: 'blue',
                // headerShown: false,
                // tabBarShowLabel: false,
                // headerTitle: false,


                headerStyle: {
                    backgroundColor: "#003333",
                    // height: 100,


                },

                headerTintColor: 'white'
            }}>
            <Drawer.Screen name="Groups" component={Groups} options={{
                drawerIcon: () => (<Image source={require('../../../assets/groupicon.png')}

                    style={{
                        height: 30, width: 30, borderRadius: 50

                    }}

                />)
            }} />
            <Drawer.Screen name="Events" component={Events} options={{
                drawerIcon: () => (<Image source={require('../../../assets/eventicone.png')}

                    style={{
                        height: 30, width: 30, borderRadius: 50

                    }}

                />)
            }} />

        </Drawer.Navigator>

    )
}


