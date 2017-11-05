import superagent from 'superagent';

export const set = (photos) => ({
  type: 'CLIENT_PHOTOS_SET',
  payload: photos,
});

export const create = (photo) => ({
  type: 'CLIENT_PHOTO_CREATE',
  payload: photo,
});

export const fetchRequest = () => (store) => {
  let {token} = store.getState();
  return superagent.get(`${__API_URL__}/profiles/avatar`)
  .set('Authorization', `Bearer ${token}`)
  .then(res => {
    return store.dispatch(set(res.body.data));
  });
};

export const createRequest = (photo) => (store) => {
  let {token} = store.getState();
  return superagent.post(`${__API_URL__}/profiles/avatar`)
  .set('Authorization', `Bearer ${token}`)
  .field('description', photo.description)
  .attach('photo', photo.photo)
  .then(res => {
    return store.dispatch(create(res.body));
  });
};
