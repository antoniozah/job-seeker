import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IJobDetails } from '../interfaces';

export interface JobDetailsState {
    fetchedJobDetails: any;
}

const initialState: JobDetailsState = {
    fetchedJobDetails: [],
};

export const jobDetailsSlice = createSlice({
    name: 'jobDetails',
    initialState,
    reducers: {
        setJobDetails: (state, action: PayloadAction<any>) => {
            state.fetchedJobDetails = action.payload;
        },
        resetJobDetails: (state) => {
            state.fetchedJobDetails = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const { setJobDetails, resetJobDetails } = jobDetailsSlice.actions;

export default jobDetailsSlice.reducer;
