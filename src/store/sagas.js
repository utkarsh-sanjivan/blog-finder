import { fork } from 'redux-saga/effects'
import Users from './Users/sagas';

export default function* root() {
  yield fork(Users);
}