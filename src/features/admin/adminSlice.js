import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    img: "",
    live_link: "",
    frontend_link: "",
    server_link: "",
    project_type: "",
    features: [],
};

const adminSlice = createSlice({
    name: "addProject",
    initialState,
    reducers: {
        addFeature: (state, action) => {
            // console.log(state.features)
            state.features.push(action.payload)
        },
    },
});

export const { addFeature } = adminSlice.actions;

export default adminSlice.reducer;
