import React from 'react';
import { StyledCoinsTable } from '../../ui';

export const CoinsTableContainer = ({currency,currencySymbol,className}) => {
  return (
    <div className={className}>
        <StyledCoinsTable currency={currency} currencySymbol={currencySymbol} />
    </div>
  )
}



