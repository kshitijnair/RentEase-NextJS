import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  userName: string;
  isAuth: boolean;
  uid: string;
};

const initialState: InitialState = {
  value: {
    userName: "",
    isAuth: false,
    uid: "",
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
        return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
        state.value.isAuth = true;
        state.value.userName = action.payload;
        state.value.uid = "a34jb1094h1j0";
    }
  }
});

export const {logIn, logOut} = auth.actions;
export default auth.reducer;
