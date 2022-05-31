import { CURRENCY_CHANGE_CURRENCY_SUCCESS } from "./currency.store"

export const changeCurrency = (currency)=>(
    {
    type:CURRENCY_CHANGE_CURRENCY_SUCCESS,
    payload:currency
})
