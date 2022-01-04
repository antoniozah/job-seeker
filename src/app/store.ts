import { configureStore } from '@reduxjs/toolkit';
import modalStatusReducer from '../features/modalStatusSlice';
import jobDetailsReducer from '../features/jobDetailsSlice';
import jobListReducer from '../features/jobListSlice';
import modalHandlingReducer from '../features/modalHandlingSlice';

export const store = configureStore({
    reducer: {
        modalStatus: modalStatusReducer,
        jobDetails: jobDetailsReducer,
        jobListData: jobListReducer,
        modalHandling: modalHandlingReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
