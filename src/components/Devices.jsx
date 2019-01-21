import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardContent, CardHeader, CardActions, Avatar, Grid, Divider, IconButton } from '@material-ui/core';
import axios from 'axios';
import androidVersionsList from '../helpers/androidVersions';
import * as Constants from '../helpers/constants'
import _ from 'lodash';
import Error from './Error';
import Loader from './Loader';
import Icon from '@mdi/react';
import { mdiDownloadOutline, mdiAccountCircleOutline, mdiXda, mdiCellphoneAndroid, mdiAccountTie } from '@mdi/js';

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
      avatar2: {
        backgroundColor: theme.palette.primary.main,
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

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            androidVersion: undefined,
            deviceList: undefined,
            legacy: undefined,
            notFound: false,
            loading: true,
            failed: undefined
          }
    }
      init(props) {
        const androidVersionSlug = props.match.params.androidVersion;
        if (androidVersionsList.filter(version =>  version.code === androidVersionSlug).length > 0) {
          const instance = axios.create({
              baseURL: Constants.ApiBaseUrl
          });

            if(androidVersionSlug === Constants.legacyAPI) {
                instance.get('/devices/nougat').then((response)=> {
                  this.setState(() => ({
                      androidVersion: androidVersionSlug,
                      loading: false,
                      notFound: false,
                      legacy: true,
                      deviceList: response.data,
                      failed: false
                  }));
                }).catch((err) => {
                  this.setState(() => ({
                      androidVersion: androidVersionSlug,
                      loading: false,
                      notFound: false,
                      failed: true
                  }));
                });
            } else {
              instance.get(`/devices/filtered/${androidVersionSlug}`).then((response)=> {
                  this.setState(() => ({
                      androidVersion: androidVersionSlug,
                      loading: false,
                      notFound: false,
                      legacy: false,
                      deviceList: response.data,
                      failed: false
                  }));
              }).catch((err) => {
                  this.setState(() => ({
                      androidVersion: androidVersionSlug,
                      loading: false,
                      notFound: false,
                      failed: true
                  }));
              });
            }

        } else {
            this.setState(() => ({
                androidVersion: androidVersionSlug,
                loading: false,
                notFound: true
            }));
        }
      }

      componentDidMount() {
          this.init(this.props)
      }

      componentWillReceiveProps(nextProps) {
          if(nextProps.match.params.androidVersion !== this.props.match.params.androidVersion) {
            this.setState(() => ({
                androidVersion: undefined,
                deviceList: undefined,
                legacy: undefined,
                notFound: false,
                loading: true,
                failed: undefined
            }))  
            this.init(nextProps)
          }
      }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root} key={`div_${this.props.match.params.androidVersion}`}>
        {
            this.state.loading ?
            <div align="center"><Loader type="cylon" color="#21ef8b" /></div>
            :
            this.state.notFound ?
            <Card>
            <CardContent>
            <Error message="Invalid android version" />
            </CardContent>
            </Card>
            :
            this.state.failed ?
            <Card>
            <CardContent>
            <Error message="Something went wrong" />
            </CardContent>
            </Card>
            :
            this.state.legacy ?
            (
            <Grid container spacing={24}>
            {this.state.deviceList.map((device, index) => {
                return (
                    <Grid item xs={12} md={4} key={index}>
                    <Card>
                    <CardHeader
                    avatar={<Avatar aria-label="name" className={classes.avatar}>{<Icon path={mdiCellphoneAndroid} size={1} color={theme.palette.secondary.main} />}</Avatar>}
                    title={`${device.brand} ${device.name}`}
                    subheader={device.codename}
                     />
                     <Divider variant="inset" />
                     <CardHeader
                     avatar={<Avatar aria-label="name" className={classes.avatar2}>{<Icon path={mdiAccountTie} size={0.8} color={theme.palette.text.primary} />}</Avatar>}
                     title={device.maintainer_name}
                      />
                      <Divider variant="middle" />
                      <CardActions className={classes.actions} >
                 
                      { !_.isEmpty(device.maintainer_xda_profile) && 
                      <a href={device.maintainer_xda_profile} target="_blank" rel="noopener noreferrer">
                      <IconButton>
                      <Icon path={mdiAccountCircleOutline} size={1} color={theme.palette.secondary.main} />
                      </IconButton>
                      </a>
                      
                      }
     
                      { !_.isEmpty(device.afh_folder) && 
                      <a href={device.afh_folder} target="_blank" rel="noopener noreferrer">
                      <IconButton>
                      <Icon path={mdiDownloadOutline} size={1} color={theme.palette.secondary.main} />
                      </IconButton>
                      </a>
                      }
     
                      { !_.isEmpty(device.xda_thread) && 
                      <a href={device.xda_thread} target="_blank" rel="noopener noreferrer">
                      <IconButton>
                      <Icon path={mdiXda} size={1} color={theme.palette.secondary.main} />
                      </IconButton>
                      </a>
                      }
                      </CardActions>
                    </Card>
                    </Grid>
                )
            }) }
            </Grid> )
            :
            ( <Grid container spacing={24}>
            { this.state.deviceList.map((device, index) => {
                return (
                    <Grid item xs={12} md={4} key={index}>
                    <Card>
                    <CardHeader
                    avatar={<Avatar aria-label="name" className={classes.avatar}>{<Icon path={mdiCellphoneAndroid} size={1} color={theme.palette.secondary.main} />}</Avatar>}
                    title={`${device.brand} ${device.name}`}
                    subheader={device.codename}
                     />
                     <Divider variant="inset" />
                     <CardHeader
                     avatar={<Avatar aria-label="name" className={classes.avatar2}>{<Icon path={mdiAccountTie} size={0.8} color={theme.palette.text.primary} />}</Avatar>}
                     title={device.maintainer_name}
                      />
                      <Divider variant="middle" />
                      <CardActions className={classes.actions} >
                 
                      { !_.isEmpty(device.maintainer_url) && 
                      <a href={device.maintainer_url} target="_blank" rel="noopener noreferrer">
                      <IconButton>
                      <Icon path={mdiAccountCircleOutline} size={1} color={theme.palette.secondary.main} />
                      </IconButton>
                      </a>
                      
                      }
     
                      <a href={`${Constants.downloadCenterUrl}/${device.codename}`} target="_blank" rel="noopener noreferrer">
                      <IconButton>
                      <Icon path={mdiDownloadOutline} size={1} color={theme.palette.secondary.main} />
                      </IconButton>
                      </a>
     
                      { !_.isEmpty(device.xda_thread) && 
                      <a href={device.xda_thread} target="_blank" rel="noopener noreferrer">
                      <IconButton>
                      <Icon path={mdiXda} size={1} color={theme.palette.secondary.main} />
                      </IconButton>
                      </a>
                      }
                      </CardActions>
                    </Card>
                    </Grid>
                )
            }) }
            </Grid> )
        }
      </div>
    )
  }
}

Devices.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  };
  
export default withStyles(styles, { withTheme: true })(Devices);