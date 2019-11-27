import React, { Component } from 'react';
import { classes } from './style';

class Button extends Component {
  state = {
    successMessageActive: false,
    failMessageActive: false
  }

  showFailMessage = (delay) => {
    this.hideSuccessMessage()
    this.setState({ failMessageActive: true });
    setTimeout(this.hideFailMessage, delay);
  }

  hideFailMessage = () => {
    this.setState({ failMessageActive: false });
  }

  showSuccessMessage = (delay) => {
    this.hideFailMessage();
    this.setState({ successMessageActive: true });
    setTimeout(this.hideSuccessMessage, delay)
  }

  hideSuccessMessage = () => {
    this.setState({ successMessageActive: false });
  }

  render() {
    let btnClasses = classes.btn;
    if (this.props.black) btnClasses += ` ${classes.black}`;
    if (this.props.white) btnClasses += ` ${classes.white}`;
    if (this.props.btnSettings) btnClasses += ` ${this.props.btnSettings}`;

    const clickHandler = this.props.clickHandler ? this.props.clickHandler : () => {}; // это на случай, если на кнопке не нужен onClick

    const successMessage = this.state.successMessageActive && 
        <span className={classes.successMsg}>
          <i className={`far fa-check-circle ${classes.msgIcon}`}></i> {this.props.successMessage}
        </span>;

    const failMessage = this.state.failMessageActive && 
        <span className={classes.failMsg}>
          <i className="far fa-times-circle"></i> {this.props.failMessage}
        </span>;

    return (
      <div
        className={btnClasses}
        onClick={() => {
          const success = clickHandler();
          success
            ? this.showSuccessMessage(2000)
            : this.showFailMessage(2000);
        }}>
        
        {failMessage}
        {successMessage}
        <span className={classes.name}>{this.props.name}</span>
      </div>
    );
  }
}

export default Button;
