import './App.css';
import React, { Component } from 'react';

// Composition

class App extends Component {
  render() {
    return (
      <table>
        <tr>
          <Column/>
        </tr>
      </table>
    );
  }
}

class Column extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Data satu</td>
        <td>Data berikutnya</td>
      </React.Fragment>
    );
  }
} 

export default App;
