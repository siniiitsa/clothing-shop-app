import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let newCollectionsStyle = {
  collectionsContainer: {
    color: "#fff",
    padding: "20px",
    marginTop: "70px"
  },
  collectionsTitle: {
    fontFamily: "Open Sans",
    fontSize: "24px",
    margin: "0 0 17px 53px"
  },
  collectionImgsBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: '100vh'
  },
  collectionItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainCollectionImg: {
    display: "block",
    width: "100%",
    height: "65%",
    minHeight: "123px",
    maxHeight: "464px",
    objectFit: "cover",
    padding: "10px",
    boxSizing: "border-box",
    marginTop: "10px"
  },
  сollectionImg: {
    display: "block",
    width: "30vw",
    height:"49vh",
    padding: "10px",
    objectFit: "cover",
    boxSizing: "border-box"
  },
  collectionItemImg: {
    position: "relative"
  },
  сollectionImgDescription: {
    fontFamily: "Open Sans",
    backgroundColor: "rgba(5,5,5,0.8)",
    left: "0.5em",
    bottom: "0.5em",
    padding: "1em 1.7em",
    display: "inline-block",
    position: "absolute",
    fontWeight: "bold"
  }
};
export const { classes } = jss.createStyleSheet(newCollectionsStyle).attach();
