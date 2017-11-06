import superagent from 'superagent';

export const get = (result) => ({
  type: 'SEARCH_QUERY_SENT',
  payload: result,
});

export const fetch = () => (store) => {
  let {token} = store.getState();
  return superagent.get(`${__API_URL__}/charities`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      return store.dispatch(get(res.body));
    });
};
