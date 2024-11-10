import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    task: []//key
  },
  reducers: {
    addData: (state, action) => {
      const wrk = action.payload;
      const mydata = { id: Date.now(), work: wrk };
      state.task.push(mydata);
    },
  },
});

// Correct export of actions
export const { addData } = todoSlice.actions;

// Ans
export default todoSlice.reducer;
