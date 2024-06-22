import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import searchNewsReducer from "./slices/searchNewsSlice"
import newsLangReducer from "./slices/newsLangSlice"

const store = configureStore({
    reducer:{
        getNews: newsReducer,
        searchNews: searchNewsReducer,
        newsLang: newsLangReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;