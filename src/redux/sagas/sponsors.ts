import { call, put, takeEvery } from "redux-saga/effects";
import { ResponseGenerator } from "../types";

const apiUrl =
  "https://virtserver.swaggerhub.com/mimoo-tech/frontend-portal-challenge-api/1.0.0/sponsors";

function getApi() {
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

function* fetchSponsers(action: any) {
  try {
    const response: ResponseGenerator = yield call(getApi);
    yield put({ type: "GET_SPONSORS_SUCCESS", sponsors: response });
  } catch (error: any) {
    yield put({ type: "GET_SPONSORS_FAILED", message: error.message });
  }
}

function* sponsorSaga() {
  yield takeEvery("GET_SPONSORS_REQUESTED", fetchSponsers);
}

export default sponsorSaga;
