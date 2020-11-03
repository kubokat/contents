import { connect } from 'react-redux';
import AddChapter from './AddChapter'
import AddSubChapter from './AddSubChapter'
import { addChapter, addSubChapter } from '../../redux/slices/chapters';

const mapStateToProps = (state) => {
  return { chapters: state.chapter.present }
}

const mapDispatchToProps = (dispatch) => ({
  addChapter: (name) => dispatch(addChapter({ "name": name, "ready": false, "subchapters": [] })),
  addSubChapter: (payload) => dispatch(addSubChapter(payload))
});

export const ConnectedAddChapter = connect(mapStateToProps, mapDispatchToProps)(AddChapter);
export const ConnectedAddSubChapter = connect(mapStateToProps, mapDispatchToProps)(AddSubChapter)

