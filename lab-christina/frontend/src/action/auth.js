import superagent from 'superagent'
import {cookieDelete} from '../lib/util.js'

//sync
export const tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
})

export const tokenRemove = () => ({
  type: 'TOKEN_REMOVE',
})

//async
export const signup = (user) => (store) => {
  return superagent.post(`${__API_URL__}/auth`)
  .send(user)
  .withCredentials()
  .then(response => {
    console.log('Signup ::', { response });
    return store.dispatch(tokenSet(response.body.token))
  })
}

export const login  = (user) => (store) => {
  return superagent.get(`${__API_URL__}/auth`)
  .auth(user.username, user.password)
  .withCredentials()
  .then(response => {
    console.log( 'Login ::', { response });
    return store.dispatch(tokenSet(response.body.token))
  })
}

export const logout = () => {
  cookieDelete('charity-choice-token')
  return tokenRemove()
}
