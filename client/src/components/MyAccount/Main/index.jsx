import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { classes } from './style';
import Login from '../../User/Login';



const WelcomePage = () => {

    const {
        title,
        categoryList,
        categoryItem,
        purchaseHistoryItem,
        myProfileItem,
        categoryTitle,
        categoryDescription,
        icon,
        container,
    } = classes;

    const userAuth = JSON.parse(localStorage.getItem("userAuth"));


    return (

        <div className={container}>
            {userAuth &&
                <Fragment>
                    <h1 className={title}>Welcome, {userAuth.firstName} {userAuth.lastName}</h1>
                    <main className={categoryList}>
                        <Link to='/myaccount/myprofile' className={`${categoryItem} ${myProfileItem}`} >
                            <i className={`fas fa-user ${icon}`}></i>
                            <h3 className={categoryTitle}>My profile</h3>
                            <p className={categoryDescription}>Show and update your personal information</p>
                        </Link>
                        <Link to='/myaccount/history' className={`${categoryItem} ${purchaseHistoryItem}`} >
                            <i className={`fas fa-shopping-basket ${icon}`}></i>
                            <h3 className={categoryTitle}>Purchase History</h3>
                            <p className={categoryDescription}>Check the status of your purchase history and returns</p>
                        </Link>
                        {/* <Link to='/myaccount/wishlist' className={categoryItem} >
                                <i className={`fas fa-heart ${icon}`}></i>
                                <h3 className={categoryTitle}>My wishlist</h3>
                                <p className={categoryDescription}>Manage your wishlist</p>
                            </Link> */}
                        <Link to='/myaccount/addressbook' className={categoryItem} >
                            <i className={`far fa-file-alt ${icon}`}></i>
                            <h3 className={categoryTitle}>Address book</h3>
                            <p className={categoryDescription}>Save and manage your addresses</p>
                        </Link>
                    </main>
                </Fragment>
            }
        </div>






    )
};

export default WelcomePage;