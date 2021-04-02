import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import DeleteIcon  from '../../../node_modules/@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
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

export default function Post({
  title, body, id
}) {


  const classes = useStyles();
  return (
    <li className={classes.item}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {title}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {body}
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => console.log('hello')}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </li>
  )
}
