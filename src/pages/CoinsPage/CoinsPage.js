import React from "react";
import {
  CoinsPageContainer,
  StyledChartsContainer,
  StyledCoinsTableContainer,
} from "ui";
import { StyledScrollToTop } from "ui";

export default function CoinsPage() {
  return (
    <CoinsPageContainer>
      <h1>Your overview</h1>
      <StyledChartsContainer />
      <StyledCoinsTableContainer />
      <StyledScrollToTop />
    </CoinsPageContainer>
  );
}
