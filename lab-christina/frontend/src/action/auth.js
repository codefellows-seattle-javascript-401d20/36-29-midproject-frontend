import superagent from 'superagent'

export const tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
})

export const tokenRemove = () => ({
  type: 'TOKEN_REMOVE',
})

export const signup = (store) => {
  return superagent.post(`${__API_URL__}/auth`)
  .send(user)
  .withCredentials()
  .then(response => {
    console.log('Signup ::', { response });
    return store.dispatch(tokenSet(response.body.token))
  })
}

export const longin  = (user) => (store) {
  return superagent.get(`${__API_URL__}/auth`)
  .auth(user.username, user.password)
  .withCredentials()
  .then(response => {
    console.log( 'Login ::', { response });
  })
}
