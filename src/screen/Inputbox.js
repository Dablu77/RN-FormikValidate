import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleNameChange = text => {
    setName(text);
    setIsNameValid(text.length > 0);
  };

  const handleEmailChange = text => {
    setEmail(text);
    setIsValidEmail(validateEmail(text));
  };

  const handlePasswordChange = text => {
    setPassword(text);
    setIsValidPassword(validatePassword(text));
  };

  const validateEmail = text => {
    // perform email validation here
    return text.includes('@');
  };

  const validatePassword = text => {
    // perform password validation here
    return text.length >= 8;
  };

  const handleButtonPress = () => {
    const errors = [];
    if (!isNameValid) {
      errors.push('Please enter your name');
    }
    if (!isValidEmail) {
      errors.push('Please enter a valid email');
    }
    if (!isValidPassword) {
      errors.push('Password must be at least 8 characters long');
    }
    setErrorMessages(errors);
  };

  const nameInputStyle = isNameValid ? styles.input : styles.invalidInput;
  const emailInputStyle = isValidEmail ? styles.input : styles.invalidInput;
  const passwordInputStyle = isValidPassword
    ? styles.input
    : styles.invalidInput;

  return (
    <View>
      <TextInput
        style={nameInputStyle}
        placeholder="Name"
        onChangeText={handleNameChange}
        value={name}
      />
      <TextInput
        style={emailInputStyle}
        placeholder="Email"
        onChangeText={handleEmailChange}
        value={email}
      />
      <TextInput
        style={passwordInputStyle}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        value={password}
      />
      {errorMessages.map((error, index) => (
        <Text key={index} style={styles.errorText}>
          {error}
        </Text>
      ))}
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
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
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MyForm;
