import React, { Fragment } from "react";
import { classes } from "./style";

const Footer = () => {
  const { footer, footerItem, footerLink, footerItemTitle } = classes;
  return (
    <Fragment>
      <footer className={footer}>
        <div className={footerItem}>
          <p className={footerItemTitle}>HELP</p>
          <a className={footerLink} href="/">
            Frequently asked questions
          </a>
          <a className={footerLink} href="/">
            Contact
          </a>
          <a className={footerLink} href="/">
            How to purchase
          </a>
          <a className={footerLink} href="/">
            Payment
          </a>
        </div>
        <div className={footerItem}>
          <p className={footerItemTitle}>FOLLOW US</p>
          <a className={footerLink} href="/">
            Facebook
          </a>
          <a className={footerLink} href="/">
            Instagram
          </a>
          <a className={footerLink} href="/">
            Pinterest
          </a>
        </div>
        <div className={footerItem}>
          <p className={footerItemTitle}>COMPANY</p>
          <a className={footerLink} href="/">
            History of the brand
          </a>
          <a className={footerLink} href="/">
            Policy
          </a>
          <a className={footerLink} href="/">
            Work with Us
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
