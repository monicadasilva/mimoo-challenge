import { all } from "redux-saga/effects";
import brandSaga from "./brands";
import sponsorSaga from "./sponsors";

export default function* rootSaga() {
  yield all([sponsorSaga(), brandSaga()]);
}
