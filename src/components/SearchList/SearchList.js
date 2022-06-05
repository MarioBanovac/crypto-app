import React from "react";
import { StyledUl } from "ui";

export default function SearchList(props){
  const {list} = props;
  if (Object.keys(list).length > 0) {
    return (
      <StyledUl>
        {list.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </StyledUl>
    );
  }
  return null;
};
