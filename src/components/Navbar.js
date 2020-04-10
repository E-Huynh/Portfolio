import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  app: {
    background: '#272727'
  },
  iconColor: {
    color: '#747474'
  }
}));

const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: green,
    },
    status: {
      danger: 'orange',
    },
  });

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" theme={theme}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Erik Huynh
          </Typography>
          <IconButton>
              <GitHubIcon className={classes.iconColor} style={{ fontSize: 30 }}/>
          </IconButton>
          <IconButton>
              <LinkedInIcon className={classes.iconColor} style={{ fontSize: 40 }}/>
          </IconButton>
          <IconButton>
              <MailOutlineIcon className={classes.iconColor} style={{ fontSize: 40 }}/>
          </IconButton>
          <IconButton>
              <InsertDriveFileIcon className={classes.iconColor} style={{ fontSize: 35 }}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
