import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export default makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    height: '100vh'
  },
  appBar: {
    backgroundColor: theme.palette.primary.main
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  content: {
    paddingTop: 64 + theme.spacing(1),
    padding: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: '0 !important'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}));
