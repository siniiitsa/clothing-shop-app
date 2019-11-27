import React from 'react';
import {classes} from './style';
import { hideCheckoutModal } from '../../../actions/detailGoodsAction';
import {connect} from 'react-redux'

const PurchaseSuccessModal = ({hideCheckoutModal}) => {
  const {modal, text, okBtn, modalContainer, check} = classes;
  return (
    <div className={modal}>
      <div className={modalContainer}>
        <p className={text}>Your payment is Succesfull!</p>
        <i class={`far fa-check-circle ${check}`}></i>
        <a href='/' className={okBtn}>
          ok
        </a>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    hideCheckoutModal: () => dispatch(hideCheckoutModal())
  }
}
 
export default connect(null, mapDispatchToProps)(PurchaseSuccessModal);