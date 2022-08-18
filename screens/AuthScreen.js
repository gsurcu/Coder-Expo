import React, { useCallback, useReducer } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, StyleSheet, TextInput, Alert, Platform, Button } from "react-native";
import { COLORS } from "../constants/colors";
import { signup } from "../store/actions/auth.action";
import { useDispatch, connect } from "react-redux";
import Input from "../components/Input";

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

export const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.value,
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
      dispatch(signup(formState.inputValues.email, formState.inputValues.password))
    } else {
      console.log(formState)
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
          <Input 
            id='email'
            label='Email'
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorMessage='Por favor ingrese un email valido'
            onInputChange={onInputChangeHandler}
            initialValue=''
          />
          <Input 
            id='password'
            label='Clave'
            keyboardType='default'
            secureTextEntry
            required
            minLength={6}
            autoCapitalize="none"
            errorMessage='Por favor ingrese un password'
            onInputChange={onInputChangeHandler}
            initialValue=''
          />
        </View>
        <View style={styles.prompt}>
          <Button title='Registrarme' onPress={handleSignUp} />
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
  },
  input: {
    width: "100%",
    borderBottomWidth: 1.5,
    borderColor: "grey",
  }
})

export default connect()(AuthScreen);