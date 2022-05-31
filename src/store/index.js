import { combineReducers, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import currencyDetails from "./currency/currency.store";

const currencyDetailsConfig = {
    key:"currencyDetails",
    storage,
    whitelist:["currency","currencySymbol"],
}

const persistConfig = {
  key: "root",
  storage,
  blacklist:["currencyDetails"]
};

const reducers = combineReducers({
    currencyDetails:persistReducer(currencyDetailsConfig,currencyDetails)
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
