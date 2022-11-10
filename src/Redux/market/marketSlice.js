import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "@apollo/client";

import { GET_COINS } from "../../graphQL/Queries/index";

import { useQuery, useLazyQuery } from "@apollo/client";

const initialState = {
  status: "",
  coinsList: [],
  error: "",
};

function callToMarket() {
  return ({ loading, error, data } = useQuery(GET_COINS, {
    pollInterval: 10000,
  }));
}

const marketSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    get_CoinsList: (state, action) => {
      state.coinsList = action.payload;
    },
  },
});

export default marketSlice;
export const { get_CoinsList } = marketSlice.actions;

export const selectAllCoins = (state) => state.coins.coinsList;
