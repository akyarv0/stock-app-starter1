import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //burada yazan statelere bir çok yerde ihtiyacımız olduyğu için global state e hepsini atıyoruz.
  purchases: [],
  sales: [],
  firms: [],
  products: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    // getFirmsSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.firms = payload
    // },
    // getSalesSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.sales = payload
    // },

    //? action.payload.path
    // getStockSuccess: (state, action) => {
    //   state.loading = false
    //   state[action.payload.path] = action.payload.stockData
    // },

    getStockSuccess: (state, { payload: { path, stockData } }) => {
      state.loading = false; //destr yaptık.
      state[path] = stockData;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getFirmsSuccess,
  getSalesSuccess,
  getStockSuccess,
  fetchFail,
} = stockSlice.actions;

export default stockSlice.reducer;
