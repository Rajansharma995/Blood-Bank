import React, { Component } from "react";

export default class SearchClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: true,
      place: "",
      blood: "",
      searchList: [],
    };
  }

  setPlace = (e) => {
    this.setState({
      place: e.target.value,
    });
  };

  setBlood = (e) => {
    this.setState({
      blood: e.target.value,
    });
  };

  handleSearch = () => {
    const url = 'http://127.0.0.1:8000/api/emergency/';

    fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
        .then((response) => response.json())
        .then((data) => {
          // set the searchList state with the retrieved data
          this.setState({ searchList: data });
        })
        .catch((error) => console.log(error));
  };

  render() {
    return (
      <form className="search">
        <input
          type="text"
          placeholder="PLACE"
          name="place"
          onChange={this.setPlace}
        />
        <input
          type="text"
          placeholder="BLOOD GROUP"
          name="bloodgroup"
          onChange={this.setBlood}
        />
        <button type="button" onClick={this.handleSearch}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    );
  }
}