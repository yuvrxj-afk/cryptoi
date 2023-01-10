import {
  Container,
  Box,
  RadioGroup,
  Radio,
  HStack,
  VStack,
  Badge,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Progress,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorC from "./ErrorC";
import { server } from "..";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  const params = useParams();
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        setCoin(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        // alert("Error occured!");
        setLoading(false);
        setError(true);
      }
    };
    fetchCoin();
  }, [params.id]);

  if (error) return <ErrorC message={"Error while fetching coin"} />;
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box borderWidth={"1"} width={"full"}>
            hi
          </Box>

          <RadioGroup value={currency} onChange={setCurrency} p={"3"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>₹ INR</Radio>
              <Radio value={"eur"}>€ EURO</Radio>
              <Radio value={"usd"}>$ USD</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
              Last Updated on{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>
            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>{" "}
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h} %
              </StatHelpText>
            </Stat>
            <Badge
              fontSize={"2xl"}
              textTransform={"unset"}
            >
              {`#${coin.market_cap_rank}`} In Market
            </Badge>
            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />
            <Box w={"full"} p={"4"}>
              <Item title={"Max S"} value={2} />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = (title, value) => <HStack></HStack>;

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress colorScheme={"teal"} w={"full"} value={50} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge colorScheme={"red"} children={low} />
      <Text fontSize={"sm"}>24H Ranges</Text>
      <Badge colorScheme={"green"} children={high} />
    </HStack>
  </VStack>
);

export default CoinDetails;
