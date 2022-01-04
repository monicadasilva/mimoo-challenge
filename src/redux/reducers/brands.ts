import * as type from "../types";

const initialState = {
  brands: [],
  loading: false,
  error: false,
};

export default function brands(state = initialState, action: type.iAction) {
  switch (action.type) {
    case type.GET_BRANDS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: action.brands,
      };
    case type.GET_BRANDS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
