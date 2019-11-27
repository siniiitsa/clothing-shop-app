import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const small = '@media screen and (max-width: 375px)';

const cartProductStyles = {
  cartProduct: {
    position: 'relative',
    display: 'flex',
    fontFamily: 'Open Sans, sans-serif',
    width: '780px',
    borderBottom: '1px solid #C4C4C4',
    marginBottom: '40px',
    paddingBottom: '40px',
    animation: 'SHOW_FROM_BOTTOM 1s ease-in-out',
    '@media screen and (max-width: 1212px)': {
      width: '700px'
    },
    '@media screen and (max-width: 1132px)': {
      width: '650px'
    },
    '@media screen and (max-width: 1040px)': {
      width: '600px'
    },
    '@media screen and (max-width: 990px)': {
      width: '550px'
    },
    '@media screen and (max-width: 940px)': {
      width: '500px'
    },
    '@media screen and (max-width: 890px)': {
      width: '450px'
    },
    '@media screen and (max-width: 840px)': {
      width: '400px'
    },
    '@media screen and (max-width: 790px)': {
      width: '100%'
    },
    [small]: {
      width: '321px',
      borderBottom: '1px solid black',
      paddingBottom: '28px',
      marginBottom: '10px'
    },
    [small]: {}
  },
  removeProductBig: {
    position: 'absolute',
    bottom: '44px',
    right: '0',
    fontSize: '14px',
    color: '#847A7A',
    borderBottom: '1px solid transparent',
    transition: 'all 0.3s',
    '&:hover': {
      borderBottomColor: '#847A7A',
      cursor: 'pointer'
    },
    '@media screen and (max-width: 940px)': {
      display: 'none'
    },
    '@media screen and (max-width: 790px)': {
      display: 'block'
    },
    '@media screen and (max-width: 550px)': {
      display: 'none'
    },
    [small]: {
      display: 'none'
    }
  },
  removeProductSmall: {
    position: 'absolute',
    right: '0',
    top: '0',
    display: 'none',
    '@media screen and (max-width: 940px)': {
      display: 'block'
    },
    '@media screen and (max-width: 790px)': {
      display: 'none'
    },
    '@media screen and (max-width: 550px)': {
      display: 'block'
    },
    [small]: {
      display: 'block'
    }
  },
  productImg: {
    width: '186px',
    '@media screen and (max-width: 790px)': {
      width: '170px'
    },
    [small]: {
      width: '127px'
    }
  },
  productDetails: {
    display: 'inline-block',
    marginLeft: '37px',
    [small]: {
      marginLeft: '18px'
    }
  },
  productName: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '26px',
    [small]: {
      fontSize: '14px',
      marginBottom: '6px'
    }
  },
  ref: {
    fontSize: '14px',
    color: '#847A7A',
    marginBottom: '25px',
    textTransform: 'uppercase',
    [small]: {
      fontSize: '10px',
      marginBottom: '12px'
    }
  },
  pruductColor: {
    color: '#847A7A',
    fontSize: '16px',
    marginBottom: '17px',
    [small]: {
      fontSize: '14px',
      marginBottom: '12px'
    }
  },
  productSize: {
    color: '#847A7A',
    fontSize: '16px',
    marginBottom: '17px',
    [small]: {
      fontSize: '14px',
      marginBottom: '12px'
    }
  },
  detailName: {
    display: 'inline-block',
    width: '76px',
    [small]: {
      fontSize: '14px',
      width: '70px'
    }
  },
  productQuant: {
    color: '#847A7A',
    fontSize: '16px',
    marginBottom: '25px',
    [small]: {
      fontSize: '14px'
    }
  },
  productQuantSelectWrapper: {
    color: 'black',
    fontSize: '18px'
  },
  productQuantSelectBtn: {
    boxSizing: 'border-box',
    fontSize: '18px',
    border: 'none',
    backgroundColor: 'transparent',
    position: 'relative',
    bottom: '1px',
    outline: 'none',
    transition: '0.1s',
    '&:hover': {
      cursor: 'pointer',
      color: 'MEDIUMVIOLETRED'
    },
    '&:active': {
      color: 'green'
    }
  },
  productPrice: {
    marginBottom: '13px'
  },
  TotalProductPrice: {
    fontWeight: '700'
  }
};

export const { classes } = jss.createStyleSheet(cartProductStyles).attach();
