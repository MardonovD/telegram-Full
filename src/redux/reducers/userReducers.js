export const initialState = { users: [] };
export const userReducers = (state = initialState, action) => {
  if (action.type === "USERS") {
    return [...state.users, action.payload];
  }
  return state;
};
