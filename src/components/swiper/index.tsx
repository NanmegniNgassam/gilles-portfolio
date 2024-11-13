import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay  } from 'swiper/modules';
import image_0 from '../../assets/images/0.png' 
import image_1 from '../../assets/images/1.png' 
import image_2 from '../../assets/images/2.png' 
import image_3 from '../../assets/images/3.png' 
import image_4 from '../../assets/images/4.png' 
import image_5 from '../../assets/images/5.png'
import image_6 from '../../assets/images/6.png'
import image_7 from '../../assets/images/7.png'
import image_8 from '../../assets/images/8.png'
import image_9 from '../../assets/images/9.png'
import image_10 from '../../assets/images/10.png'

import './swiper.css'

// import required modules


// Import Swiper styles
import "swiper/swiper-bundle.css";

const SwiperSection = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={
                {delay: 5000}
            }
        >
            <SwiperSlide>
                <img src={image_0} />
            </SwiperSlide>                        
            <SwiperSlide>
                <img src={image_1} />
            </SwiperSlide>                        
            <SwiperSlide>
                <img src={image_2} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image_3} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image_4} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image_5} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image_6} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image_7} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image_8} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image_9} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image_10} />
            </SwiperSlide>
        </Swiper>
    );
}
 
export default SwiperSection;