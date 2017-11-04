export const validateProfile = (profile) => {
  console.log('profile: ', profile);
  if(!profile)
    throw new Error('profile required');
  let {firstName, lastName} = profile;
  if(!firstName || !lastName)
  // let {username, email, firstName, lastName} = profile;
  // if(!username || !email || !firstName || !lastName)
    throw new Error('__VALIDATION_ERROR__ invalid profile');
};

export default (state=null, {type, payload}) => {
  switch(type){
  case 'CLIENT_PROFILE_SET':
    validateProfile(payload);
    console.log('payload: ', payload);
    return payload;
  case 'TOKEN_REMOVE':
    return null;
  default:
    console.log('state: ', state);
    return state;
  }
};
