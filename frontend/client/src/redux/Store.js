import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice'; // Import the default export as AuthReducer
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Auth'] // Specify the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, AuthReducer); // Use AuthReducer directly

export const store = configureStore({
    reducer: {
        Auth: persistedReducer // Correctly setting the persisted reducer under its slice name
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);