import { connect } from 'react-redux'

import * as actions from '../actions'
import EmployeesPlaces from '../components/EmployeesPlaces'

export default connect(
    (state) => {
        return {
            employees: state.employees,
        }
    },
    actions
)(EmployeesPlaces);