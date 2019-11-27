import React from 'react';
import {classes} from './style';
import CheckoutInfo from './CheckoutInfo/index'
import CheckoutForm from './Form/index'



class CheckoutBox extends React.Component {
    render() {
        const {checkoutBox} = classes;
        return (
            <div className={checkoutBox}>
                <CheckoutInfo/>
                <CheckoutForm/>
            </div>
        )
    }
}

export default CheckoutBox;
