const initialState = {
  darkThemeEnabled: true,
  darkTheme: {
    name: "darkTheme",
    main: "#191B1F",
    secondary: "#1F2128",
    tertiary: "#2c2f36",
    textColor: "#fff",
    mainPositive: "#00FF5F",
    secondaryPositive: "#009719",
    tertiaryPositive: "#06D554",
    mainNegative: "#FE1040",
    mainNeutral: "#2172e5",
    transparentDark: "rgba(0,0,0,0)",
    primaryTopGradient: "rgba(0,255,95,0.15)",
    secondaryTopGradient: "rgba(64,64,64,1)",
    bottomGradient: "rgba(25,27,31,0.15)",
  },
  lightTheme: {
    main: "#FFF",
    secondary: "#FCFCFC",
    tertiary: "#eee",
    textColor: "#2C2F36",
    mainPositive: "#06D554",
    secondaryPositive: "#009719",
    tertiaryPositive: "#06D554",
    mainNegative: "#FE1040",
    mainNeutral: "#2172e5",
    transparentDark: "rgba(0,0,0,0)",
    primaryTopGradient: "rgba(37,80,234,0.41)",
    secondaryTopGradient: "rgba(64,64,64,1)",
    bottomGradient: "rgba(255,255,255,0.15)",
    name: "lightTheme",
  },
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
