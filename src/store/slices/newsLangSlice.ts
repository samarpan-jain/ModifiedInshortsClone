import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

export const newsLangSlice = createSlice({
    name:'newsLang',
    initialState: 'en',
    reducers:{
        changeLang:(state)=>{
            if(state == 'en'){
                return 'hi'
            }
            return 'en'
        }
    }
} as CreateSliceOptions)

export const {changeLang} = newsLangSlice.actions;
export default newsLangSlice.reducer