import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const CartPageStyles = {
  products: {
    display: 'inline-block'
  },
  keepShoppingBtn: {
    boxSizing: 'berder-box',
    backgroundColor: 'black',
    fontFamily: 'Open Sans, sans-serif',
    color: 'white',
    fontSize: '18px',
    fontWeight: '300',
    width: '269px',
    height: '57px',
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid black',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    }
  },
  containerClass: {
    marginTop: '38px'
  }
};

export const { classes } = jss.createStyleSheet(CartPageStyles).attach();
