import { ALERT } from '../types/Alert'

export const alert = (state = {}, action) => {
  switch (action.type) {
    case ALERT:
      return action.payload

    default:
      return state
  }
}
