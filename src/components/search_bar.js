import React, { Component } from 'react';

//functional component e.g
  // const SearchBar = () => {
  //   return <input />
  // };

//class component e.g
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.setState;
  }

  render() {
    return (
      <div>
       <input onChange={this.onInputChange} />
       Value {this.state.term}
      </div>
    );
  }

  onInputChange = (event) =>{
    this.setState ({term: event.target.value })
  }

}


export default SearchBar;
