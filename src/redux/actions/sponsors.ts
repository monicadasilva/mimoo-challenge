import * as type from "../types";

export function getSponsors(sponsors?: Array<Object>) {
  return {
    type: type.GET_SPONSORS_REQUESTED,
    payload: sponsors,
  };
}
