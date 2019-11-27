import React from "react";

const ClothesImgItem = ({ classes, alt, src, className, text }) => {
  return (
    <div className={classes.collectionItemImg}>
      <img draggable="false" className={className} alt={alt} src={src} />
      <p className={classes.сollectionImgDescription}>{text}</p>
    </div>
  );
};

export default ClothesImgItem;
