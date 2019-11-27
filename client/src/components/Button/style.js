import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

let button = {
  btn: {
    fontFamily: 'Open sans, sans-serif',
    textDecoration: 'none',
    display: 'inline-block',
    width: '269px',
    border: '1px solid',
    borderColor: 'transparent',
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '16px 0',
    transition: ' all 0.3s',
    cursor: 'pointer',
  },
  name: {
    textTransform: 'uppercase',
  },
  black: {
    background: '#000',
    color: '#fff',

    '&:hover': {
      background: '#fff',
      color: '#000',
      borderColor: '#000'
    }
  },
  white: {
    background: '#fff',
    color: '#000',

    '&:hover': {
      background: '#000',
      color: '#fff',
      borderColor: '#000'
    }
  },
  disabled: {
    pointerEvents: 'none',
    backgroundColor: 'grey',
    color: 'white',
  },
  successMsg: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    bottom: '60px',
    color: 'DARKCYAN',
    textAlign: 'center',
    animation: 'SHOW_BUTTON_MESSAGE 2s ease-in-out',
    zIndex: '-999'
  },
  failMsg: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    bottom: '60px',
    color: 'red',
    textAlign: 'center',
    animation: 'SHOW_BUTTON_MESSAGE 2s ease-in-out',
    zIndex: '-999'
  },
};

export const { classes } = jss.createStyleSheet(button).attach();
