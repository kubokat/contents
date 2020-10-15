import * as chaptersAction from '../actionTypes/chapters';

export const addChapter = (name) => ({ type: chaptersAction.ADD_CHAPTER, name });
export const addSubChapter = (parentName, name) => ({ type: chaptersAction.ADD_SUB_CHAPTER, parentName, name });
export const changeStatus = (name, parent) => ({ type: chaptersAction.CHANGE_STATUS, name, parent });