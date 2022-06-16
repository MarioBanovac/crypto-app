const initialState = {
  darkThemeEnabled: true,
};

export const SWITCH_THEME = "SWITCH_THEME";

export default function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        darkThemeEnabled: !state.darkThemeEnabled,
      };
    default:
      return state;
  }
}
