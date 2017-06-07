import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  GET_TOKEN_WITH_CREDENTIAL,
  GET_TOKEN_SUCCEED,
 } from '../actions'
import superagent from 'superagent'

const rootURL = 'https://fshezytp0m.execute-api.ap-northeast-1.amazonaws.com/prod'


function* watcher(){
  console.log('h');
  yield put({type:'HI'})
}

function* watcherForToken(){
  yield superagent
          .post(`${rootURL}/niceday/token`)
          .send({email:'wayne@gmail.com', password:'12345'})
  yield put({type:GET_TOKEN_SUCCEED, token:'aaa.bbb.ccc'})

}

function* rootSaga(){
  yield takeEvery(GET_TOKEN_WITH_CREDENTIAL, watcherForToken)
}

export default rootSaga
