import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalStatusState {
    modalError: {
        hasError: boolean;
        errorMessage: {
            message?: string;
            hasBtn?: boolean;
        };
    };
}

const initialState: ModalStatusState = {
    modalError: {
        hasError: false,
        errorMessage: {},
    },
};

export const modalStatusSlice = createSlice({
    name: 'modalStatus',
    initialState,
    reducers: {
        ErrorHandler: (state) => {
            state.modalError.hasError = !state.modalError.hasError;
        },
        setErrorMessage: (state, action: PayloadAction<any>) => {
            if (action.payload === '401') {
                state.modalError.errorMessage = {
                    hasBtn: true,
                    message: 'Only authenticated users can access the data',
                };
            } else {
                state.modalError.errorMessage = {
                    hasBtn: false,
                    message: 'Job post does not exist',
                };
            }
        },
        clearErrorMessage: (state) => {
            if (!state.modalError.hasError) {
                state.modalError.errorMessage = {
                    hasBtn: false,
                    message: '',
                };
                state.modalError.hasError = false;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { ErrorHandler, setErrorMessage, clearErrorMessage } =
    modalStatusSlice.actions;

export default modalStatusSlice.reducer;
