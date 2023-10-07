import { createSlice } from '@reduxjs/toolkit';

const middlewareActions = {
    performFetchUser: () => { },
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.data = [...action.payload];
        },
        ...middlewareActions,
    },
});

export const { setUser, performFetchUser } =
    authSlice.actions;
export default authSlice.reducer;





