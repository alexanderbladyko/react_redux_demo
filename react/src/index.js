import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

import * as actions from './actions'

const store = createStore(
  rootReducer, {
    employees: {
      date: new Date(),
      floors: Array.apply(null, {length: 8}).map(() => ({
        people: []
      })),
      canteen: {
        people: []
      }
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(actions.enterFloor(2, 'a_abramov'))
store.dispatch(actions.enterFloor(3, 'n_nikolaev'))
store.dispatch(actions.enterFloor(4, 's_smirnov'))
store.dispatch(actions.enterFloor(2, 'i_ivanov'))
store.dispatch(actions.enterFloor(5, 'p_potapov'))
store.dispatch(actions.enterFloor(1, 'k_kirilenko'))
store.dispatch(actions.enterFloor(0, 'b_borisov'))

store.dispatch(actions.enterCanteen('p_potapov'))
store.dispatch(actions.enterCanteen('k_kirilenko'))
store.dispatch(actions.enterCanteen('t_testov'))
store.dispatch(actions.enterCanteen('m_mironov'))

store.dispatch(actions.leaveFloor(0, 'b_borisov'))

store.dispatch(actions.leaveCanteen('p_potapov'))