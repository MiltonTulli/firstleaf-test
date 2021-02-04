import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: { padding: theme.spacing(3) },
  textContainer: {},
  labelValueItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *:nth-child(1)': {
      marginRight: 4,
      fontSize: 11
    },
    '& > *:nth-child(2)': {
      marginRight: 4,
      fontSize: 17
    }
  },
  map: {
    width: '100%',
    border: 0,
    height: 300
  }
}));
