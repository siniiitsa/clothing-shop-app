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
    marginLeft: "1vw",
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

  wrapper: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },

  formWrapper: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "20px 40px",
    borderRadius: "10px",
    boxShadow: "0px 10px 50px #555",
    backgroundColor: "#ffffff",
  },

  form: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },

  h1: {
    textAlign: "center",
    width: "100%",
    color: "#111",
    fontWeight: "lighter",
    // fontFamily: "-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    //   Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif",
  },

  label: {
    fontSize: "0.8em",
    marginBottom: "0.25em",
    color: "#222",
    fontWeight: "lighter",
  },

  input: {
    padding: "10px 10px",
    borderRadius: "5px",
    outline: "none",
    border: "1px solid #cfcfcf",
    '&:placeholder': {
      fontSize: "1.2em",
      fontWeight: "lighter",
      color: "#999"
    }
  },

  errorMessage: {
    color: "red",
    fontSize: "0.75em",
    display: "relative",
  },

  firstName: {
    marginRight: "1 %"
  },

  lastName: {
    marginLeft: "1 %"
  },

  // firstName,
  // lastName,
  // email,
  password: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px"
  },

  // firstName,
  lastName: {
    width: "49 %"
  },

  // email,
  password: {
    width: "100 %",
  },

}

export const { classes } = jss.createStyleSheet(myProfileStyle).attach();
