import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography,  Fab }from '@material-ui/core';
import { downloadCenterUrl } from '../helpers/constants';

const styles = theme => ({
    root: {
        flex: '1 0 100%',
      },
    hero: {
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary
    },
    text: {
      paddingTop: theme.spacing.unit * 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      letterSpacing: '.7rem',
      textIndent: '.7rem',
      fontWeight: theme.typography.fontWeightLight,
      [theme.breakpoints.only('xs')]: {
        letterSpacing: '.3rem',
        textIndent: '.3rem',
        fontSize: 22,
      },
      whiteSpace: 'nowrap',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
      },
    headline: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit,
      maxWidth: 500,
      textAlign: 'center',
      [theme.breakpoints.only('xs')]: {
        fontSize: 18,
      },
    },
    content: {
      paddingBottom: theme.spacing.unit * 8,
      paddingTop: theme.spacing.unit * 8,
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing.unit * 12,
      },
    },
    logo: {
      margin: 'auto',
      width: '350px',
      height: '350px',
      display: 'block',
      [theme.breakpoints.only('xs')]: {
        width: '150px',
        height: '150px'
      },
    },
  });
  

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <div className={classes.hero}>
        <div className={classes.content}>
        <img
        src={require('../images/aexlogo.png')}
        alt="AEX Logo"
        className={classes.logo}
        />
          <div className={classes.text}>
            <Typography
              variant="h4"
              align="center"
              component="h2"
              color="textPrimary"
              gutterBottom
              className={classes.title}
            >
              {'AOSPEXTENDED ROM'}
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"An android custom ROM that aims to provide useful customizations with stability."}
            </Typography>
          </div>
          <div className={classes.text}>
          <Fab
          className={classes.button}
          variant="extended"
          color="primary"
          href={downloadCenterUrl}
          target="_blank"
        >
          {'Download'}
        </Fab>
          </div>
        </div>
        </div>

        </div>
    );
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles, { withTheme: true })(Home);