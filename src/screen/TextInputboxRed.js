import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const TextInputboxRed = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const handleEmailChange = text => {
        setEmail(text);
    };

    const handlePasswordChange = text => {
        setPassword(text);
    };

    const handleValidation = () => {
        setIsValidEmail(validateEmail(email));
        setIsValidPassword(validatePassword(password));
    };

    const validateEmail = text => {
        // perform email validation here
        return text.includes('@');
    };

    const validatePassword = text => {
        // perform password validation here
        return text.length >= 8;
    };

    const emailInputStyle = isValidEmail ? styles.input : styles.invalidInput;
    const passwordInputStyle = isValidPassword
        ? styles.input
        : styles.invalidInput;

    return (
        <View>
            <TextInput
                style={emailInputStyle}
                placeholder="Email"
                onChangeText={handleEmailChange}
                value={email}
            />
            {!isValidEmail && (
                <Text style={styles.errorText}>Please enter a valid email</Text>
            )}
            <TextInput
                style={passwordInputStyle}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handlePasswordChange}
                value={password}
            />
            {!isValidPassword && (
                <Text style={styles.errorText}>
                    Password must be at least 8 characters long
                </Text>
            )}
            <TouchableOpacity style={styles.button} onPress={handleValidation}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    invalidInput: {
        height: 40,
        borderColor: 'red',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default TextInputboxRed;
