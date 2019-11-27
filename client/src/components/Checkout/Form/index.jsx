import React from 'react';
import { classes } from '../style';
import { updatePurchaseHistory, showCheckoutModal } from '../../../actions/detailGoodsAction';
import { connect } from 'react-redux';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: 'noNumber',
      cardName: 'noName',
      expiryMonth: 'noMonth',
      expiryYear: 'noYear',
      cardCCV: 'noCCV'
    };
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value; //target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log(
      'Change detected. State updated. New state: ' + name + ' = ' + value
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updatePurchaseHistory(this.props.shoppingBag);
		this.props.showCheckoutModal();
  }
	
  render() {
    const {
      checkoutBtn,
      text,
      input,
      inputForm,
      expireDate,
      textlink
    } = classes;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className={inputForm}>
          <div className={text}>
            <label>Card number &nbsp;</label>
            <input
              type='text'
              name='cardNumber'
              placeholder={this.state.cardNumber}
              onChange={this.handleChange}
              className={input}
              maxLength='16'
            />
          </div>
          <div className={text}>
            <label htmlFor='cardName'>Card name &nbsp;</label>
            <input
              name='cardName'
              type='num'
              placeholder={this.state.cardName}
              onChange={this.handleChange}
              className={input}
              id='cardName'
            />
          </div>
          <div className={expireDate}>
            <label className={text}>Expiration date &nbsp;</label>
            <div>
              <select
                className={input}
                name='expiryMonth'
                onChange={this.handleChange}>
                <option></option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <span className={text}>&nbsp;/&nbsp;</span>
            <div>
              <select
                className={input}
                name='expiryYear'
                value={this.state.expiryYear}
                onChange={this.handleChange}>
                <option></option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
          </div>
          <div className={text}>
            <label htmlFor='cardCCV'>CCV&nbsp;</label>
            <input
              name='cardCCV'
              id='cardCCV'
              type='text'
              className={input}
              maxLength='3'
              onChange={this.handleChange}
            />
            &nbsp;
            <a href='http://localhost:3000' className={textlink}>
              What is CCV?
            </a>
          </div>
          <input type='submit' value='PAY' className={checkoutBtn} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		shoppingBag: state.active.shoppingBag
	}
};
const mapDispatchToProps = dispatch => {
  return {
    updatePurchaseHistory: shoppingBag => {
      dispatch(updatePurchaseHistory(shoppingBag));
    },
    showCheckoutModal: () => dispatch(showCheckoutModal())
  };
};


export default connect(
	mapStateToProps,
  mapDispatchToProps
)(CheckoutForm);
