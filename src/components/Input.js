import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    marginTop: '1.2rem'
    // justifyContent: 'space-between',
    // width: '100%',
    // maxHeight: '10%',
  },

  input: {
    height: '1.3rem',
    width: '100%',
    border: '1px solid #E3E3E3',
    borderRadius: '20px 0px 0px 20px',
    padding: '10px',
    '&:focus': {
      outline: 'none'
    }
  },
  
  button: {
    width: '100px',
    border: 'none',
    borderRadius: '0px 20px 20px 0px',
    background: '#0EE290',
    color: 'white',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));


export default function Input(props) {

  const classes = useStyles();
  // const { message, setMessage, sendMessage } = props;
  const { sendMessage } = props;
  const [message, setMessage] = useState('');

  return (
    <form className={classes.form}>
    <input 
      className={classes.input}
      type="text"
      value={message}
      placeholder="Type a message..."
      onClick={event => {
        
      }}
      onChange={(event) => setMessage(event.target.value)}
      // onKeyPress={(event) => event.key === 'Enter' ? sendMessage(message, event) : null}
      onKeyPress={event => {
        if (event.key === 'Enter') {
          sendMessage(message, event)
          setMessage('');
        }
         else {
           props.userTyping(event.key);
          // console.log('setting')
          // setTyping(true);
          // // clearTimeout(timeout);
          // const timeout = setTimeout(() => {
          //   setTyping(false)
          // }, 2000)
        }
      }}
    />
    <button className={classes.button} onClick={(event) => sendMessage(message, event)}>Send</button>
  </form>
  )
}