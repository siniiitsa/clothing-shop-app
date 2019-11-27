import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let myProfileStyle = {
  container: {
    margin: "3%"
  },
  myProfileContainer: {
    padding: "1vw",
    fontFamily: "Josefin Sans",
    fontSize: "1.5vw",
    marginLeft: "15vw",
    width: "50%"
  },
  myProfileTitle: {
    marginTop: "3vw",
    marginBottom: "1vw",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  myProfileText: {
    width: "50%",
    paddingRight: "7px",
    borderBottom: "2px solid silver",
  },
  saveBtn: {
    marginTop: "6vw",
    backgroundColor: 'black',
    textTransform: "uppercase",
    color: 'white',
    fontSize: '1.8vw',
    width: '20vw',
    height: '5vw',
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid black',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    }
  },

}

export const { classes } = jss.createStyleSheet(myProfileStyle).attach();
