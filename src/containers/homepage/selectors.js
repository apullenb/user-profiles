import { createSelector } from "reselect";

const homeState = (state) => state.homepage;

export const makeSelectUsers = createSelector(
  homeState,
  (homepage) => homepage.users
);
