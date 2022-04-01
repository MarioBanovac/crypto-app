import React from "react";
import axios from "axios";
import { ReactComponent as SearchLogo } from "../../icons/search.svg";
import { StyledSearchContainer, StyledForm, StyledLoadingList } from "../../ui";
import { SearchList } from "../SearchList";

export class SearchContainer extends React.Component {
  state = {
    isLoading: false,
    list: [],
  };

  handleChange = ({ target: { value } }) => {
    let timer;
    clearTimeout(timer);
    if (!value) {
      timer = setTimeout(() => this.setState({ list: [] }), 1200);
    }
    value && this.getUser(value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  getUser = async (searchTerm) => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/${searchTerm}`
      );
      this.setState({
        isLoading: false,
        list: data.map(({ name, id }) => {
          return { name, id };
        }),
      });
    } catch (error) {
      console.error(`Failed to fetch data ${error}`);
    }
  };
  render() {
    const { isLoading, list } = this.state;
    return (
      <StyledSearchContainer>
        <StyledForm onSubmit={this.handleSubmit}>
          <SearchLogo />
          <input
            onChange={this.handleChange}
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
}
