import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './slices/cart-slice';
import { filterReducer } from './slices/filter-slice';
import { pizzaInfoReducer } from './slices/pizza-info-slice';
import { pizzasReducer } from './slices/pizzas-slice';

const rootReducer = combineReducers({
  pizza: pizzasReducer,
  filter: filterReducer,
  cart: cartReducer,
  pizzaInfo: pizzaInfoReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
