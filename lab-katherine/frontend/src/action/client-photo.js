import superagent from 'superagent';

export const set = (photo) => ({
  type: 'CLIENT_PHOTO_SET',
  payload: photo,
});

export const create = (photo) => ({
  type: 'CLIENT_PHOTO_CREATE',
  payload: photo,
});

export const uploadPhoto = (photo) => (store) => {
  let {token} = store.getState();
  return superagent.put(`${__API_URL__}/profiles/avatar`)
  .set('Authorization', `Bearer ${token}`)
  .attach('photo', photo.photo)
  .then(res => {
    return store.dispatch(create(res.body));
  });
};