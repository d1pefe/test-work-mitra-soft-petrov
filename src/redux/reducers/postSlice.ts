import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "../store";
import {CardTypes, CommTypes} from "../../utils/@globalTypes";

type InitialType = {
    postsList: CardTypes[];
    commList: CommTypes[];
};

const initialState: InitialType = {
    postsList: [],
    commList: []
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
    },
});

export const {
    getAllPosts,
    setAllPosts,
    getAllComm,
    setAllComm
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
    getAllPosts: (state: RootState) => state.posts.postsList,
    getAllComm: (state: RootState) => state.posts.commList,
};
