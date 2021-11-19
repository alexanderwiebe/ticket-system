import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUser from "../reducers/user.reducer";

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = fromUser.adapter.getSelectors(selectUserState);

export const selectUsersLoaded = createSelector(
  selectUserState,
  (state: fromUser.State) => state.loaded
);
