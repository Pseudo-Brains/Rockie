import { useDispatch, useSelector } from "react-redux";

import { apolloClient } from "../../util/apolloConfig";

import { GET_COINS } from "../../graphQL/Queries/index";
import { selectAllCoins, get_CoinsList } from "../../Redux/market/marketSlice";

export default function useGetCoins() {
  const dispatch = useDispatch();
  const coinsList = useSelector(selectAllCoins);
  const getAllCoins = async () => {
    const response = await apolloClient.query({
      query: GET_COINS,
      // pollInterval:10000
    });
    dispatch(get_CoinsList(response.data.coins));
  };
  return { getAllCoins, coinsList };
}
