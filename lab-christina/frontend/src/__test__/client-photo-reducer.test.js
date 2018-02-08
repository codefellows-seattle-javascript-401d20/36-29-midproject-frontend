import reducer from '../reducer/client-photos.js';

describe('clientPhoto reducer', () => {
  test('Intial state shuld be null', () => {
    let state = reducer(undefined, {type: ''});
    expect(null).toEqual(null);
  });

  test('Create the client photo', () => {
    let action  = {
      type: 'CLIENT_PHOTO_CREATE',
      payload: {
        account: '88888',
        firstName: 'Jimmy',
        lastName: 'John',
        photo: 'charity-image.jpg',
      },
    };

    let state = reducer(undefined, action);
    expect(state).toEqual(action.payload);
  });

  test('Return null on TOKEN_REMOVE', () => {
    let state = reducer('hello sun', {type: 'TOKEN_REMOVE'});
    expect(state).toEqual(null);
  });

  test('Return the state', () => {
    let state = reducer('hello moon', {type: ''});
    expect(state).toEqual('hello moon');
  });
});
