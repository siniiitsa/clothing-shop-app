import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const checkoutStyle = {
    checkoutBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '50px 60px',
        backgroundColor: '#E5E5E5;',
        width: '288px',
        height: '450px',
        margin: '0 auto',
        marginTop: '85px',
        position: 'relative',
        animation: 'SHOW_FROM_BOTTOM 1s ease-in-out'
    },
    headerSection: {
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardIcons:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '250px',
        height: 'auto'

    },
    header: {
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000000',
    },
    total: {
        fontFamily: 'Open Sans',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000000',
    },
    text: {
        fontFamily: 'Open Sans',
        fontWeight: 'normal',
        fontSize: '14px',
        // lineHeight: '19px',
        color: '#000000',
        display: 'flex'
    },
    textlink: {

    },
    checkout: {
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputForm: {
        height: '200px',
        // width: '275px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    input: {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #959595',
        outline: 'none',
        caretColor: '#959595'
    },
    checkoutBtn: {
        boxSizing: 'border-box',
        display: 'block',
        marginLeft: '6px',
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
    expireDate: {
        display: 'inline-flex'
    }
};

export const {classes} = jss.createStyleSheet(checkoutStyle).attach();