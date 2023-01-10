import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorC from "./ErrorC";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  
  const currencySymbol = currency==="inr"?"₹" :currency==="usd"?"$":"€"

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        alert("Error occured!");
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorC message={"Error while fetching coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                price={i.current_price}
                name={i.name}
                img={i.image}
                url={i.url}
                key={i.id}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
                // rank={i.trust_score_rank}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
