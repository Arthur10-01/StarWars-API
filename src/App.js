import React, { Component } from 'react';
import List from'./List';
import Axios from 'axios';


class App extends Component {
   constructor(props){
    super(props);
    

    this.state = {
      people : [],
    }
    this.getPeople = this.getPeople.bind(this);
  }

  
  getPeople(){
    return Axios.get("https://swapi.dev/api/people/")
    .then((response)=>{
      console.log(response.data.results);
      this.setState({ people : response.data.results})
    })
  }
  componentDidMount(){
    this.getPeople();
  }
  

  render() {

   const {people} = this.state;
    return (
      <div>
       <List people = {people}/>
      </div>
    );
  };
};



export default App;