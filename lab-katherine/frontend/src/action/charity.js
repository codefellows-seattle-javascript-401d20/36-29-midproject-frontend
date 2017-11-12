import superagent from 'superagent';

export const set = (charities) => ({
  type: 'CHARITIES_SET',
  payload: charities,
});

export const findCharities = () => (store) => {
  let {token} = store.getState();
  return superagent.get(`${__API_URL__}/charities`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      console.log(res.body);
      return store.dispatch(set(res.body));
    });
};
