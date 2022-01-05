import { createSlice } from '@reduxjs/toolkit';

export interface ModalStatusState {
    value: boolean;
}

const initialState: ModalStatusState = {
    value: false,
};

export const modalStatusSlice = createSlice({
    name: 'modalStatus',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.value = !state.value;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleModal } = modalStatusSlice.actions;

export default modalStatusSlice.reducer;
