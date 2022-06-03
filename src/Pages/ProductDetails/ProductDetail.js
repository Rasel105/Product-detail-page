import React, { useEffect, useState } from 'react';
import Swiper from 'react-id-swiper';
const axios = require('axios');

const ProductDetail = () => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        axios.get('https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product')
            .then(function (response) {
                // handle success
                setProducts(response.data);
            })
    }, [])

    console.log(products);

    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
            <div>
                <h2>Hello Bangladesh</h2>
                <Swiper>
                    <div>Slide 1</div>
                    <div>Slide 2</div>
                    <div>Slide 3</div>
                    <div>Slide 4</div>
                    <div>Slide 5</div>
                </Swiper>
            </div>
            <div>
                <h2>Hello Bangladesh</h2>
            </div>
        </div>
    );
};

export default ProductDetail;