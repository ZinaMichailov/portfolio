import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './ImageSwiper.scss';

SwiperCore.use([Pagination, Navigation]);

export const ImageSwiper = ({ imgUrls }) => {
	return (
		<>
			<Swiper
				className='image-swiper'
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
			>
				{imgUrls.map((img, idx) => (
					<SwiperSlide key={idx}>
						<img src={img} alt='' />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
