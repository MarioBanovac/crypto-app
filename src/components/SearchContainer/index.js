import React from "react";
import axios from "axios";
import { ReactComponent as SearchLogo } from "../../icons/search.svg";
import { StyledSearchContainer, StyledForm } from "../../ui";

export class SearchContainer extends React.Component {
  state = {
    value: "",
  };

  handleChange = ({ target: { value } }) => {
    this.getUser(value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  getUser = async (searchTerm) => {
    try {
      const response = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
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
      </StyledSearchContainer>
    );
  }
}
