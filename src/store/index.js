import { combineReducers, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import currencyDetails from "./currency/currency.store";
import theme from "./theme/theme.store";

const currencyDetailsConfig = {
  key: "currencyDetails",
  storage,
  whitelist: ["currency", "currencySymbol"],
};

const themeConfig = {
  key: "theme",
  storage,
  whitelist: ["darkThemeEnabled", "darkTheme", "lightTheme"],
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["currencyDetails", "theme"],
};

const reducers = combineReducers({
  currencyDetails: persistReducer(currencyDetailsConfig, currencyDetails),
  theme: persistReducer(themeConfig, theme),
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
