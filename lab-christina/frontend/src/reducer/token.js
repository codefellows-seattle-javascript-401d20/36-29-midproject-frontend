import * as util from '../lib/util.js';

let token = util.cookieFetch('charity-choice-Token');
let intialState = token ? token : null;

export default (state=intialState, {type, payload}) => {
  switch(type){
  case 'TOKEN_SET':
    return payload;
  case 'TOKEN_REMOVE':
    return null;
  default:
    return state;
  }
};
