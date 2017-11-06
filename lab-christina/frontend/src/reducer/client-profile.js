export const validateProfile = (profile) => {
  let { username, email, password, bio, owner } = profile
  if(!username || !email || !password || !bio || !owner)
    throw new Error('__VALIDATION_ERROR__ invalid profile');
}

export default(state=null, {type, payload}) => {
  switch (type) {
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload)
      return payload
    case 'TOKEN_REMOVE':
      return null
    default:
      return state;
  }
}
