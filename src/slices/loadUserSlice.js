import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadUserData = createAsyncThunk(
    'loadUser/loadUserData',
    async() => {
        const user= await fetch(`https://api.github.com/users/dustyneubauer/repos`);
            const json = await user.json();
            return json;
        }
)

export const loadUserSlice = createSlice({
    name: 'user',
    initialState:{
        userData: [],
        isLoading: false,
        hasError: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadUserData.fulfilled, (state,action) => {
            state.userData = action.payload;
            state.isLoading = false;
        })
        .addCase(loadUserData.pending, (state, action)=>{
            state.isLoading= true;
            state.hasError= false;
        })
        .addCase(loadUserData.rejected, (state, action) =>{
            state.userData= null;
            state.hasError= true;
        })
    }
})


export const selectUser = (state) => state.user.userData;
export const isLoading = (state) => state.user.isLoading;
export default loadUserSlice.reducer;