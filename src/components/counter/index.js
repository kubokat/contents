import { connect } from 'react-redux';
import Counter from './Counter';

const mapStateToProps = (state) => {

  let count = state.chapter.reduce((a, b) => {
    const subLength = b.subchapters.length;
    const subReadyLength = b.subchapters.filter(item => item.ready === true).length;

    return {
      subchaptersCounter: a.subchaptersCounter + subLength,
      readyCounter: a.readyCounter + subReadyLength
    };
  }, { subchaptersCounter: 0, readyCounter: 0 })

  let ready = 0;

  if (count.readyCounter > 0) {
    ready = (count.readyCounter / count.subchaptersCounter) * 100;
  }

  count['chaptersCounter'] = state.chapter.length;
  count['ready'] = ready;

  return count
}



export default connect(mapStateToProps)(Counter);