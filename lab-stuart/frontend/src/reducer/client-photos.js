export const validatePhoto = (avatar) => {
  if(!avatar)
    throw new Error('a photo was required');
  let {account, photo} = avatar;
  if(!account || !photo)
    throw new Error('photo was not valid');
};

export default (state=[], {type, payload}) => {
  switch(type){
  case 'CLIENT_PHOTOS_SET':
    if(!Array.isArray(payload))
      throw new Error('clientPhotos mush be an array');
    payload.forEach(validatePhoto);
    return payload;
  case 'CLIENT_PHOTO_CREATE':
    validatePhoto(payload);
    return [payload, ...state];
  // case 'CLIENT_PHOTO_REMOVE':
  //   validatePhoto(payload);
  //   return state.filter(item => item._id !== payload._id);
  case 'TOKEN_REMOVE':
    return [];
  default:
    return state;
  }
};
