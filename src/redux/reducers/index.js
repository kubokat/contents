import { combineReducers } from 'redux'
import { filter } from './filter'
import chapter from '../slices/chapters'
import undoable from 'redux-undo';

export default combineReducers({
  chapter: undoable(chapter),
  filter
});