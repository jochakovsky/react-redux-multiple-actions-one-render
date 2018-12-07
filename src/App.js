import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  componentDidMount() {
    console.log('App component mounted');
  }
  componentDidUpdate(prevProps) {
    console.log(`prop 'thing' was ${prevProps.thing}, is now ${this.props.thing}`);
  }
  handleButtonClick = () => {
    this.props.on();
    this.props.off();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
            onClick={this.handleButtonClick}
          >
            Click me
          </button>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(`mapStateToProps called with 'thing' as ${state.thing}`);
  return {
    thing: state.thing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    on: () => dispatch({type: 'ON'}),
    off: () => dispatch({type: 'OFF'})
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;
