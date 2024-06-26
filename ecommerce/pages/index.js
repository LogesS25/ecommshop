import React from 'react';
import { client } from '../lib/client';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2> Best selling products </h2>
        <p>Different brands of headphones</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>

  )
}

export const getServerSideProps = async () => {
  //a sanity query to grab all products from sanity dashboard
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  //bannerquery
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home