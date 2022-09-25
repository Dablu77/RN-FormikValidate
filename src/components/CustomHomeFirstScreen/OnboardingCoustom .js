import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 7,
                height: 7,
                borderRadius: 25,
                marginHorizontal: 3,
                backgroundColor,
            }}
        />
    );
};

const Skip = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 20 }} {...props}>
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 20 }} {...props}>
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 20 }} {...props}>
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingCoustom = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace('FirstScreenLogin')}
            onDone={() => navigation.navigate('FirstScreenLogin')}
            pages={[
                {
                    backgroundColor: '#4BE58A',
                    image: (
                        <Lottie
                            source={require('../../assets/helmet.json')}

                            autoPlay
                            loop
                            style={Styles.imgstyles}
                        />
                    ),
                    title: <Text style={Styles.Headertext}>Best Digital Solution</Text>,

                    subtitle: (
                        <Text style={Styles.pragraphstyle}>

                            Get the best Results for Digital Marketing Atlanta. Find what you
                            are looking for! 99% Match on Digital Marketing Atlanta.
                        </Text>
                    ),
                },
                {
                    backgroundColor: '#fdeb93',
                    image: (
                        <Lottie
                            source={require('../../assets/virtualmec.json')}
                            autoPlay
                            loop
                            style={Styles.imgstyles}
                        />
                    ),
                    title: <Text style={Styles.Headertext}>Achieve Your Goal</Text>,

                    subtitle:
                        <Text style={Styles.pragraphstyle}>
                            Get the best Results for Digital Marketing Atlanta. Find what you are looking for! 99% Match on Digital Marketing Atlanta.
                        </Text>
                },
                {
                    backgroundColor: '#7AA24A',
                    image: (
                        <Lottie
                            source={require('../../assets/withgirl.json')}
                            autoPlay
                            loop
                            style={Styles.imgstyles}
                        />
                    ),
                    title: <Text style={Styles.Headertext}>Increase Your Valua</Text>,

                    subtitle:
                        <Text style={Styles.pragraphstyle}>
                            Get the best Results for Digital Marketing Atlanta. Find what you are looking for! 99% Match on Digital Marketing Atlanta.
                        </Text>
                },
            ]}
        />
    );
};

export default OnboardingCoustom;

const Styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imgstyles: {
        height: 250,
        marginHorizontal: 12,
        marginVertical: -70

    },
    Headertext: {
        fontSize: 25,
        lineHeight: 48,
        color: '#000',
        textAlign: 'center',
        // fontFamily: "Roboto",
        margin: 10,
    },
    pragraphstyle: {
        fontSize: 20,
        color: '#000',
        lineHeight: 30,
        textAlign: 'center'

    },
});
