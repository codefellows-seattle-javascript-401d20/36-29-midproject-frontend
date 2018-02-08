import reducer from '../reducer/client-profile.js'

describe('clientProfile reducer', () => {
  test('Initial state shuld be null', () => {
    let state = reducer(undefined, {type: ''})
    expect(null).toEqual(null)
  })

  test('should set the profile', () => {
    let action  = {
      type: 'CLIENT_PROFILE_SET',
      payload: {
        firstName: 'Jimmy',
        lastName: 'John',
        bio: 'He\'s tired',
        _id: '8888',
        account: '8888',
      },
    }

    let state = reducer(undefined, action)
    expect(state).toEqual(action.payload)
  })

  test('Should fail without a payload', () => {
    let shouldFail = () => {
      reducer(undefined, {type: 'CLIENT_PROFILE_SET'})
    }
    expect(shouldFail).toThrow('profile required')
  })

  test('should fail with an invalid payload', () => {
    let shouldFail = () => {
      reducer(undefined, {
        type: 'CLIENT_PROFILE_SET',
        payload: {},
      })
    }
    expect(shouldFail).toThrow('__VALIDATION_ERROR__ invalid profile')
  })

  test('should return null on TOKEN_REMOVE', () => {
    let state = reducer('hello moon', {type: 'TOKEN_REMOVE'})
    expect(state).toEqual(null)
  })

  test('should return the state', () => {
    let state = reducer('hello universe', {type: ''})
    expect(state).toEqual('hello universe')
  })
})
