import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Http } from '../../lib/Http'

const initialState = [];

export const fetchChapters = createAsyncThunk(
  'chapters/fetchChapters',
  async () => {
    return Http.get()
  }
)

export const addChapter = createAsyncThunk(
  'chapters/addChapter',
  async (chapter, { getState }) => {
    const newState = [...getState().chapter.present, chapter];
    const request = { "object": newState };

    await Http.put(request);
    return newState;
  }
)

export const addSubChapter = createAsyncThunk(
  'chapters/addSubChapter',
  async ({ parent, name }, { getState }) => {
    const newState = getState().chapter.present.map(item => {
      if (item.name === parent) {
        return { ...item, subchapters: [...item.subchapters, { name: name, ready: false }] }
      } else {
        return item;
      }
    });

    const request = { "object": newState };

    await Http.put(request);

    return newState;
  }
)

export const changeStatus = createAsyncThunk(
  'chapters/changeStatus',
  async ({ parent, name }, { getState }) => {
    const newState = getState().chapter.present.map(item => {
      let obj = { ...item };

      if (obj.name === parent) {

        if (obj.subchapters.length) {
          obj.subchapters = obj.subchapters.map(subchapter => {
            let mainSubchapter = { ...subchapter }

            if (mainSubchapter.name === name) {
              mainSubchapter.ready = !mainSubchapter.ready;
            }

            return mainSubchapter
          });
        }

        obj.ready = !obj.subchapters.find(item => item.ready === false)

      }

      return obj;
    });

    const request = { "object": newState };

    await Http.put(request);

    return newState;
  }
)

const chaptersSlice = createSlice({
  name: 'chapters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchChapters.fulfilled]: (state, action) => action.payload.object,
    [addChapter.fulfilled]: (state, action) => action.payload,
    [addSubChapter.fulfilled]: (state, action) => action.payload,
    [changeStatus.fulfilled]: (state, action) => action.payload
  }
})

export default chaptersSlice.reducer
