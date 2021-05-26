import storage from 'redux-persist/lib/storage';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import complexContactsReducer from './contacts/contact-reducer';
import complexAuthReducer from './auth/auth-reducer';

const persistConfig = {
   key: 'auth', //название хранителя
   storage,
   whitelist: ['token'],
};

const middleware = [
   ...getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
];

export const store = configureStore({
   reducer: {
      phonebook: complexContactsReducer,
      auth: persistReducer(persistConfig, complexAuthReducer),
   },
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
