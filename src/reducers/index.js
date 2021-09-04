import { combineReducers } from 'redux';

import assets from './assets';
import auth from './auth';

export const reducers = combineReducers({ assets, auth });
