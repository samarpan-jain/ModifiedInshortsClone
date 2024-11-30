import { createSlice, CreateSliceOptions, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    newsSummary: "",
    isLoading: false,
}

export const summaryNewsSlice = createSlice({
    name: 'newsSummary',
    initialState,
    reducers: {
        getSummaryNewsRequestAction: (state) => {
            state.isLoading = true;
        },
        getSummaryNewsSuccessAction: (state, action: PayloadAction<string>) => {
            state.newsSummary = action.payload;
            state.isLoading = false;
        },
        getSummaryNewsFailedAction: (state, action: PayloadAction<string>) => {
            state.newsSummary = action.payload;
            state.isLoading = false;
        },
    }
} as CreateSliceOptions)

export const { getSummaryNewsRequestAction, getSummaryNewsSuccessAction, getSummaryNewsFailedAction } = summaryNewsSlice.actions;

export default summaryNewsSlice.reducer;