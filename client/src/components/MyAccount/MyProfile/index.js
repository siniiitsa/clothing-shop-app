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

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,

} from '@material-ui/pickers';


function MaterialUIPickers(birthday) {
  // The first commit of Material-UI
  let [selectedDate, setSelectedDate] = React.useState(new Date('2000-08-18T21:11:54'));

  if(localStorage.getItem('birthday')){selectedDate = localStorage.getItem('birthday')}

  const handleDateChange = date => {   
    setSelectedDate(date);
    localStorage.setItem('birthday', date);

  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />  

    </MuiPickersUtilsProvider>
  );
}


class MyProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      emailAddress: '',
      lastName: "",
      birthday: "",
      password: '',
      passwordConfirmation: '',

      errors: null
    };
  }


  componentDidMount() {

    const urlBack = "http://localhost:8080";
    const pathProfile = "/api/profile";
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
          firstName: userProfile.firstName,
          emailAddress: userProfile.email,
          lastName: userProfile.lastName,
          birthday: userProfile.birthday
        });
      })
      .catch(error => console.error('Ошибка:', error));

  }



  signUp = () => {
    const { firstName, emailAddress, lastName} = this.state;

    const errors = validate({
      firstName: firstName,
      emailAddress: emailAddress,
   
    }, {
      firstName: constraints.firstName,
      emailAddress: constraints.emailAddress,
    
    });

    if (errors) {
      this.setState({ errors });
    } else {
      this.setState({
        errors: null
      }, () => {
        
    const urlBack = "http://localhost:8080";
    const path = "/api/updateuser";
    const userAuth = JSON.parse(localStorage.getItem("userAuth"));
    let birthday = localStorage.getItem('birthday');
    const data = { lastName: lastName, birthday: birthday };

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

      });
    }
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


  handleFirstNameChange = (event) => {
    const firstName = event.target.value;

    this.setState({ firstName });
  };

  handleLastNameChange = (event) => {
    const lastName = event.target.value;

    this.setState({ lastName });
  };

  handleDateChange = (event) => {
    const birthday = event.target.value;

    this.setState({ birthday });
  };

  handleEmailAddressChange = (event) => {
    const emailAddress = event.target.value;

    this.setState({ emailAddress });
  };

  handlePasswordChange = (event) => {
    const password = event.target.value;

    this.setState({ password });
  };

  handlePasswordConfirmationChange = (event) => {
    const passwordConfirmation = event.target.value;

    this.setState({ passwordConfirmation });
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

    const { firstName, emailAddress, lastName, birthday, password, passwordConfirmation, errors } = this.state;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={classes.container}>
          <MyAccountMenu />
          <div className={classes.myProfileContainer}>

            <form>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                onChange={this.handleFirstNameChange}
                required
                type="text"
                value={firstName}
                disabled
              />
              <TextField
                autoComplete="email"
                error={!!(errors && errors.emailAddress)}
                fullWidth
                helperText={(errors && errors.emailAddress) ? errors.emailAddress[0] : ''}
                label="E-mail address"
                margin="normal"
                onChange={this.handleEmailAddressChange}
                required
                type="email"
                value={emailAddress}
                disabled
              />
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                onChange={this.handleLastNameChange}
                required
                type="text"
                value={lastName}

              />
              <MaterialUIPickers handleDateChange={this.handleDateChange}/>

            </form>  

            <Button color="default" size="medium" disabled={(!lastName) || isPerformingAuthAction} variant="contained" onClick={this.handleSignUpClick}>Save</Button>
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