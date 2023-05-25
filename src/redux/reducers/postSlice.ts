import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "../store";
import {CardTypes, CommTypes} from "../../utils/@globalTypes";

type InitialType = {
    postsList: CardTypes[];
    commList: CommTypes[];
    auth: CardTypes | undefined;
    isLoading: boolean;
};

const initialState: InitialType = {
    postsList: [],
    commList: [],
    auth: undefined,
    isLoading: false,
};

const postSlice = createSlice({
    name: "selected post",
    initialState,
    reducers: {
        getAllPosts: (_, __: PayloadAction<undefined>) => {
        },
        setAllPosts: (state, action: PayloadAction<CardTypes[]>) => {
            state.postsList = action.payload;
        },
        getAllComm: (_, __: PayloadAction<undefined>) => {
        },
        setAllComm: (state, action: PayloadAction<CommTypes[]>) => {
            state.commList = action.payload;
        },
        setAuth: (state, action: PayloadAction<CardTypes>) => {
            state.auth = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const {
    getAllPosts,
    setAllPosts,
    getAllComm,
    setAllComm,
    setAuth,
    setLoading,
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
    getAllPosts: (state: RootState) => state.posts.postsList,
    getAllComm: (state: RootState) => state.posts.commList,
    getAuth: (state: RootState) => state.posts.auth,
    getLoading: (state: RootState) => state.posts.isLoading,
};
