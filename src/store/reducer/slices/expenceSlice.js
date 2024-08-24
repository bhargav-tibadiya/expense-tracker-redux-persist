import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "TEST123",
    name: "Shopping",
    amount: 450,
    type: "EXPENCE"
  },
  {
    id: "TEST321",
    name: "Side Income",
    amount: 850,
    type: "INCOME"
  }

]

const expenceSlice = createSlice({
  name: 'IncomeExpence',
  initialState: initialState,
  reducers: {
    addIncome: (state, action) => {
      const { name, amount, type } = action.payload;
      state.push({
        id: nanoid(),
        name: name,
        amount: amount,
        type: type
      })
    },
    addExpence: (state, action) => {
      const { name, amount, type } = action.payload;
      state.push({
        id: nanoid(),
        name: name,
        amount: amount,
        type: type
      })
    },
    removeRecord: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    }
  }
})

export const { addIncome, addExpence, removeRecord } = expenceSlice.actions;

export default expenceSlice.reducer;