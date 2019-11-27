import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const small = "@media screen and (max-width: 375px)";

const cartProductStyles = {
  cartProduct: {
    position: "relative",
    animation: 'SHOW_FROM_BOTTOM 1s ease-in-out',
    display: "flex",
    fontFamily: "Open Sans, sans-serif",
    width: "780px",
    borderBottom: "1px solid #C4C4C4",
    margin: "15px 40px",
    paddingBottom: "40px",
    "@media screen and (max-width: 1212px)": {
      width: "700px"
    },
    "@media screen and (max-width: 1132px)": {
      width: "650px"
    },
    "@media screen and (max-width: 1040px)": {
      width: "600px"
    },
    "@media screen and (max-width: 990px)": {
      width: "550px"
    },
    "@media screen and (max-width: 940px)": {
      width: "500px"
    },
    "@media screen and (max-width: 890px)": {
      width: "450px"
    },
    "@media screen and (max-width: 840px)": {
      width: "400px"
    },
    "@media screen and (max-width: 790px)": {
      width: "100%"
    },
    [small]: {
      width: "321px",
      borderBottom: "1px solid black",
      paddingBottom: "28px",
      marginBottom: "10px"
    },
    [small]: {}
  },
  notHistory: {
    margin: "100px auto",
    textAlign: "center",
    fontSize: "20px"
  },
  historyDate: {
    color: "silver",
    margin: "10px",
    marginLeft: '40px',
    fontSize: "13px"
  },
  productImg: {
    marginLeft: "40px",
    width: "186px",
    "@media screen and (max-width: 790px)": {
      width: "170px"
    },
    [small]: {
      width: "127px"
    }
  },
  productDetails: {
    paddingTop: "35px",
    display: "inline-block",
    marginLeft: "37px",
    [small]: {
      marginLeft: "18px"
    }
  },
  productName: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "26px",
    [small]: {
      fontSize: "14px",
      marginBottom: "6px"
    }
  },
  ref: {
    fontSize: "14px",
    color: "#847A7A",
    marginBottom: "25px",
    textTransform: "uppercase",
    [small]: {
      fontSize: "10px",
      marginBottom: "12px"
    }
  },
  pruductColor: {
    color: "#847A7A",
    fontSize: "16px",
    marginBottom: "17px",
    [small]: {
      fontSize: "14px",
      marginBottom: "12px"
    }
  },
  productSize: {
    color: "#847A7A",
    fontSize: "16px",
    marginBottom: "17px",
    [small]: {
      fontSize: "14px",
      marginBottom: "12px"
    }
  },
  detailName: {
    display: "inline-block",
    width: "76px",
    [small]: {
      fontSize: "14px",
      width: "70px"
    }
  },
  productQuant: {
    color: "#847A7A",
    fontSize: "16px",
    marginBottom: "25px",
    [small]: {
      fontSize: "14px"
    }
  },
  productQuantSelectWrapper: {
    color: "black",
    fontSize: "18px"
  },
  productQuantSelectBtn: {
    boxSizing: "border-box",
    fontSize: "18px",
    border: "none",
    backgroundColor: "transparent",
    position: "relative",
    bottom: "1px",
    outline: "none",
    transition: "0.1s",
    "&:hover": {
      cursor: "pointer",
      color: "MEDIUMVIOLETRED"
    },
    "&:active": {
      color: "green"
    }
  },
  productPrice: {
    marginBottom: "13px"
  },
  TotalProductPrice: {
    fontWeight: "700"
  }
};

export const { classes } = jss.createStyleSheet(cartProductStyles).attach();
