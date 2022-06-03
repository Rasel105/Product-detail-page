import React, { useEffect, useState } from 'react';
import Gallary from '../Gallary/Gallary';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const axios = require('axios');
const ProductDetail = () => {
    const [products, setProducts] = useState({});
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        axios.get('https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product')
            .then(function (response) {
                // handle success
                setProducts(response.data);
                setLoader(true);
            })
    }, [])

    if (loader) {
        console.log(products);
    }

    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 container mx-auto'>
            {loader && <div>
                <h2>Hello Bangladesh</h2>
                <Carousel>
                    <div>
                        <img src={products?.gallery[0]?.url} alt="" />
                    </div>
                    <div>
                        <img src={products?.gallery[1]?.url} alt="" />
                    </div>
                    <div>
                        <img src={products?.gallery[2]?.url} alt="" />
                    </div>
                </Carousel>
            </div>}
            <div>
                <h2>Hello Bangladesh</h2>
            </div>
        </div>
    );
};

export default ProductDetail;