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
  gradient: {
    background: '#595959'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.gradient}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Erik Huynh
          </Typography>
          <IconButton>
              <GitHubIcon fontSize="large"/>
          </IconButton>
          <IconButton>
              <LinkedInIcon fontSize="large"/>
          </IconButton>
          <IconButton>
              <MailOutlineIcon fontSize="large"/>
          </IconButton>
          <IconButton>
              <InsertDriveFileIcon fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
