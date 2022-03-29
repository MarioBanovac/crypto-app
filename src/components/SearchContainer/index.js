import React from "react";
import { ReactComponent as SearchLogo } from "../../icons/search.svg";
import { StyledSearchContainer } from "../../ui";

export const SearchContainer = (props) => {
  return (
    <StyledSearchContainer>
      <SearchLogo />
      <input type={"search"} placeholder="Search..." />
    </StyledSearchContainer>
  );
};
