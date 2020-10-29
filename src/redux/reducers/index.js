import { combineReducers } from 'redux'
import { chapter } from './chapter'
import { filter } from './filter'

export default combineReducers({
  chapter,
  filter
});