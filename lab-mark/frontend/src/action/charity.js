import superagent from 'superagent'

export const queryParser = (query) => {
  console.log(query)
}

export const set = (charities) => ({
  type: 'CHARITIES_SET',
  payload: charities,
})

export const search = (query) => (store) => {
  let {token} = store.getState()
  let queryParsed = queryParser(query)
  return superagent.get(`${__API_URL__}/charities`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      console.log('RESULT -->', res.body)
      return store.dispatch(set(res.body))
    })
}
