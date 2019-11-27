import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const small = '@media screen and (max-width: 375px)';

const CartPageStyles = {
  mainContent: {
    padding: '38px 20px',
    [small]: {
      paddingTop: '20px'
    }
  },
  mainContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media screen and (max-width: 790px)': {
      flexDirection: 'column',
      width: '100%'
    },
    [small]: {
      alignItems: 'center',
      flexDirection: 'column'
    }
  },
  products: {
    display: 'inline-block',
    marginTop: '26px',
    marginRight: '30px',
    '@media screen and (max-width: 790px)': {
      marginRight: '0'
    },
    [small]: {
      marginTop: '10px'
    }
  },
  keepShoppingBtn: {
    position: 'relative',
    animation: 'SHOW_FROM_LEFT 1s ease-in-out',
    '@media screen and (max-width: 790px)': {
      display: 'none'
    },
    [small]: {
      display: 'none'
    }
  },
  summarySettings: {
    position: 'relative',
    bottom: '25px'
  },
  emptyCartMsg: {
    display: 'flex'
  },
  emptyCartMsgIcon: {
    fontSize: '30px'
  },
  emptyCartMsgText: {
    fontFamily: 'Josefin Sans, sans-serif',
    textTransform: 'uppercase',
    marginTop: '8px',
    marginLeft: '13px',
    fontSize: '25px',
    '@media screen and (max-width: 790px)': {
      marginBottom: '20px'
    },
    '@media screen and (max-width: 500px)': {
      fontSize: '20px'
    },
    '@media screen and (max-width: 400px)': {
      fontSize: '18px'
    },
  },
  cartHeading: {
    display: 'none',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    borderBottom: '1px solid black',
    paddingBottom: '7px',
    width: '100%',
    '@media screen and (max-width: 790px)': {
      display: 'block'
    },
    [small]: {
      width: '320px',
      display: 'block'
    }
  }
};

export const { classes } = jss.createStyleSheet(CartPageStyles).attach();
