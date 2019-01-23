import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';
import teamList from '../helpers/team.json';
import _ from 'lodash';
import Teamcard from './TeamCard';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      avatar: {
        backgroundColor: theme.palette.primary.dark,
      },
      headline: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        maxWidth: 500,
        [theme.breakpoints.only('xs')]: {
          fontSize: 18,
        },
      }
});

class Team extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
      { 
          teamList.leads.map((member, index) => {
              return(
                <Teamcard key={index} member={member} index={index} />
              );
              
          })
      }
      {
        _.orderBy(teamList.contributors, ['name'], ['asc']).map((member, index) =>{
          return(
            <Teamcard key={index} member={member} index={index} />
          );
        })
      }
      </Grid>
      </div>
    )
  }
}


Team.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles, { withTheme: true })(Team);