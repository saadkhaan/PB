import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Clients = () => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={4}
			navigation={true}
			centeredSlides={true}
			loop={true}
			wrapperClass="items-center"
			autoplay={{
				delay: 300,
				disableOnInteraction: false,
			}}
		>
			<SwiperSlide>
				<img src="/CWL-Logo.png" className="w-52" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/kgv-logo.svg" className="w-52" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="/Logo_Edenred_Digital-use.svg" className="w-52" />
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://spade.ventures/wp-content/uploads/2022/09/spade-logo-dark.svg"
					className="w-52"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://galvestonexpressshuttle.com/wp-content/uploads/2023/03/GES-Logo.svg"
					className="w-52"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://houstonbestlimoride.com/wp-content/uploads/2021/07/limousine-logo.png"
					className="w-52"
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Clients;
