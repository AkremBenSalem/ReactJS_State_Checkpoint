import './App.css';
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Profile from './components/Profile'

class App extends Component {
  constructor() {
    super();
    this.state = {
      person : {
        fullName:"name",
        bio:"a bio",
        imgSrc:"/imageInPublic.jpg",
        profession:"profession"
      },
      show: false,
      Seconds: 0
    };
    this.handleClick = () => {
      this.setState({ show: !this.state.show });
    };
  }
  componentWillUnmount(){
    this.setState({Seconds:0});
  }
  componentDidMount(){
    const interval = setInterval(() => {
      this.setState({Seconds:(this.state.Seconds + 1)});
    }, 1000);
    return () => clearInterval(interval);
  }
  render() {
    return (
      <div>
        <Button variant="dark" onClick={this.handleClick}>
          Show Counter
        </Button>
        {this.state.show ? (
          <>
          <Profile fullName={this.state.person.fullName} bio={this.state.person.bio} profession={this.state.person.profession} imgSrc={this.state.person.imgSrc}></Profile>
          <h1>Time since mount {this.state.Seconds}</h1>
          </>
        ) : (
          <h1>Click On the button to show the profile</h1>
        )}
      </div>
    );
  }
}

export default App;
