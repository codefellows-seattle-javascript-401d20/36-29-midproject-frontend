import superagent from 'superagent'

export const set = (favorites) => ({
  type: 'FAVORITE_SET',
  payload: favorites,
})

export const remove = (favorite) => ({
  type: 'FAVORITE_REMOVE',
  payload: favorite,
})


export const create = (favorite) => (store) => {
  let {token} = store.getState()
  console.log('SENDING THIS--->', favorite)
  return superagent.post(`${__API_URL__}/favorites`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send({charity: favorite})
    .then(() => fetch())
}

export const unfavorite = (favorite) => (store) => {
  let {token} = store.getState()
  console.log('CHECK THIS OUT TOO!', favorite)
  return superagent.delete(`${__API_URL__}/favorites/${favorite._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .then(res => {
      return store.dispatch(remove(res.body))
    })
}

export const fetch = () => (store) => {
  let {token} = store.getState()
  return superagent.get(`${__API_URL__}/favorites`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      console.log('This is what you are setting', res.body)
      return store.dispatch(set(res.body))
    })
}
