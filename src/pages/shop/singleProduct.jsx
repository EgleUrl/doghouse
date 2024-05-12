import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import ProductDisplay from "../../components/productDisplay";

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch("../../products.json")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);

    const result = product.filter((p) => p.id === id);

    return (
        <div>
            <PageHeader title={"Single Product"} curPage={"Product"} />
            <div className="main container-fluid"> 
              <div className="row justify-content-center">
                <div className="col-lg-8 col-12">             
                  <article>
                    <div className="row align-items-center p-4">
                      <div className="map-area col-md-6 col-12">
                        <div className="m-4"> 
                          <Swiper autoplay={{ delay: 4500, disableOnInteraction: false, }} 
                            navigation={true} modules={[Autoplay,  Navigation]} className="mySwiper">
                              {result.map((item, i) => (
                                <SwiperSlide key={i}>
                                  <div >
                                    <img src={item.img1} alt={item.imgAlt} />
                                  </div>
                                </SwiperSlide>
                            ))}
                              {result.map((item, i) => (
                                <SwiperSlide key={i}>
                                  <div >
                                    <img src={item.img2} alt={item.imgAlt} />
                                  </div>
                                </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>                      
                      <div className="col-md-6 col-12">
                        <div className="post-content">
                          <div>
                            {result.map(item => <ProductDisplay item={item} key={item.id}/>)}
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </article>
                </div>
              </div>
            </div>
          </div>
  );
};
export default SingleProduct;