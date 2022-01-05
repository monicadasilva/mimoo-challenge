import * as type from "../types";

export function getBrands(brands?: Array<Object>) {
  return {
    type: type.GET_BRANDS_REQUESTED,
    payload: brands,
  };
}
