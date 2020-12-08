import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal_} from "./components/Modal_";
import {QuoteChanging} from "./components/QuoteChanging";
import {SpinMeAround} from "./components/SpinMeAround";
import {LoadingBar} from "./components/LoadingBar";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
        <>
            <Button variant="outline-primary" onClick={this.handleClick}>
              {this.state.isToggleOn ? "Show Text" : "Hide Text"}
            </Button>

          <p>{this.state.isToggleOn ?
              ""
              :
              "Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, " +
              "a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. " +
              "It seemed that it fell to earth about one hundred miles east of him."
          }</p>

            <div style={{padding:'2rem'}}/>

            <Modal_/>

            <QuoteChanging/>

            <SpinMeAround/>

            <LoadingBar/>
        </>
    );
  }
}

export default App;
