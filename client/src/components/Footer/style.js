import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let footerStyle = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    width: "85%",
    margin: "0 auto",
    marginTop: "231px",
    paddingBottom: "122px",
    '@media screen and (max-width: 570px)': {
      flexDirection: 'column',
      paddingBottom: '40px'
    },
  },
  footerItem: {
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    '@media screen and (max-width: 770px)': {
      width: '180px'
    },
    '@media screen and (max-width: 670px)': {
      width: '150px',
    },
    '@media screen and (max-width: 570px)': {
      width: '120px',
      fontSize: '12px',
      lineHeight: '10px'
    },
    '@media screen and (max-width: 570px)': {
      width: '100%',
      marginBottom: '8px'
    },
  },
  footerItemTitle: {
    fontFamily: "Josefin Sans",
    fontSize: "24px",
    lineHeight: "24px",
    marginBottom: "35px",
    '@media screen and (max-width: 670px)': {
      marginBottom: "25px",
      fontSize: "18px",
      borderBottom: '1px solid white'
    },
    '@media screen and (max-width: 670px)': {
      marginBottom: "20px",
      fontSize: "18px",
      borderBottom: '1px solid white'
    },
    '@media screen and (max-width: 470px)': {
      marginBottom: '15px'
    },
  },
  footerLink: {
    fontFamily: "Open Sans",
    lineHeight: "35px",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      textDecoration: "underline"
    },
    '@media screen and (max-width: 670px)': {
      lineHeight: '25px',
      marginBottom: '13px',
      borderBottom: '1px solid #3D3D3D',
      paddingBottom: '1px'
    },
    '@media screen and (max-width: 570px)': {
      lineHeight: '18px',
      marginBottom: '10px',
    },
  }
};
export const { classes } = jss.createStyleSheet(footerStyle).attach();
