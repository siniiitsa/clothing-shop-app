import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const small = '@media screen and (max-width: 790px)';

const PurchaseSuccessModalStyles = {
  modal: {
    width: '500px',
    height: '550px',
    backgroundColor: 'black',
    position: 'absolute',
    top: '21%',
    left: '33%',
    padding: '10px',
    zIndex: '999'
  },
  check: {
    color: 'white',
    fontSize: '250px',
    display: 'block'
  },
  text: {
    color: 'white',
    fontSize: '30px',
    marginBottom: '50px'
  },
  modalContainer: {
    fontFamily: 'Josefin Sans, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  okBtn: {
    marginTop: '50px',
    padding: '23px 50px 13px',
    backgroundColor: 'white',
    textDecoration: 'none',
    fontSize: '50px',
    fontWeight: '700',
    border: 'none',
    color: 'black',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'LIGHTGREEN',
    }
  }
};

export const { classes } = jss.createStyleSheet(PurchaseSuccessModalStyles).attach();
