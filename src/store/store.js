import { configureStore } from "@reduxjs/toolkit";
import expenceReducer from "./reducer/slices/expenceSlice";
import toast from "react-hot-toast";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("savedState", serializedState);
  } catch (e) {
    toast.error(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("savedState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    toast.error(e);
    return undefined;
  }
}

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    IncomeExpence: expenceReducer,
  },
  preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));