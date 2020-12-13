import { connect } from 'react-redux';
import Link from '../components/link';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    filter: ownProps.filter === state.Filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink