import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles, Typography, IconButton } from '@material-ui/core';
import Icon from '@mdi/react';
import * as Mdi from '@mdi/js';
import footerLinks from '../helpers/footerLinks';

const styles = theme => ({
  footerLinks: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerCredits: {
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
    const { classes, theme } = this.props;
    return (
      <div>
      <div className={classes.footerLinks} >
      {
        footerLinks.map((link) => {
          return (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
            <IconButton>
            <Icon path={Mdi[link.icon]} size={0.8} color={theme.palette.secondary.main} />
            </IconButton>
            </a>
          )
        })
      }
      </div>
      <div className={classes.footerCredits}>
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