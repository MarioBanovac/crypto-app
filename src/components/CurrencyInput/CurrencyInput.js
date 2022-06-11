import React from "react";
import { StyledFlexContainer, StyledSpan, StyledNumberFormat } from "ui";

export default function CurrencyInput(props) {
  const { currency, currencySymbol, changeSecondValue, value } = props;
  return (
    <StyledFlexContainer alignItems="center" width="331px" height="45px">
      <StyledSpan
        borderRadius="12px 0 0 12px"
        lineHeight="45px"
        backgroundColor="rgb(6, 213, 84)"
        width="83px"
      >
        {currency}
      </StyledSpan>
      <StyledFlexContainer
        width="248px"
        height="100%"
        alignItems="center"
        margin="0 32px 0 0"
      >
        <StyledSpan
          lineHeight="45px"
          backgroundColor="#2C2D33"
          padding="0 0 0 10px"
        >
          {currencySymbol}
        </StyledSpan>
        <StyledNumberFormat
          value={value}
          border="none"
          caretColor="#fff"
          color="#fff"
          borderRadius="0 12px 12px 0"
          backgroundColor="#2C2D33"
          padding="9px"
          width="100%"
          height="100%"
          thousandSeparator={true}
          allowNegative={false}
          decimalScale={8}
          onChange={changeSecondValue}
        />
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
}
