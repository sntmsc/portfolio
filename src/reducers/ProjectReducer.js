import projectsData from "../projectsData";
import { createSlice } from "@reduxjs/toolkit";
const initialProject = {
name:'',
id:0,
tags:[''],
img:'',
desc:'',
website:'#',
github:'#',
footer:''}

const projectSlice = createSlice({
    name: "projectSlice",
    initialState: initialProject,
    reducers: {
      selectProject: (state,action) => {
        return projectsData[action.payload];
      },
      cleanProject: () =>{
        return initialProject
      }
    }
})

export const { selectProject, cleanProject } = projectSlice.actions;
export default projectSlice.reducer