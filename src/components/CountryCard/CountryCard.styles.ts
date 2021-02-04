import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

type StyleProps = { backgroundUrl: string };

export default makeStyles<Theme, StyleProps>(theme => ({
  root: {
    margin: '4px 0px',
    padding: '0 4px',
    [theme.breakpoints.down('xs')]: {
      width: 165,
      height: 'fit-content'
    }
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  flag: {
    height: 50,
    boxShadow: theme.shadows[10],
    margin: '0 auto 16px',
    borderRadius: 10
  }
}));
