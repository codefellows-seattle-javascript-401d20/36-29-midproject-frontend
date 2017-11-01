import superagent from 'superagent'

// synchronous functions => object
export const tokenSet = (token) =>
  ({ type: 'TOKEN_SET', payload: token })

export const tokenRemove = () =>
  ({ type: 'TOKEN_REMOVE' })

// async functions => function
export const signup = (user) => (store) => {
  return superagent.post(`${API_URL}/auth`)
    .send(user)
    .withCredentials()
    .then(res => {
      console.log({ res })
      return store.dispatch(tokenSet(res.body.token))
    })
}

export const login = (user) => (store) => {
  return superagent.get(`${API_URL}/auth`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(res => {
      console.log({ res })
      return store.dispatch(tokenSet(res.body.token))
    })
}
