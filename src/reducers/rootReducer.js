export default function listReducer(state = {}, action){
  switch (action.type) {
    case 'UPDATE_SORT':
      return Object.assign({}, state, { filter: action.payload.filter })
    case 'SHOW_MORE':
      return Object.assign({}, state, { displayLength: action.payload.displayLength})
    case 'SHOW_YEAR':
      return Object.assign({}, state, { ...action.payload })
    case 'SHOW_MONTHS':
      return Object.assign({}, state, { ...action.payload })
    case 'INCREASE_MONTH':
      return Object.assign({}, state, { month: action.payload })
    default:
      return state
  }
}
