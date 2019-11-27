import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let newCollectionsStyle = {
  collectionsContainer: {
    color: "#fff",
    padding: "30px",
    maxWidth: '1266px',
    margin: '0 auto'
  },
  collectionsTitle: {
    fontFamily: "Open Sans",
    fontSize: "24px",
    margin: "0 0 17px 53px"
  },
  collectionImgsBlock: {
    display: "flex",
    justifyContent: "space-between"
  },
  collectionItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mainCollectionImg: {
    display: "block",
    width: "45vw",
    minHeight: "242px",
    maxHeight: "980px",
    objectFit: "cover",
    marginRight: "15px"
  },
  сollectionImg: {
    display: "block",
    width: "40vw",
    minHeight: "116px",
    maxHeight: "480px",
    objectFit: "cover",
  },
  collectionItemImg: {
    position: "relative"
  },
  сollectionImgDescription: {
    fontFamily: "Open Sans",
    backgroundColor: "rgba(5,5,5,0.8)",
    left: "0",
    bottom: "0",
    padding: "1em 1.7em",
    display: "inline-block",
    position: "absolute",
    fontWeight: "bold",
    color: "white"
  }
};
export const { classes } = jss.createStyleSheet(newCollectionsStyle).attach();
