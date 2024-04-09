import { Action, ThunkAction } from "@reduxjs/toolkit";
import { HomeState } from "./home.type";

export type RootState= {
    home: HomeState;
  }
  
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;