import { call, put, takeLatest } from 'redux-saga/effects';
import { performFetchUser, setUser } from './slice';
import AuthService from '../../services/auth.service';



function* fetchMoviesHandler() {
    try {
        const data = yield call(movieService.getAll);
        yield put(setMovies(data));
    } catch (error) {
        console.log(error);
    }
}

function* searchMoviesHandler(action) {
    try {
        const data = yield call(movieService.searchMovies, action.payload);
        yield put(setMovies(data));
    } catch (error) {
        console.log(error);
    }
}

export function* watchFetchMovies() {
    yield takeLatest(performFetchMovies.type, fetchMoviesHandler);
}

export function* watchSearchMovies() {
    yield takeLatest(performSearchMovies.type, searchMoviesHandler);
}