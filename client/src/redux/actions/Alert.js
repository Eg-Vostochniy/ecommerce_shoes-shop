import { ALERT } from '../types/Alert'

export const removeAlert = () => {
  return { type: ALERT, payload: {} }
}
