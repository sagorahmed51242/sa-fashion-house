
import { useState, useEffect } from 'react';
import logo from './../assets/images/logo-removebg-preview.png'

const images = [
    'https://i.ibb.co.com/x50Vfgh/63f5c43e9c3c993d87c8f461-Zysg36-RRK-CY4-KQn-D7-SMz1-O1o-YTq4-ATv-MIo-Lkpba-JDi-PSm-P8-VY8w-MOkyh-D0.png',
    'https://i.ibb.co.com/sQnnMfX/1706294374-5968.jpg',
    'https://i.ibb.co.com/WV5t2rb/Cover-EBE-1170x675.jpg',
    'https://i.ibb.co.com/zH0Gw8R/Ecommerce-Website-Development-Service1.jpg',
    'https://i.ibb.co.com/jwk6PHr/360-F-794318493-zd15-A3-T9jwuf-IZbz13-Gh-Xle-OZl-NCu8-Vj.jpg',
    'https://i.ibb.co.com/SxYGvVP/61lw-Jy4-B8-PL-SX3000.jpg',
    'https://i.ibb.co.com/PjKQQ67/81-Kkr-QWEHIL-SX3000.jpg',
    'https://i.ibb.co.com/X4zRBJR/61z-Ajw4bq-PL-SX3000.jpg',
    'https://i.ibb.co.com/p1MQ553/71-Tfszeu0-DL-SX3000.jpg',
    'https://i.ibb.co.com/L57ZRN3/71-Ie3-JXGf-VL-SX3000.jpg'
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    useEffect(() => {
        const interval = setInterval(nextSlide, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative w-[1340px] h-[530px] mx-auto overflow-hidden'>
            <div className="overflow-hidden">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-[100%] h-[100%] object-fill" />
            </div>
            <div className='absolute top-0 z-20 left-0 bg-[#00000096] w-full h-full flex justify-center'>
            <button className="cursor-pointer absolute top-[35%] left-2 p-3 text-white text-lg bg-[#000000a5] translate-y-[-50%] rounded-full" onClick={prevSlide}>&#10094;</button>
            <button className="cursor-pointer right-2 absolute top-[35%] p-3 text-white text-lg bg-[#000000a5] translate-y-[-50%] rounded-full" onClick={nextSlide}>&#10095;</button>
                <div className='top-24 absolute'>
                    <img src={logo} alt="" />
                </div>
            </div>
            {/* <div className="w-full h-[500px] absolute bottom-0 bg-gradient-to-b from-[#000000d6] to-[#bf0000]">
            </div> */}
        </div>
    );
};

export default Slider;
