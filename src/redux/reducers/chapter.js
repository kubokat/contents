import * as chaptersAction from '../actionTypes/chapters';

let init = [{ name: 'chapter1', ready: false, subchapters: [{ name: 'subchapter1', ready: false }] }];

export const chapter = function (state = init, action) {
  switch (action.type) {
    case chaptersAction.CHANGE_STATUS:
      return state.map(item => {

        if (item => item.name === action.parent) {

          let subchapters = [];

          if (item.subchapters.length) {
            subchapters = item.subchapters.map(subchapter => {
              if (subchapter.name === action.name) {
                subchapter.ready = !subchapter.ready;
              }

              return subchapter
            });

            const haveUnready = subchapters.find(item => item.ready === false);

            if (haveUnready) {
              item.ready = false;
            } else {
              item.ready = true;
            }

          }

          item.subchapters = subchapters;

        }

        return item;
      })


    case chaptersAction.ADD_CHAPTER:
      return [...state, { name: action.name, ready: false, subchapters: [] }]
    case chaptersAction.ADD_SUB_CHAPTER:
      const res =
        state.map(item => {
          if (item.name === action.parentName) {
            return { ...item, subchapters: [...item.subchapters, { name: action.name, ready: false }] }
          } else {
            return item;
          }
        })

      return res;

    default:
      return state
  }
}
