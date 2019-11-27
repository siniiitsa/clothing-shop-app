import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const productListStyle = {
  productListContainer: {
    marginLeft: "29px",
    marginRight: "29px"
  },
  categoryName: {
    display: "none"
  },
  filter: {
    display: "block",
    fontSize: "20px",
    marginTop: "19px",
    fontFamily: "Josefin Sans"
  },
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "40px"
  },

  linkItem: {
    position: 'relative',
    textDecoration: "none",
    color: "#000",
    transition: '.8s',

    "&:hover": {
      transform: "scale(1.01)",
    }
  },

  productItem: {
    position: 'relative',
    animation: 'SHOW_FROM_BOTTOM 1s ease-in-out',
    fontFamily: "Open Sans",
    cursor: "pointer",
    transition: "0.5s",
    width: "136px",
    marginBottom: "35px",

    "& > p": {
      transition: "0.5s"
    },

    "&:hover > p": {
      marginLeft: "1.5px"
    }
  },
  itemImg: {
    width: "136px",
    height: "175px",
    objectFit: "cover"
  },
  goodsTitle: {
    textTransform: "uppercase",
    fontSize: "12px",
    marginTop: "3px",
    color: "#000"
  },
  goodsPrise: {
    marginTop: "3px",
    color: "rgba(132, 122, 122, 1)"
  },
  "@media (min-width: 436px)": {
    productListContainer: {
      marginLeft: "30px"
    },
    filter: {
      fontSize: "22px",
      marginTop: "20px"
    },
    productList: {
      marginTop: "42px"
    },

    productItem: {
      width: "150px",
      marginBottom: "37px"
    },
    itemImg: {
      width: "200px",
      height: "195px"
    },
    goodsTitle: {
      fontSize: "15px",
      marginTop: "5px"
    },
    goodsPrise: {
      marginTop: "5px"
    }
  },
  "@media (min-width: 509px)": {
    productListContainer: {
      width: "100%",
      maxWidth: "1226px"
    },
    productList: {
      marginTop: "40px"
    },
    categoryName: {
      fontSize: "24px",
      marginTop: "80px",
      marginLeft: "7%"
    },

    productItem: {
      width: "416px",
      marginBottom: "30px"
    },
    itemImg: {
      width: "100%",
      height: "603px"
    },
    goodsTitle: {
      fontSize: "18px",
      marginTop: "20px",
      fontWeight: "700"
    },
    goodsPrise: {
      marginTop: "14px"
    }
  },
  "@media (min-width: 769px)": {
    categoryName:{
      display: 'block'
    },
    filter: {
      display: "none"
    }
  }
};

export const { classes } = jss.createStyleSheet(productListStyle).attach();
