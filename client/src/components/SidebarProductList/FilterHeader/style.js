import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());
const FilterHeader={
    border: {
        borderBottom: '1px solid #3F3D3D',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
    },
    title:{
        fontFamily: "Josefin Sans",
        color:" #3F3D3D",
        fontSize:"14px",
        marginTop: '23px',
        marginBottom: '20px',
    },
    icon:{
        position: 'absolute',
        right: '15px',
        top: '21px',
        cursor: 'pointer',
    }
    
}


export const { classes } = jss.createStyleSheet(FilterHeader).attach();