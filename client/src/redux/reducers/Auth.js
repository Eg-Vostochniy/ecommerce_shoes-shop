import { AUTH } from '../types/Auth'

export const auth = (state = {}, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, user: action.payload }

    default:
      return state
  }
}
