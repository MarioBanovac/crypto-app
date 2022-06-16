import React from "react";
import { useTheme } from "styled-components";
import { StyledFlexContainer, StyledSpan, StyledNumberFormat } from "ui";

export default function CoinInput(props) {
  const theme = useTheme();

  const { coinSymbol, value, changeFirstValue } = props;
  return (
    <StyledFlexContainer
      alignItems="center"
      width="331px"
      height="45px"
      margin="0 0 0 32px"
    >
      <StyledSpan
        borderRadius="12px 0 0 12px"
        lineHeight="45px"
        backgroundColor={theme.tertiaryPositive}
        width="83px"
      >
        {coinSymbol.toUpperCase()}
      </StyledSpan>
      <StyledFlexContainer
        width="248px"
        height="100%"
        alignItems="center"
        margin="0 32px 0 0"
      >
        <StyledSpan
          lineHeight="45px"
          backgroundColor={theme.tertiary}
          padding="0 0 0 10px"
        >
          {coinSymbol.toUpperCase()}
        </StyledSpan>
        <StyledNumberFormat
          value={value}
          border="none"
          caretColor={theme.textColor}
          color={theme.textColor}
          borderRadius="0 12px 12px 0"
          backgroundColor={theme.tertiary}
          padding="9px"
          width="100%"
          height="100%"
          thousandSeparator={true}
          allowNegative={false}
          decimalScale={8}
          onChange={changeFirstValue}
        />
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
}
