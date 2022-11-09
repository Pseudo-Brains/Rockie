import { gql } from "@apollo/client";

export const GET_COINS = gql`
  query Getcoins {
    coins {
      image
      current_price
      market_cap
      market_cap_change_percentage_24h
      name
      price_change_24h
      price_change_percentage_24h
      sparkline_in_7d {
        price
      }
      market_cap
    }
  }
`;
