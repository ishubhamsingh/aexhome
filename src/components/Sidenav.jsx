import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MyAppbar from './MyAppbar';
import {Link} from 'react-router-dom';
import { SmartphoneOutlined, HomeOutlined, ImageOutlined, AccountCircleOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 300;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  icon: {
    color: theme.palette.secondary.main
  },
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-center',
    justifyContent: 'center',
  },
  drawerPaper: {
    width: drawerWidth
  },
  nested: {
    paddingLeft: theme.spacing.unit * 6,
  },
  link: {
    textDecoration: 'none',
    MuiTouchRipple: '#000000'
  },
  title: {
    align:'center',
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing.unit / 2,

  },
  buttonRipple: { color: "#21ef8b" },
});

class Sidenav extends React.Component {
  state = {
    mobileOpen: false,
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleClick = () => {
    this.setState(state => ({ 
      open:!this.state.open
     }));
  };


  render() {
    const androidVersions = [
        {
            name:'Nougat',
            code:'nougat',
        },
        {
            name:'Oreo',
            code:'oreo'
        },
        {
            name:'Pie',
            code:'pie'
        }
    ]
    const { classes } = this.props;

    const drawer = (
      <div>
        <div  className={classes.toolbar}>
        <Link className={classes.title} to="/" onClick={this.handleDrawerToggle}>
          <Typography variant="h6" className={classes.title} component="h3" align="center">AOSPEXTENDED ROM</Typography>
      </Link>
        </div>
        <Divider />
          <List component="nav"
          subheader={<ListSubheader component="div"></ListSubheader>}>
          <Link to={"/"} className={classes.link} onClick={this.handleDrawerToggle}>
          <ListItem button key='home' TouchRippleProps={{ classes: { root: classes.buttonRipple }}} >
          <ListItemIcon>
            <HomeOutlined className={classes.icon} />
          </ListItemIcon>
          <ListItemText key='home' primary='Home' />
          </ListItem>
          </Link>
          <Link to={"/team"} className={classes.link} onClick={this.handleDrawerToggle}>
          <ListItem button key='team' TouchRippleProps={{ classes: { root: classes.buttonRipple }}} >
          <ListItemIcon>
            <AccountCircleOutlined className={classes.icon} />
          </ListItemIcon>
          <ListItemText key='team' primary='Team' />
          </ListItem>
          </Link>
          <Link to={"/gallery"} className={classes.link} onClick={this.handleDrawerToggle}>
          <ListItem button key='gallery' TouchRippleProps={{ classes: { root: classes.buttonRipple }}} >
          <ListItemIcon>
            <ImageOutlined className={classes.icon} />
          </ListItemIcon>
          <ListItemText key='gallery' primary='Gallery' />
          </ListItem>
          </Link>
          <ListItem button onClick={this.handleClick} key='devices'>
          <ListItemIcon>
          <SmartphoneOutlined className={classes.icon} />
          </ListItemIcon>
          <ListItemText key='devices'  primary='Devices' />
          {this.state.open ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon}  />}
          </ListItem>
          {androidVersions.map((androidVersions,index) => {
            return (

                (<Collapse in={this.state.open} timeout='auto' unmountOnExit key={index}>
                <Link to={"/devices/"+androidVersions.code} className={classes.link} onClick={this.handleDrawerToggle}>
                <List component="div" disablePadding>
                <ListItem button className={classes.nested} TouchRippleProps={{ classes: { root: classes.buttonRipple }}}>
                  <ListItemText primary={ `${androidVersions.name} `} />
                </ListItem>
              </List>
              </Link>
                </Collapse>
                )
              );
            })}
          </List>
      </div>
    );

    return (
      <div>
        <MyAppbar handleDrawerToggle={this.handleDrawerToggle}/>
        <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Drawer
            variant="temporary"
            anchor='left'
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        </nav>
      </div>
    );
  }
}

Sidenav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sidenav);