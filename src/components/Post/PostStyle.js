import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  item: {
    listStyle: 'none'
  },
  button: {
    margin: theme.spacing(1),
  },
}));