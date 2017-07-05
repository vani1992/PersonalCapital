import { FETCH_INSTITUTE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_INSTITUTE:
      return action.payload.data.products;
  }
  return state;
}