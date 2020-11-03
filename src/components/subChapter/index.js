import { connect } from 'react-redux';
import SubChapter from './SubChapter'
import { changeStatus } from '../../redux/slices/chapters';

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (payload) => dispatch(changeStatus(payload))
});

const mapStateToProps = (state) => {
  return { chapters: state.chapter.present }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubChapter);
