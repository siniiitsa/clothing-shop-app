import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let LeftSideMenuStyle = {
  leftMenu: {
    width: "25%",
    paddingLeft: "7%",
    background: "#000",
    position: 'relative',
    animation: 'SHOW_SIDEBAR_MENU 1s ease'
  },

  main: {
    display: "flex"
  },
  "@media (max-width: 768px)": {
    leftMenu: {
      display: "none"
    }
  }
};
export const { classes } = jss.createStyleSheet(LeftSideMenuStyle).attach();
