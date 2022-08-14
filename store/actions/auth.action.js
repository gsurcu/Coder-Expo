import { URL_AUTH_LOGIN, URL_AUTH_SIGNUP } from "../../conf"

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_SIGNUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    })

    if(!response.ok) {
      const errorResponse = await response.json()
      const errorID = errorResponse.error.message

      let message = 'No se ha podido registrar'
      if (errorID === 'EMAIL_EXISTS') message = 'Este mail ya esta registrado'
      throw new Error(message)
    } 

    const data = await response.json()
    dispatch({ 
      type: SIGNUP, 
      token: data.idToken, 
      userId: data.localId 
    })
  }
}

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      const errorID = errorResponse.error.message

      let message = 'No se ha podido logear'
      if (errorID === 'EMAIL_NOT_FOUND') message = 'No se encuentra el email';
      if (errorID === 'INVALID_PASSWORD') message = 'La clave no es valida'

      throw new Error(message)
    }

    const result = await response.json()

    dispatch({
      type: LOGIN,
      token: result.idToken,
      user: result.localId
    })
  }
}