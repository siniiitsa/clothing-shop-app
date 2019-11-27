import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());
let PriceStyle = {
  priceNum: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "18px",
    display: "inline-block"
  },
  btn: {
    display: "inline-flex",
    color: "#000",
    backgroundColor: "#fff",
    fontFamily: "Arial",
    fontSize: "18px",
    marginLeft: "15px",
    cursor: "pointer",
    width: "45px",
    height: "27px",
    alignItems: "center",
    justifyContent: "center"
  },
  "@media (max-width: 768px)": {
    priceNum: {
      color: "black"
    },
    priceContainer: {
      marginLeft: "50px",
      marginTop: "20px"
    }
  },
  resetfilterBtn: {
    borderBottom: "1px solid transparent",
    marginTop: "19px",
    marginBottom: "19px",
    cursor: "pointer",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    display: "inline-block",
    paddingTop: "2px",
    paddingBottom: "2px",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: "normal",

    "&:hover": {
      borderBottom: "1px solid #fff"
    }
  }
};
export const { classes } = jss.createStyleSheet(PriceStyle).attach();
