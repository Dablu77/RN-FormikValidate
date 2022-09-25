import { View, Text } from 'react-native'
import React from 'react'
// import { Icon } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";




export default function NotificationsTab() {
    return (
        <View>
            <Text>NotificationsTab</Text>
            <Icon
                name='ios-book'
                type='font-awesome'
                size={50}
                color='red'
            />
        </View>
    )
}