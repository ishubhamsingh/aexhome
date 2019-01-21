import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardHeader,IconButton, Divider, CardContent, Typography, CardActions, Avatar, Grid } from '@material-ui/core';
import data from '../helpers/team.json';
import Icon from '@mdi/react';
import { mdiGithubCircle, mdiAccountCircleOutline, mdiXda, mdiTelegram } from '@mdi/js';
import _ from 'lodash';

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
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
      {
          data.map((member,index)=>{
              return(
                <Grid item xs={12} md={4} key={index}>
                <Card>
                {
                    _.isEmpty(member.github) 
                    ?           
                    <CardHeader
                    avatar={<Avatar aria-label="name" className={classes.avatar}>{<Icon path={mdiAccountCircleOutline} size={1} color={theme.palette.secondary.main} />}</Avatar>}
                    title={member.name}
                    subheader={member.description}
                     />
                    :
                    <CardHeader
                    avatar={<Avatar aria-label="profile" src={`${member.github}.png`} />}
                    title={member.name}
                    subheader={member.description}
                     />

                }
                 <Divider variant="middle" />
                 <CardContent>
                 <Typography className={classes.headline} variant="h6" color="textSecondary" gutterBottom>
                   {member.bio}
                 </Typography>
                 </CardContent>
                 <Divider variant="middle" />
                 <CardActions className={classes.actions} >
                 
                 { !_.isEmpty(member.github) && 
                 <a href={member.github} target="_blank" rel="noopener noreferrer">
                 <IconButton>
                 <Icon path={mdiGithubCircle} size={1} color={theme.palette.secondary.main} />
                 </IconButton>
                 </a>
                 
                 }

                 { !_.isEmpty(member.xda) && 
                 <a href={member.xda} target="_blank" rel="noopener noreferrer">
                 <IconButton>
                 <Icon path={mdiXda} size={1} color={theme.palette.secondary.main} />
                 </IconButton>
                 </a>
                 }

                 { !_.isEmpty(member.telegram) && 
                 <a href={member.telegram} target="_blank" rel="noopener noreferrer">
                 <IconButton>
                 <Icon path={mdiTelegram} size={1} color={theme.palette.secondary.main} />
                 </IconButton>
                 </a>
                 }
                 </CardActions>
                 </Card>
                 </Grid>
              )
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