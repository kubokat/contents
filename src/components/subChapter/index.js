import { connect } from 'react-redux';
import SubChapter from './SubChapter'
import { changeStatus } from '../../redux/actions/chapters';

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (name, parent) => dispatch(changeStatus(name, parent))
});

const mapStateToProps = (state) => {
  return { chapters: state.chapter }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubChapter);