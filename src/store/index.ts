import { configureStore } from '@reduxjs/toolkit';
import presentationStore from './presentationStore'

export const store = configureStore({
  reducer: {
    presentation: presentationStore,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export * from './presentationStore'