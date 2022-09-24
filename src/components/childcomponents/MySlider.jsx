import React from 'react'
import Loginer from './Loginer'
import Slider from "react-slick";

const imageUrls = [
    'https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg',
    'https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg',
    'https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg',
    'https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg',
]
const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    arrows:false,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };
function MySlider({ className }) {
    return (
        <div className={`relative w-full h-[500px] ${className}`}>
            {
                <Slider {...settings}>
                    {
                        imageUrls.map(imageUrl =>
                            <div className='w-full h-full'>
                                <img src={imageUrl} alt="" className='w-full h-[500px] object-cover' />
                            </div>
                        )
                    }
                </Slider>
            }
            <div className='w-full h-[500px] absolute top-0 left-0 bg-gradient-to-r from-getirpurple to-transparent'>
                <div className='w-5/6 mx-auto h-full flex justify-between items-center'>
                    <div className="w-1/3 h-full flex flex-col justify-center">
                        <img width={'180px'} height={'180px'} src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                        <h1 className='text-white text-4xl mt-12 font-medium tracking-wide'>
                            Dakikalar İçinde Kapınızda
                        </h1>
                    </div>
                    <div className="w-96 pb-2 px-2 bg-getirgray rounded-lg">
                        <Loginer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySlider