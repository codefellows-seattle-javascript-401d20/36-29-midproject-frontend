export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CHARITY_FIND':
      return payload
    case 'CHARITY_REMOVE':
      return []
    default:
      return state
  }
}