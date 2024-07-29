import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Clients = () => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={4}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
			wrapperClass="items-center"
			autoplay
		>
			<SwiperSlide>
				<img
					src="https://f3n7g6g4.rocketcdn.me/wp-content/uploads/2021/04/CWL-Logo.png"
					className="w-52"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://kgv.ae/wp-content/uploads/2023/02/logo.svg"
					className="w-52"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://edenred.ae/wp-content/uploads/2021/02/Logo_Edenred_Digital-use.svg"
					className="w-52"
				/>
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
