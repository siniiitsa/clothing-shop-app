import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const welcomPageStyle = {
  container: {
    textAlign: "center",
    margin: "0 auto"
  },
  title: {
    position: 'relative',
    animation: 'SHOW_FROM_TOP 1s ease-in-out',
    fontFamily: "Josefin Sans",
    fontSize: "36px",
    margin: "158px 0 0 80px"
  },
  categoryList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "139px 0 0 80px"
  },
  categoryItem: {
    textDecoration: "none",
    width: "640px",
    margin: "0 15px 15px 0",
    backgroundColor: "#000000",
    position: "relative",
    textAlign: "left"
  },
  myProfileItem: {
    position: 'relative',
    animation: 'SHOW_FROM_LEFT 1s ease-in-out',
  },
  purchaseHistoryItem: {
    position: 'relative',
    animation: 'SHOW_FROM_RIGHT 1s ease-in-out',
  },
  categoryTitle: {
    fontFamily: "Josefin Sans",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#fff",
    paddingTop: "50px",
    paddingLeft: "115px",
    marginBottom: "10px"
  },
  categoryDescription: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    color: "#fff",
    paddingBottom: "50px",
    paddingLeft: "115px"
  },
  icon: {
    position: "absolute",
    fontSize: "36px",
    color: "#fff",
    top: "62px",
    left: "39px"
  }
};

export const { classes } = jss.createStyleSheet(welcomPageStyle).attach();
