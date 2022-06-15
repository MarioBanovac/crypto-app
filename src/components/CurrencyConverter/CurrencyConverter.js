import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";
import { CurrencyInput, CoinInput } from "components";
import { StyledFlexContainer } from "ui";

export default function CurrencyConverter(props) {
  const theme = useTheme();
  const { currency, currencySymbol, coinSymbol, price } = props;
  const currencyToCoinRatio = 1 / price;
  const coinToCurrencyRatio = 1 / currencyToCoinRatio;
  const [firstVal, setFirstVal] = useState();
  const [secondVal, setSecondVal] = useState();
  const changeFirstValue = ({ target: { value } }) => {
    setSecondVal(value);
    setFirstVal(Number(value.replaceAll(",", "")) * coinToCurrencyRatio);
  };

  const changeSecondValue = ({ target: { value } }) => {
    setFirstVal(value);
    setSecondVal(Number(value.replaceAll(",", "")) * currencyToCoinRatio);
  };

  return (
    <StyledFlexContainer margin="0 0 70px 0" justifyContent="center">
      <CurrencyInput
        currency={currency}
        currencySymbol={currencySymbol}
        value={firstVal}
        changeSecondValue={changeSecondValue}
      />
      <a>
        {" "}
        <FontAwesomeIcon color={theme.textColor} icon={faRightLeft} size={"lg"} />
      </a>
      <CoinInput
        changeFirstValue={changeFirstValue}
        value={secondVal}
        coinSymbol={coinSymbol}
      />
    </StyledFlexContainer>
  );
}
