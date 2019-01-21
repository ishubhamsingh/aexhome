import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidenav from './Sidenav';
import Home from './Home';
import Team from './Team';
import Devices from './Devices';
import Error from './Error';


const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: [
        'Quicksand',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
        primary: {
          main:'#332d4f',
          dark:'#242038'
        },
        secondary: {
         main: '#21ef8b'
        },
        error: {
          main: '#21ef8b'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        type: 'dark',
          background:{
            paper:'#332d4f',
            default:'#242038'
          },
          action:{
            active: "rgba(33,239,139, 0.54)",
            hover: "rgba(33,239,139, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(33,239,139, 0.14)",
            disabled: "rgba(33,239,139, 0.26)",
            disabledBackground: "rgba(33,239,139, 0.12)",
  
          },
          divider:'#242038',
          ripple: {
            color: '#21ef8b',
          },
    },
  });
  
  const styles = theme => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
  });

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
      <MuiThemeProvider theme={theme}>
      <div className="App">
      <CssBaseline />
      <div className={classes.root}>
      <Sidenav />
      <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/team' component={Team} />
      <Route exact path='/devices/:androidVersion' component={Devices} />
      <Route render={(props)=> <Error {...props} message="Page not found" />} />
      </Switch>
      </main>
      </div>
      </div>
      </MuiThemeProvider>
      </Router>  
    )
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles, { withTheme: true })(App);