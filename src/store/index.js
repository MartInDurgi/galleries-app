import { configureStore } from '@reduxjs/toolkit';
//import movieReducer from './movies/slice';
//import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        sagaMiddleware,
    ],
});

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}

export default store;


















