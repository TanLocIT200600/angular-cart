import { createReducer, on } from "@ngrx/store";
import { getNowPlaying } from '../actions/movies.actions';

export const initialState = {
  data: {},
}

export const movieReducer = createReducer(
  initialState,
  on(getNowPlaying, (state) => state),
)