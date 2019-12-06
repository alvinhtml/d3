import React, {Component, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import LineChart from '~/container/charts/LineChart';
import Nav from '~/container/Nav';
import Main from '~/container/Main';


export default class Router extends Component {
  render() {
    return(
      <Main>
        <Switch>
          <Route exact path='/' component={Nav}/>
          <Route path='/chart' component={LineChart}/>
        </Switch>
      </Main>
    )
  }
}
