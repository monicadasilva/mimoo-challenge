import { call, put, takeEvery } from "redux-saga/effects";
import { ResponseGenerator } from "../types";

const apiUrl =
  "https://virtserver.swaggerhub.com/mimoo-tech/frontend-portal-challenge-api/1.0.0/brands";

function getBranchApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
}

function* fetchBrands(action: any) {
  try {
    const response: ResponseGenerator = yield call(getBranchApi);
    yield put({ type: "GET_BRANDS_SUCCESS", brands: response });
  } catch (error: any) {
    yield put({ type: "GET_BRANDS_FAILED", message: error.message });
  }
}

function* brandSaga() {
  yield takeEvery("GET_BRANDS_REQUESTED", fetchBrands);
}

export default brandSaga;
