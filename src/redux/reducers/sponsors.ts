import * as type from "../types";

const initialState = {
  sponsors: [],
  loading: false,
  error: false,
};

export default function sponsors(state = initialState, action: type.iAction) {
  switch (action.type) {
    case type.GET_SPONSORS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_SPONSORS_SUCCESS:
      return {
        ...state,
        loading: false,
        sponsors: action.sponsors,
      };
    case type.GET_SPONSORS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
