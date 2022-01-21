import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "./reducers/ProjectReducer";

const store = configureStore({
    reducer: {
      project: ProjectReducer,
    },
  });

  export default store