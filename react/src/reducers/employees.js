const todos = (state = {}, action) => {
  let index
  switch (action.type) {
    case 'ENTER_FLOOR':
      index = state.floors[action.floor].people.indexOf(action.employee)
      if (index === -1) {
        return {
          ...state,
          floors: [
            ...state.floors.slice(0, action.floor),
            {
              people: [...state.floors[action.floor].people, action.employee],
            },
            ...state.floors.slice(action.floor + 1),
          ],
        }
      }
      return state
    case 'LEAVE_FLOOR':
      index = state.floors[action.floor].people.indexOf(action.employee)
      if (index !== -1) {
        return {
          ...state,
          floors: [
            ...state.floors.slice(0, action.floor),
            {
              people: state.floors[action.floor].people.filter(e => e !== action.employee),
            },
            ...state.floors.slice(action.floor + 1),
          ],
        }
      }
      return state
    case 'ENTER_CANTEEN':
      index = state.canteen.people.indexOf(action.employee)
      if (index === -1) {
        return {
          ...state,
          canteen: {
            people: [...state.canteen.people, action.employee],
          },
        }
      }
      return state
    case 'LEAVE_CANTEEN':
      index = state.canteen.people.indexOf(action.employee)
      if (index !== -1) {
        return {
          ...state,
          canteen: {
            people: state.canteen.people.filter(e => e !== action.employee),
          },
        }
      }
      return state
    default:
      return state
  }
}

export default todos
