export const validateCharity = (charity) => {
  if(!charity)
    throw new Error('a charity was required');
  let {name, streetAdd, city, mission, cause, rating, websiteURL, photoURL, keywords, category, phoneNumber, email} = charity;
  if(!name || !streetAdd || !city || !mission || !cause || !rating || !websiteURL || !photoURL || !keywords || !category || !phoneNumber || !email)
    throw new Error('charity was not valid');
};

export default (state=[], {type, payload}) => {
  switch(type){
  case 'CHARITIES_SET':
    // validateCharity(payload);
    return payload;
  case 'TOKEN_REMOVE':
    return [];
  default:
    return state;
  }
};
