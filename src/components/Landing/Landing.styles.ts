import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export default makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    background: `linear-gradient(125deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(5)
  },
  header: {
    color: 'white',
    fontWeight: 600
  },
  link: {
    textDecoration: 'none',
    border: '4px solid white',
    width: 200,
    margin: `${theme.spacing(4)}px auto`,
    borderRadius: theme.spacing(1),
    transition: 'all ease-out .2s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
}));
