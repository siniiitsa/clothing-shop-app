import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import SliderView from '../../components/MainPage/Slider';
import NewCollections from '../../components/MainPage/NewCollections';
import ShopByCategory from '../../components/MainPage/ShopByCategory';
import Footer from '../../components/Footer';

const MainPage = props => {
  return (
    <>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <div style={{ backgroundColor: '#000' }}>
        <Header />
        <SliderView />
        <NewCollections />
        <ShopByCategory />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
