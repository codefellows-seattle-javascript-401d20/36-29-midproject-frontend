import {combineReducers} from 'redux';
import token from './token.js';
import clientProfile from './client-profile.js';
import charitySearch from './charity-search.js';
export default combineReducers({token, clientProfile, charitySearch});
