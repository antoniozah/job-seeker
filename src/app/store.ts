import { configureStore } from '@reduxjs/toolkit';
import modalStatusReducer from '../features/modalStatusSlice';
import jobDetailsReducer from '../features/jobDetailsSlice';
import modalHandlingReducer from '../features/modalHandlingSlice';

export const store = configureStore({
    reducer: {
        modalStatus: modalStatusReducer,
        jobDetails: jobDetailsReducer,
        modalHandling: modalHandlingReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
