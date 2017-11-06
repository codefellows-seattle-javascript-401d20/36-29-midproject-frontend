export const validatePhoto = (avatar) => {
  if(!avatar)
    throw new Error('a photo was required');
  let {photo} = avatar;
  if(!photo)
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
  case 'TOKEN_REMOVE':
    return [];
  default:
    return state;
  }
};
