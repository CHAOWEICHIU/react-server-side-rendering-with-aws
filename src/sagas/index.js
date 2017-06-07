import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
function* watcher(){
  console.log('h');
  yield put({type:'HI'})
}

function* rootSaga(){
  yield takeEvery("ok", watcher)
}

export default rootSaga
