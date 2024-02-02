import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    users : []
}
const Slice = createSlice({
    name: 'addUserSlice',
    initialState,
    reducers:{
        addUser:(state:any, action:any) =>{
            console.log(action);
            
            const data = {
                id : nanoid(),
                name: action.payload
            }
            // state.users.push(data);
            return {
                ...state,
                users: [...state.users, data] // Return a new state object with updated users array
              };
        }
    }
});

export const {addUser} = Slice.actions;
export default Slice.reducer;
