const initialState = {
  tableData: [],
  fakeDates: [...Array(169).fill(0)],
  page: 1,
};
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_ERROR = "GET_COINS_ERROR";
export const DELETE_COINS_SUCCESS = "DELETE_COINS_SUCCESS";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COINS_SUCCESS:
      return {
        ...state,
        tableData: state.tableData.concat(action.payload),
        page: state.page + 1,
      };
    case DELETE_COINS_SUCCESS:
      return {
        ...state,
        tableData: [],
        page: 1,
      };
    default:
      return state;
  }
}
