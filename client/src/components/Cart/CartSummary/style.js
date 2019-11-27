import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const small = '@media screen and (max-width: 790px)';

const cartSummaryStyles = {
  summaryContainer: {
    position: 'relative',
    left: '0',
    display: 'inline-block',
    verticalAlign: 'top',
    animation: 'SHOW_FROM_RIGHT 1s ease-in-out',
    [small]: {
      marginTop: '60px'
    }
  },
  cartSummary: {
    display: 'inline-block',
    boxSizing: 'border-box',
    position: 'relative',
    padding: '40px 0 40px 40px',
    backgroundColor: '#C4C4C4',
    width: '362px',
    height: '591px',
    '@media screen and (max-width: 1132px)': {
      width: '320px',
      height: '500px'
    },
    [small]: {
      width: '321px',
      height: '300px',
      padding: '27px 0 27px 22px'
    }
  },
  header: {
    width: '100%',
    paddingBottom: '77px',
    borderBottom: '1px solid #959595',
    [small]: {
      borderBottom: 'none',
      paddingBottom: '0'
    }
  },
  headerHeading: {
    fontFamily: 'Josefin Sans, sans-serif',
    marginBottom: '29px',
    [small]: {
      position: 'absolute',
      top: '-30px',
      left: '0'
    }
  },
  discountText: {
    marginBottom: '7px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '12px'
  },
  discountField: {
    backgroundColor: 'transparent',
    width: '80px',
    border: 'none',
    borderBottom: '1px solid #959595',
    outline: 'none',
    caretColor: '#959595'
  },
  checkoutBtn: {
    position: 'absolute',
    bottom: '40px',
    '@media screen and (max-width: 1212px)': {
      width: '241px !important'
    },
    [small]: {
      width: '241px !important'
    }
  },
  orderDetails: {
    marginTop: '50px',
    width: '166px',
    height: '116px',
    fontSize: '14px',
    [small]: {
      marginTop: '29px'
    }
  },
  orderDetailsItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px',
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeight: '100',
    width: '100%',
    '&.bold': {
      fontWeight: '900'
    }
  }
};

export const { classes } = jss.createStyleSheet(cartSummaryStyles).attach();
