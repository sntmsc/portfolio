import projectsData from "../projectsData";
import { createSlice } from "@reduxjs/toolkit";
const initialProject = {
name:'',
id:0,
tags:[''],
img:'',
desc:'',
website:'#',
github:'#'}

const projectSlice = createSlice({
    name: "projectSlice",
    initialState: initialProject,
    reducers: {
      selectProject: (state, action) => {
        return projectsData[action.payload];
      },
    }
})

export const { selectProject } = projectSlice.actions;
export default projectSlice.reducer