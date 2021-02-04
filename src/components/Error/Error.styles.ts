import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export default makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    minWidth: 300
  },
  message: {
    marginTop: theme.spacing(1)
  }
}));
