import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import ProductContent from "../../components/SidebarProductList/ProductContent";

const ProductsPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Goods list</title>
      </Helmet>
      <Header />
      <ProductContent />
    </Fragment>
  );
};

export default ProductsPage;
