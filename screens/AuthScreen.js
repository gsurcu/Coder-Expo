import React, { useCallback, useEffect, useReducer, useState } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, StyleSheet, TextInput, Alert, Platform, Button } from "react-native";
import { COLORS } from "../constants/colors";
import { signup } from "../store/actions/auth.action";
import { useDispatch, connect } from "react-redux";

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

export const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.isValid,
    }

    const inputValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let formIsValid = true;

    for (const key in inputValidities) {
      formIsValid = formIsValid && inputValidities[key]
    }

    return {
      formIsValid,
      inputValues,
      inputValidities
    }
  }

  return state;
}

const AuthScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid : false
  })

  const title = 'REGISTRO',
    message = 'Ya tienes cuenta?',
    messageAction = 'Ingresar',
    messageTarget = 'login';

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(signup(email, password))
    } else {
      Alert.alert(
        'Formulario invalido',
        'Ingrese email y usuario valido',
        [{ text: 'Ok'}]
      );
    }
  }

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>

          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.label}>Clave</Text>
          <TextInput 
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
          <Button title='Registrarme' onPress={handleSignUp} />
        </View>
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={() => console.log(messageTarget)}>
            <Text style={styles.promptButton}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontFamily: "OpenSansBold",
    marginBottom: 18,
    textAlign: "center",
  },
  prompt: {
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 16,
    fontFamily: "OpenSans",
    color: "#333",
  },
  promptButton: {
    fontSize: 16,
    fontFamily: "OpenSansBold",
    color: COLORS.primary,
  },
  button: {
    backgroundColor: COLORS.primary,
    marginVertical: 20,
  },
  inputContainer: {
    justifyContent: "space-around",
    height: "40%",
    // backgroundColor: "white",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1.5,
    borderColor: "grey",
  }
})

export default connect()(AuthScreen);