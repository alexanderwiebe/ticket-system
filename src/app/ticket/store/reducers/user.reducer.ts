import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/backend.service";
import * as UserActions from "../actions/user.actions";

export const userFeatureKey = "user";

export interface State extends EntityState<User> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    adapter.upsertMany(users, { ...state, loading: false, loaded: true })
  ),
  on(UserActions.loadUsersFailure, (state, action) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);
