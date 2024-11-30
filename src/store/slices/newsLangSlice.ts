import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

const initialState = {
    newsLang:'en'
}

export const newsLangSlice = createSlice({
    name:'newsLang',
    initialState,
    reducers:{
        changeLang:(state)=>{
            if(state.newsLang == 'en'){
                return {newsLang:'hi'}
            }
            return {newsLang:'en'}
        }
    }
} as CreateSliceOptions)

export const {changeLang} = newsLangSlice.actions;
export default newsLangSlice.reducer