import { all } from "redux-saga/effects";
import sponsorSaga from "./sponsors";

export default function* rootSaga() {
  yield all([sponsorSaga()]);
}
