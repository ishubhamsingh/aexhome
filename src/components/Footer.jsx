import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles, Typography, Divider } from '@material-ui/core';

const styles = theme => ({
  footer: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    MuiTouchRipple: '#000000',
    color: theme.palette.text.secondary
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <Divider variant="fullWidth" />
      <div className={classes.footer}>
      <Typography
      color="textPrimary"
      >
      {'Built with '}
      <span role="img" aria-label="Love">
        ❤️
      </span>
      {' by '}
      <a className={classes.link} color="textPrimary" href="https://ishubhamsingh.com">
        ishubhamsingh
      </a>
    </Typography>
      </div>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Footer);