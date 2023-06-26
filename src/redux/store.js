// store.js
"use client"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventos/eventSlice"; // Importa tus reducers
import userSlice from "./users/userSlice";
import alleventSlice from "./alleventos/alleventSlice";
// Combina tus reducers en un solo objeto
const rootReducer = combineReducers({
  events: eventSlice,
  users: userSlice,
  allevents: alleventSlice
  // Agrega otros reducers aquí si los tienes
});

  const store = configureStore({
    reducer: rootReducer,
  });


// Crea el wrapper para Next.js

export default store;
