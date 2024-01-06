import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReduce from './useSlice'
import videoReducer from './videoSlice'
import {
  persistStore,  // theo dõi trạng thái đã lưu
  persistReducer, // lưu trữ trạng thái
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// cấu hình 
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
// kết hợp các reducer
const rootReducer=combineReducers({user:userReduce, video:videoReducer})
// tích hợp
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
export const persistor=persistStore(store)