export const usersReducer = (state, { type, payload }) => {
//   console.warn("state", state, "action.type", type);
  if (type == "SETALLUSERS") {
    return payload;
  }
  if (type == "ADDUSER") {
    return [...state, { ...payload }];
  }
  if (type == "CLEAR") {
    return [];
  }

  return state;
};
