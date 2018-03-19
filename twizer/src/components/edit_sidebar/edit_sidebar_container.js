import { connect } from 'react-redux'

import { fetchStorage, setupStorage } from '../../actions/local_storage_actions'
import EditSidebar from './edit_sidebar';

const mapStateToProps = state => ({
  settings: state.settings
})

const mapDispatchToProps = dispatch => ({
  fetchStorage: () => dispatch(fetchStorage()),
  setupStorage: settings => dispatch(setupStorage(settings))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSidebar);