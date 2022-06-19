import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import currencyDetails from "./currency/currency.store";
import theme from "./theme/theme.store";
import charts from "./charts/charts.store";
import coins from "./coins/coins.store";
import coin from "./coin/coin.store";

const currencyDetailsConfig = {
  key: "currencyDetails",
  storage,
  whitelist: ["currency", "currencySymbol"],
};

const themeConfig = {
  key: "theme",
  storage,
  whitelist: ["darkThemeEnabled"],
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["currencyDetails", "theme", "charts", "coins","coin"],
};

const reducers = combineReducers({
  currencyDetails: persistReducer(currencyDetailsConfig, currencyDetails),
  theme: persistReducer(themeConfig, theme),
  charts,
  coins,
  coin
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
