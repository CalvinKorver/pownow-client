import { connect } from 'react-redux'
import { toggleTodo } from '../lib/actions'
import { VisibilityFilters } from '../lib/actions'
import PhoneList from '../components/PhoneList'

const mapStateToProps = state => ({
    phone: state.phone
})

export default connect(
    mapStateToProps
)(PhoneList)

