import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const goodsSlider = {
  slider: {
    width: "250px",
    "& > ul.slick-dots ": {
      position: "relative",
      bottom: "30px"
    },

    "& > button.slick-arrow.slick-prev": {
      left: "3px",
      bottom: "20px"
    },

    "& > button.slick-arrow.slick-next": {
      right: "3px",

      "&::before": {
        opacity: "0",
        transition: ".5s"
      }
    },

    "& > button.slick-arrow.slick-prev, .slick-next": {
      zIndex: "1",
      width: "30px",
      top: "48%",

      "&::before": {
        color: "black",
        left: "-24px",
        bottom: "20px",
        fontSize: "30px",
        opacity: "0",
        transition: ".5s"
      }
    },

    "&:hover > button.slick-arrow.slick-prev": {
      "&::before": {
        opacity: "1"
      }
    },

    "&:hover > button.slick-arrow.slick-next": {
      "&::before": {
        opacity: "1"
      }
    }
  },

  imageSize: {
    height: "320px",
    width: "250px",
    objectFit: "cover"
  },
  "@media(min-width: 480px)": {
    slider: {
      width: "280px"
    },
    imageSize: {
      height: "350px",
      width: "280px"
    }
  },
  "@media(min-width: 700px)": {
    slider: {
      width: "380px"
    },
    imageSize: {
      height: "420px",
      width: "380px"
    }
  },

  "@media(min-width: 1260px)": {
    slider: {
      width: "415px"
    },

    imageSize: {
      height: "603px",
      width: "415px"
    }
  }
};

export const { classes } = jss.createStyleSheet(goodsSlider).attach();
