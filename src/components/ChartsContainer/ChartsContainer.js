import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledPriceChartContainer,
  StyledVolumeChartContainer,
  StyledTimeFrameChanger,
  StyledFlexContainer,
} from "ui";
import { getActiveTimeFrame, usePrevious } from "utils";
import { getCharts } from "store/charts/charts.actions";

export default function ChartsContainer(props) {
  const dispatch = useDispatch();
  const { currencySymbol } = useSelector((state) => state.currencyDetails);
  const { isLoading, dates, prices, volumes } = useSelector(
    (state) => state.charts
  );
  const [timeFrames, setTimeFrames] = useState([
    {
      isActive: true,
      value: 1,
      displayValue: "1d",
    },
    {
      isActive: false,
      value: 7,
      displayValue: "1w",
    },
    {
      isActive: false,
      value: 30,
      displayValue: "1m",
    },
    {
      isActive: false,
      value: 90,
      displayValue: "3m",
    },
    {
      isActive: false,
      value: 180,
      displayValue: "6m",
    },
    {
      isActive: false,
      value: 365,
      displayValue: "1y",
    },
  ]);
  const { className } = props;

  const prevValues = usePrevious({ currencySymbol, timeFrames });

  useEffect(() => {
    dispatch(getCharts(getActiveTimeFrame(timeFrames)));
  }, []);

  useEffect(() => {
    if (
      prevValues?.currencySymbol !== currencySymbol ||
      prevValues?.timeFrames !== timeFrames
    ) {
      dispatch(getCharts(getActiveTimeFrame(timeFrames)));
    }
  }, [currencySymbol, timeFrames]);

  const changeTimeFrame = ({ target: { innerText } }) => {
    const newTimeFrames = timeFrames.map((object) => {
      if (object.displayValue !== innerText) {
        if (object.isActive) {
          object.isActive = !object.isActive;
          return object;
        } else {
          return object;
        }
      } else {
        object.isActive = true;
        return object;
      }
    });
    setTimeFrames(newTimeFrames);
  };

  return (
    <div className={className}>
      <StyledFlexContainer justifyContent="space-between" margin="0 0 60px 0">
        <StyledPriceChartContainer
          currencySymbol={currencySymbol}
          dates={dates}
          prices={prices}
          isFullScreen={false}
          height="449px"
          padding="16px 21px 0 0"
          isLoading={isLoading}
        />
        <StyledVolumeChartContainer
          currencySymbol={currencySymbol}
          dates={dates}
          volumes={volumes}
          isLoading={isLoading}
        />
      </StyledFlexContainer>
      <StyledTimeFrameChanger
        changeTimeFrame={changeTimeFrame}
        timeFrames={timeFrames}
      />
    </div>
  );
}
