import React, {Component, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {ButtonGroup, Button} from 'react-miniui';

export default class Nav extends Component {
  render() {
    return(
      <nav>
        <Link to="/chart">line chart</Link>
        <Link to="/chart">line chart</Link>
      </nav>
    )
  }
}
