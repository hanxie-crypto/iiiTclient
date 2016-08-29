import * as loadingActions from './loadingActions';

import * as tabbarActions from './tabbarActions';
import * as navUiActions from './navUiActions';
import * as netInfoActions from './netInfoActions';
import * as modalActions from './modalActions';

import * as classActions from './classActions';
import * as skillActions from './skillActions';

import * as communionActions from './communionActions';
import * as authorActions from './authorActions';
const actions = {};

Object.assign(actions,
              loadingActions, 
              tabbarActions, 
              navUiActions, 
              netInfoActions,
              modalActions,
              classActions,
              skillActions,
              communionActions,
              authorActions,);

module.exports = actions