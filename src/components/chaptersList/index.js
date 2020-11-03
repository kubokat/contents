import { connect } from 'react-redux';
import ChaptersList from './ChaptersList';
import { ActionCreators } from 'redux-undo';

const filters = {
  SHOW_ALL: () => true,
  SHOW_READY: (chapter) => !!chapter.ready,
  SHOW_UNREADY: (chapter) => !chapter.ready,
}

const mapStateToProps = (state) => {
  return { 
    chapters: state.chapter.present.filter(filters[state.filter]),
  }
}

const mapDispatchToProps = (dispatch) => ({
  undo: () => dispatch(ActionCreators.undo())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChaptersList);