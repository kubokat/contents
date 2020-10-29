import { connect } from 'react-redux';
import AddChapter from './AddChapter'
import AddSubChapter from './AddSubChapter'
import { addChapter, addSubChapter } from '../../redux/actions/chapters';

const mapStateToProps = (state) => {
  return { chapters: state.chapter }
}

const mapDispatchToProps = (dispatch) => ({
  addChapter: (name) => dispatch(addChapter(name)),
  addSubChapter: (parentName, name) => dispatch(addSubChapter(parentName, name))
});

export const ConnectedAddChapter = connect(mapStateToProps, mapDispatchToProps)(AddChapter);
export const ConnectedAddSubChapter = connect(mapStateToProps, mapDispatchToProps)(AddSubChapter)

