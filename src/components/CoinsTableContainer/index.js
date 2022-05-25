import React from 'react';
import { StyledCoinsTable } from '../../ui';

export const CoinsTableContainer = ({currencySymbol,className}) => {
  return (
    <div className={className}>
        <StyledCoinsTable currencySymbol={currencySymbol} />
    </div>
  )
}



