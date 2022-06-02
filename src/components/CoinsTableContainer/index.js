import React from "react";
import { useSelector } from "react-redux";
import { StyledCoinsTable } from "../../ui";

export const CoinsTableContainer = ({ className }) => {
  return (
    <div className={className}>
      <StyledCoinsTable/>
    </div>
  );
};
