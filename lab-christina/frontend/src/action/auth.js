import superagent from 'superagent'
import {cookieDelete} from '../lib/util.js'

export const tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
})

export const tokenRemove = () => ({
  type: 'TOKEN_REMOVE',
})

export const signup = (user) => (store) => {
  return superagent.post(`${__API_URL__}/auth`)
  .send(user)
  .withCredentials()
  .then(response => {
    console.log(response);
    console.log('Signup ::', { response });
    return store.dispatch(tokenSet(response.token))
  })
}

export const login  = (user) => (store) => {
  return superagent.get(`${__API_URL__}/auth`)
  .auth(user.username, user.password)
  .withCredentials()
  .then(response => {
    console.log('username',user.username)
    console.log( 'Login ::', response );
    return store.dispatch(tokenSet(response.token))
  })
}

export const logout = () => {
  cookieDelete('charity-choice-token')
  return tokenRemove()
}
