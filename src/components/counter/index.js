import { connect } from 'react-redux';
import Counter from './Counter';

const mapStateToProps = (state) => {
  return { chapters: state.chapter }
}

export default connect(mapStateToProps)(Counter);