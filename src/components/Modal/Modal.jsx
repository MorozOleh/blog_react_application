import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Form } from '../Form/Form';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export function Modal() {
  const classes = useStyles();
  const open = useSelector(state => state.modalReducer.hidden);

  return (
    <div>
      
      <Backdrop className={classes.backdrop} open={open} >
        <Form />
      </Backdrop>
    </div>
  );
}