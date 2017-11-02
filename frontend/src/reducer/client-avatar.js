export const validateAvatar = (avatar) => {
  if(!avatar)
    throw new Error('a avatar was required!');
  let {_id, url, description, profile} = avatar;
  if(!_id || !url || !description || !profile)
    throw new Error('avatar was not valid!');
};

export default (state=[], {type, payload}) => {
  switch(type){
  case 'CLIENT_AVATARS_SET':
    if(!Array.isArray(payload))
      throw new Error('clientAvatars must be an array');
    payload.forEach(validateAvatar);
    return payload;
  case 'CLIENT_AVATAR_CREATE':
    validateAvatar(payload);
    return [payload, ...state];
  case 'CLIENT_AVATAR_REMOVE':
    validateAvatar(payload);
    return state.filter(item => item._id !== payload._id);
  case 'TOKEN_REMOVE':
    return [];
  default:
    return state;
  }
};
