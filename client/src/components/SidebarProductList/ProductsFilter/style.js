import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let ProductsFilterStyle = {
  categorySection: {
    marginTop: "16px",
    marginBottom: "18px"
  },

  sectionTitle: {
    fontFamily: "Josefin Sans",
    fontWeight: "bold",
    fontSize: "18px",
    textTransform: "uppercase",
    color: "#fff"
  },

  categorySectionTitle: {
    paddingTop: "14px",
    paddingBottom: "14px"
  },

  sectionItem: {
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    display: "inline-block",
    paddingTop: "2px",
    paddingBottom: "2px",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: "normal"
  },

  categorySectionItem: {
    borderBottom: "1px solid transparent",
    marginTop: "19px",
    marginBottom: "19px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "1px solid #fff"
    }
  },
  sybCategoryLink: {
    borderBottom: '1px solid transparent',
    marginTop: '19px',
    marginBottom: '19px',
    marginLeft: '15px',
    '&:hover':{
      borderBottom: '1px solid #fff',
    },
  },

  categorySectionlinck: {
    borderBottom: "1px solid transparent",
    marginTop: "19px",
    marginBottom: "19px",
    "&:hover": {
      borderBottom: "1px solid #fff"
    }
  },

  colorSection: {
    marginTop: "18px"
  },

  colorSectionTitle: {
    paddingTop: "15px",
    paddingBottom: "15px"
  },

  colorSectionItem: {
    marginLeft: "29px",
    borderBottom: "1px solid transparent",
    marginTop: "15px",
    marginBottom: "15px",
    "&:hover": {
      borderBottom: "1px solid #fff"
    }
  },

  resetfilterBtn: {
    fontSize: "20px"
  },
  colorCircle: {
    display: "inline-block",
    borderRadius: "50%",
    width: "21px",
    height: "21px",
    border: "1px solid #847A7A"
  },

  colorItem: {
    display: "flex",
    alignItems: "center"
  },

  priceSection: {
    marginTop: "68px"
  },

  priceSectionTitle: {
    paddingTop: "10px",
    paddingBottom: "10px"
  },

  mobileCategoiFilter: {
    display: "none"
  },
  "@media (max-width: 768px)": {
    categorySectionItem: {
      display: "none"
    },
    categorySectionTitle: {
      display: "none"
    },
    mobileCategoiFilter: {
      display: "inline",
      textTransform: "uppercase",
      fontFamily: "Open Sans",
      fontSize: "16px",
      marginLeft: "25px",
      marginRight: "10px"
    },
    categoriesMenu: {
      marginLeft: "50px"
    },
    categorySectionlinck: {
      marginTop: "30px",
      marginBottom: "0"
    },
    colorSectionTitle: {
      fontFamily: " Open Sans",
      fontWeight: " normal",
      fontSize: "16px",
      color: " #000000",
      marginLeft: "25px",
      padding: "0",
      marginRight: "10px"
    },
    sectionItem: {
      color: " #000000"
    },
    mobileColor: {
      display: "flex"
    },
    colorCircle: {
      border: "1px solid black"
    },
    colorItem: {
      marginLeft: "45px"
    },
    priceSection: {
      marginTop: "17px"
    },
    priceSectionTitle: {
      color: "black",
      fontFamily: "Open Sans",
      fontSize: "16px",
      marginLeft: "25px",
      marginRight: "10px",
      fontWeight: " normal",
      padding: "0"
    }
  }

}
export const { classes } = jss.createStyleSheet(ProductsFilterStyle).attach();
