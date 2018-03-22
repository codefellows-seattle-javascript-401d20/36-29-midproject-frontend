import reducer from '../reducer/client-profile.js';

describe('clientProfile reducer', () => {
  test('The intial state shuld be null.', () => {
    let state = reducer(undefined, {type: ''});
    expect(state).toEqual(null);
  });

  test('Should set the profile.', () => {
    let action  = {
      type: 'CLIENT_PROFILE_SET',
      payload: {
        firstName: 'stuart',
        lastName: 'kershaw',
        _id: '123',
      },
    };
    let state = reducer(undefined, action);
    expect(state).toEqual(action.payload);
  });

  test('Should fail with no payload.', () => {
    let shouldFail = () => {
      reducer(undefined, {type: 'CLIENT_PROFILE_SET'});
    };
    expect(shouldFail).toThrow('profile required');
  });

  test('Should fail with invalid payload.', () => {
    let shouldFail = () => {
      reducer(undefined, {
        type: 'CLIENT_PROFILE_SET',
        payload: {},
      });
    };
    expect(shouldFail).toThrow('__VALIDATION_ERROR__ invalid profile');
  });

  test('Should return null on TOKEN_REMOVE.', () => {
    let state = reducer('hello world', {type: 'TOKEN_REMOVE'});
    expect(state).toEqual(null);
  });

  test('Should return the state.', () => {
    let state = reducer('hello world', {type: ''});
    expect(state).toEqual('hello world');
  });
});
