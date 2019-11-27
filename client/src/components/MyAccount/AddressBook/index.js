import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';

import validate from 'validate.js';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import constraints from '../../User/constraints';
import MyAccountMenu from '../MyAccountMenu';
import { classes } from "./style";






class MyProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addressFirst: "",
      addressSecond: "",
    
      errors: null
    };
  }


  componentDidMount() {

    const urlBack = "http://localhost:8080";
    const pathProfile = "/api/addressbook";
    const userAuth = JSON.parse(localStorage.getItem("userAuth"));

    const url = urlBack + pathProfile

    userAuth && fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + userAuth.token
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("json", json)
        const userProfile = json
        
        localStorage.setItem('birthday', userProfile.birthday);
        this.setState({
          addressFirst: userProfile.addressFirst,
          addressSecond:  userProfile.addressSecond,
        });
      })
      .catch(error => console.error('Ошибка:', error));

  }



  signUp = () => {
    const { addressFirst, addressSecond} = this.state;
   
    const urlBack = "http://localhost:8080";
    const path = "/api/updateaddress";
    const userAuth = JSON.parse(localStorage.getItem("userAuth"));
   
    const data = { addressFirst, addressSecond };

    const url = urlBack + path

    userAuth && fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + userAuth.token
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("json====", json)
        const userProfile = json
 
      })
      .catch(error => console.error('Ошибка:', error));

  };

  // handleExited = () => {
  //   this.setState(initialState);
  // };

  handleKeyPress = (event) => {
    const key = event.key;

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (key === 'Enter') {
      this.signUp();
    }
  };


  handleAddressFirstChange = (event) => {
    const addressFirst = event.target.value;

    this.setState({ addressFirst });
  };

  handleAddressSecondChange = (event) => {
    const addressSecond = event.target.value;

    this.setState({ addressSecond });
  };








  handleSignUpClick = () => {
    this.signUp();
  };

  render() {

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    // Properties
    const { fullScreen, open, isPerformingAuthAction } = this.props;

    // Events
    const { onClose, onAuthProviderClick } = this.props;

    const { addressFirst, addressSecond, errors } = this.state;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={classes.container}>
          <MyAccountMenu />
          <div className={classes.myProfileContainer}>

            <form>
              <TextField
                fullWidth
                label="First Address"
                margin="normal"
                onChange={this.handleAddressFirstChange}
                required
                type="text"
                value={addressFirst}
                
              />

              <TextField
                fullWidth
                label="Second Address"
                margin="normal"
                onChange={this.handleAddressSecondChange}
                required
                type="text"
                value={addressSecond}

              />
        

            </form>  

            <Button color="default"  size="medium"  disabled={(!addressFirst) || isPerformingAuthAction} variant="contained" onClick={this.handleSignUpClick}>Save</Button>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

// SignUpDialog.propTypes = {
//   fullScreen: PropTypes.bool,
//   open: PropTypes.bool.isRequired,

//   isPerformingAuthAction: PropTypes.bool.isRequired,

//   signUp: PropTypes.func.isRequired,

//   onClose: PropTypes.func.isRequired,
//   onAuthProviderClick: PropTypes.func.isRequired
// };

export default MyProfile;