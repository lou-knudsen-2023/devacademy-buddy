import { combineReducers } from 'redux'
import localReducer from './localReducer'
import internationalReducer from './internationalReducer'

export default combineReducers({
  localReducer,
  internationalReducer,
})
