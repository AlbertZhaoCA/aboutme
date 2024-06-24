import { createSlice } from "@reduxjs/toolkit";

export const editorSlice = createSlice(
    {
        name :'editor',
        initialState :{
            text:'',
            closed:true
        },
        reducers:{
            toggle:(state)=>{
                state.closed = !state.closed
            }

        } 

    }
)

export default editorSlice.reducer;