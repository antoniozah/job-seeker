import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IJobDetails } from '../interfaces';

export interface JobDetailsState {
    fethcedJobList: any;
}

const initialState: JobDetailsState = {
    fethcedJobList: [],
};

export const jobListSlice = createSlice({
    name: 'jobDetails',
    initialState,
    reducers: {
        setJobList: (state, action: PayloadAction<any>) => {
            state.fethcedJobList = {
                ...action.payload,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setJobList } = jobListSlice.actions;

export default jobListSlice.reducer;
