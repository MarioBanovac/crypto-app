import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledSearchContainer, StyledForm, StyledLoadingList } from "ui";
import {SearchList,SearchIcon}  from "components";

export default function SearchContainer(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  const handleChange = ({ target: { value } }) => {
    let timer;
    clearTimeout(timer);
    if (!value) {
      timer = setTimeout(() => setList([]), 1200);
    }
    value && getUser(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getUser = async (searchTerm) => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/${searchTerm}`
      );
      setIsLoading(false);
      setList(
        data.map(({ name, id }) => {
          return { name, id };
        })
      );
    } catch (error) {
      console.error(`Failed to fetch data ${error}`);
    }
  };
  
  return (
    <StyledSearchContainer>
      <StyledForm onSubmit={handleSubmit}>
        {/* <SearchLogo /> */}
        <SearchIcon />
        <input
          onChange={handleChange}
          type={"search"}
          placeholder="Search..."
        />
      </StyledForm>
      {isLoading ? (
        <StyledLoadingList>Loading list...</StyledLoadingList>
      ) : (
        <SearchList list={list} />
      )}
    </StyledSearchContainer>
  );
}
