import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let FilterPathStyle = {
    filterPathText: {
        textDecoration: 'none',
        color: '#C4C4C4',
        fontFamily: 'Josefin Sans',
        fontWeight: 300,
        fontSize: '16px',
    },

    filterPath: {
        paddingTop: '23px',
        paddingBottom: '23px',
    }
}
export const { classes } = jss.createStyleSheet(FilterPathStyle).attach();