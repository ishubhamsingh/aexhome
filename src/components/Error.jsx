import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
})

class Error extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

      <img src={require('../images/notfound.png')} height="150px" width="150px" alt="404" style={{
        display: 'block',
        margin: 'auto',
      }}/>
      <div className={classes.root}>
      <Typography variant="h5" component="h1" align='center' >
        {this.props.message}
      </Typography>
      </div>
      </div>
    )
  }
}

Error.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Error);