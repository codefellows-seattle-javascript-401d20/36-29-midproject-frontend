import superagent from 'superagent';

export const set = (photos) => ({
  type: 'CLIENT_PHOTOS_SET',
  payload: photos,
});

export const create = (photo) => ({
  type: 'CLIENT_PHOTO_CREATE',
  payload: photo,
});

export const uploadPhoto = (photo) => (store) => {
  let {token} = store.getState();
  return superagent.put(`${__API_URL__}/profiles/avatar`)
  .set('Authorization', `Bearer ${token}`)
  .field('description', photo.description)
  .attach('photo', photo.photo)
  .then(res => {
    return store.dispatch(create(res.body));
  });
};

export const fetchPhoto = () => (store) => {
  let {token} = store.getState();
  return superagent.get(`${__API_URL__}/profiles/avatar`)
  .set('Authorization', `Bearer ${token}`)
  .then(res => {
    return store.dispatch(set(res.body.data));
  });
};
