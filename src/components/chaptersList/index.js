import { connect } from 'react-redux';
import ChaptersList from './ChaptersList';

const filters = {
  SHOW_ALL: () => true,
  SHOW_READY: (chapter) => !!chapter.ready,
  SHOW_UNREADY: (chapter) => !chapter.ready,
}

const mapStateToProps = (state) => {
  return { chapters: state.chapter.filter(filters[state.filter]) }
}

export default connect(mapStateToProps)(ChaptersList);