import React, { Fragment } from "react";
import ClothesImgItem from "../ClothesImgItem";
import { classes } from "./style";
import { Link } from "react-router-dom"

const NewCollections = () => {
  const {
    collectionsContainer,
    collectionsTitle,
    collectionImgsBlock,
    collectionItem,
    mainCollectionImg,
    сollectionImg
  } = classes;
  return (
    <Fragment>
      <div className={collectionsContainer}>
        <p className={collectionsTitle}>New</p>
        <div className={collectionImgsBlock}>
          <Link to = {'product-list/mens'}>
            <div className={classes.collectionItem}>
              <ClothesImgItem
                classes={classes}
                alt="collection man's"
                src="https://images.unsplash.com/photo-1549920867-1629df28cdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                className={mainCollectionImg}
                text="COLLECTION MAN'S"
              />
            </div>
          </Link>
          <div className={collectionItem}>
            <Link to = {'product-list/womens'}>
            <ClothesImgItem
              classes={classes}
              alt="collection women's"
              src="https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className={сollectionImg}
              text="COLLECTION WOMEN'S"
            />
            </Link>
            <Link to = {'product-list/accessories'}>
            <ClothesImgItem
              classes={classes}
              alt="collection accessories"
              src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className={сollectionImg}
              text="COLLECTION ACCESSORIES"
            />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default NewCollections;
