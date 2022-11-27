import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StorageService } from "@services";
import { STORAGE_KEYS } from "@utils";

const slice = createSlice({
    name: "presentation",
    initialState: {
        done: false
    },
    reducers: {
        donePresentation(state, action: PayloadAction<boolean>) {
            state.done = action.payload
            const storageService = new StorageService()
            storageService.setItem(STORAGE_KEYS.DONE_PRESENTATION, true)
        }
    }
})

export const {donePresentation} = slice.actions
export default slice.reducer