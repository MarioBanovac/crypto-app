import React from "react";
import { StyledSearchList } from "../../ui";

export const SearchList = (props) => {
  const list = props.list;
  if (Object.keys(list).length > 0) {
    return (
      <StyledSearchList>
        {list.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </StyledSearchList>
    );
  }
  return null;
};
