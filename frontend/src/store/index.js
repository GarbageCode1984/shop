import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { PAUSE, PERSIST, REHYDRATE, persistReducer } from "redux-persist";
import { FLUSH } from "redux-persist/es/constants";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST],
            },
        }),
});

export const persistor = persistStore(store);
