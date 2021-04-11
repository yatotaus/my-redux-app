import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://reference.intellisense.io/thickenernn/v1/referencia';

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

function* fetchData() {
    try {
        const data = yield call(getApi);
        yield put({ type: 'GET_DATA_SUCCESS', data: data });
    } catch (e) {
        yield put({ type: 'GET_DATA_FAILED', message: e.message });
    }
}

function* dataSaga() {
    yield takeEvery('GET_DATA_REQUESTED', fetchData);
}

export default dataSaga;