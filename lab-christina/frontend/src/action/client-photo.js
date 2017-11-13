import superagent from 'superagent'

export const set = (photos) => ({
  type: 'CLIENT_PHOTOS_SET',
  payload: photos,
})

export const create = (photo) => ({
  type: 'CLIENT_PHOTOS_CREATE',
  payload: photo,
})

export const remove = (photo) => ({
  type: 'CLIENT_PHOTOS_REMOVE',
  payload: photo,
})

export const fetchRequest = () => (store) => {
  let { token } = store.getState()
  return superagent.get(`${__API_URL__}/photos`)
  .set('Authorization', `Bearer ${ token }`)
  .then(response => {
    return store.dispatch(set(response.body.data))
  })
}

export const createRequest = (photo) => (store) => {
  let { token } = store.getState()
  return superagent.post(`${__API_URL__}/photos`)
  .set(`Authorization`, `Bearer ${ token }`)
  .field('description', photo.description)
  .attach('file', photo.file)
  .then(response => {
    return store.dispatch(set(response.body.data))
  })
}

export const removeRequest = (photo) => (store) => {
  return superagent.post(`${__API_URL__}/photos/${photo._id}`)
  .set(`Authorization`, `Bearer ${ token }`)
  .then(response => {
    return store.dispatch(remove(photo))
  })
}
