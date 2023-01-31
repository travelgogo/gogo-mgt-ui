import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { GET_TOURS, GET_TOUR_DETAIL } from 'redux/actionCreators/types';
import { getTourDetailService, getToursService } from 'services/tour';
import { getToursSuccess } from '../actionCreators/tour'

function* getTourDetail({ tourId }: { type: string, tourId: string }) {
    try {
        const { data } = yield call(getTourDetailService, tourId)
    }
    catch (err) { }
}

function* getTours() {
    try {
        
        const  {data, status}  = yield call(getToursService)
        if ( status === 200 && data) {
            yield put(getToursSuccess(data.tours))
        }
    }
    catch (err) { }
}

function* watchTour() {
    yield takeLatest(GET_TOUR_DETAIL, getTourDetail);
    yield takeLatest(GET_TOURS, getTours);
}

export default function* tourSaga() {
    yield all([fork(watchTour)]);
}


