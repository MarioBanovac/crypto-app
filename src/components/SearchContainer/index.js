import React from "react";
import axios from "axios";
import { ReactComponent as SearchLogo } from "../../icons/search.svg";
import { StyledSearchContainer, StyledForm, StyledLoadingList } from "../../ui";
import { SearchList } from "../SearchList";

export class SearchContainer extends React.Component {
  state = {
    isLoading: false,
    list: [],
    displaySearchResults: true,
  };

  componentDidMount() {
    const myRef = React.createRef();
    this.setState({ myRef });
  }

  handleClick = (e) => {
    this.setState({ displaySearchResults: true, list: [] });
    document.addEventListener("click", this.outsideHandler.bind(this), {
      once: true,
    });
  };

  outsideHandler(e) {
    const { myRef } = this.state;
    document.addEventListener(
      "click",
      ({ target }) => {
        if (!myRef.current.contains(target)) {
          this.setState({ displaySearchResults: false });
        }
      },
      { once: true }
    );
  }

  handleChange = ({ target: { value } }) => {
    if (!value) {
      this.setState({ list: [] });
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
    const { isLoading, list, displaySearchResults, myRef } = this.state;
    return (
      <StyledSearchContainer onClick={this.handleClick} ref={myRef}>
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
          <SearchList list={list} displaySearchResults={displaySearchResults} />
        )}
      </StyledSearchContainer>
    );
  }
}
