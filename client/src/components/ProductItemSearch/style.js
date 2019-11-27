import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const productListSearchStyle = {
  //   productList: {
  //     // marginTop: "22px",
  //     display: "flex",
  //     flexWrap: "no-wrap",
  //     flexDirection: 'row',
  //     justifyContent: "space-between",
  //     overflow: "hidden"
  //   },

  linkItem: {
    textDecoration: "none",
    overflow: "hidden"
  },

  productItem: {
    display: "flex",
    flexWrap: "no-wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontFamily: "Open Sans",
    textAlign: "left",
    marginBottom: "20px",
    cursor: "pointer",
    marginRight: "15px"
  },

  itemImg: {
    height: "100px",
    width: "100px"
  },
  goodsInfoBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "15px"
  },
  goodsTitle: {
    textTransform: "uppercase",
    fontSize: "23px",
    color: "black"
  },
  goodsPrise: {
    fontSize: "20px",
    color: "rgb(132, 122, 122)"
  },
  goodsDetail: {
    fontSize: "18px",
    cursor: "pointer",
    color: "#ccc",
    "&:hover": {
      color: "blue"
    }
  }
};

export const { classes } = jss
  .createStyleSheet(productListSearchStyle)
  .attach();
