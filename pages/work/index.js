import Head from "next/head";
import React from "react";

export default function work() {
	return (
		<>
			<Head>
				<title>
					Boost Your Online Presence with Expert Website Design, SEO, and Online
					Marketing Services
				</title>
				<meta
					name="description"
					content="Unlock your online potential with our integrated website design, SEO, social media marketing, and PPC services. From stunning websites to effective online campaigns, we have you covered. Maximize your ROI with our expert team!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="portfolio bg-gray-50 py-8 md:py-32">
				<div className="container">
					<h2 className="text-3xl font-medium dark:text-slate-50 md:text-6xl">
						Our Work
					</h2>
					<div className="md:w-5/12">
						<p className="mt-2 md:text-lg md:font-light">
							We&apos;ve worked on numerous intriguing projects with some
							fantastic firms, but we won&apos;t name them all.
							<span className="font-normal"> Here are a few highlights</span>.
						</p>
					</div>
					{/* Ecommerce Section */}
					<div className="row mt-28">
						<h3 className="block text-2xl md:mb-20 md:text-center md:text-5xl">
							E-commerce / Shopify, WooCommerce
						</h3>
						<div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2">
							{/* Amicis */}
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-[#000] before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/amicis-logo.svg"
											alt="Amicis - flower shop in Dubai"
											className="mx-auto mt-14 h-auto w-48 md:mt-16 md:w-72"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex items-center">
										<h3 className="text-xl md:text-2xl">
											<a
												href="https://amicis.ae"
												target="_blank"
												rel="noopener noreferrer"
											>
												Amicis
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Shopify Web Development
									</p>
								</div>
							</div>
							{/* Amicis */}
							{/* Summer Salt */}
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-[#F8F5F0] before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/summer-salt.svg"
											alt="Summer Salt Fashion Dubai"
											className="mx-auto mt-14 h-auto w-48 md:mt-16 md:w-72"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://summer-salt.ae"
												target="_blank"
												rel="noopener noreferrer"
											>
												Summer Salt (Clothing)
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Website Design, Shopify Web Development and Social Media
										Marketing
									</p>
								</div>
							</div>
							{/* Summer Salt */}
							{/* TT */}
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-slate-100 before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/TomorrowTech-Logo.svg"
											alt="Logo of Tomorrow Tech Dubai"
											className="mx-auto h-auto w-48 md:mt-12 md:w-40"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://ttofficial.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Tomorrow Tech (TT)
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Website Design, Web Development
									</p>
								</div>
							</div>
							{/* TT */}
							{/* Tallow Bias */}
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-white before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/tallow-logo.svg"
											alt="Logo of Tallow Bias Dubai"
											className="mx-auto h-auto w-48 md:mt-16 md:w-48"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://thetallowbias.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Tallow Bias
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Website Design, Web Development
									</p>
								</div>
							</div>
							{/* Tallow Bias */}
							{/* House of Wisdom */}
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-[#8AAC8C] before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/how.webp"
											alt="Logo of House of Wisdom Dubai"
											className="mx-auto h-auto w-16 md:-mt-2 md:w-32"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://houseofwisdom.me/"
												target="_blank"
												rel="noopener noreferrer"
											>
												House of Wisdom
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Website Design, Web Development
									</p>
								</div>
							</div>
							{/* Tallow Bias */}
						</div>
					</div>
					{/* E-commerce Section */}
					<div className="portfolio-container mt-12 md:mt-20">
						<h3 className="block text-2xl md:mb-20 md:text-center md:text-5xl">
							Corporate Websites
						</h3>
						<div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2">
							<div className="card flex flex-col">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-[#000A13] before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/mic.png"
											alt="Podcast website design and web development service"
											className="mx-auto -mt-px w-20 md:-mt-16 md:w-auto"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://conversationswithloulou.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												Conversations with Loulou
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Website Design and Web Development
									</p>
								</div>
							</div>
							<div className="card flex flex-col">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-[#041243] before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/card.png"
											alt="Edenred Dubai web development"
											className="mx-auto -mt-px w-44 md:-mt-12 md:w-auto"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://edenred.ae/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Edenred
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Website Design and Web Development
									</p>
								</div>
							</div>

							<div className="card flex flex-col">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-neutral-950 before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/spade-logo.svg"
											alt="Ventures website"
											className="w-md-80 mx-auto mt-8 h-auto w-48 md:mt-16"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://spade.ventures/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Spade Ventures
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Web Design and Web Development
									</p>
								</div>
							</div>

							{/* KGV */}
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-neutral-900 before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/kgv-logo.svg"
											alt="Web design and development for a group of companies"
											className="w-md-60 mx-auto mt-6 h-auto w-32 md:mt-16"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://kgv.ae"
												target="_blank"
												rel="noopener noreferrer"
											>
												K-Group
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Web Design, Web Development
									</p>
								</div>
							</div>
							{/* KGV */}
						</div>
					</div>

					{/* Section 2 */}
					<div className="row mt-28">
						<h3 className="block text-2xl md:mb-20 md:text-center md:text-5xl">
							Car Rental / Limousine Services Websites
						</h3>
						<div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2">
							{/* Limousine 4 Less */}
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-slate-950 before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/limo-front-view.png"
											alt="Limo service and car rental web design and web development"
											className="mx-auto -mt-4 w-56 md:-mt-12 md:w-auto"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://galvestonexpressshuttle.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												Galveston Express Shuttle
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Website Design, Web Development and Social Media Marketing
									</p>
								</div>
							</div>
							{/* Limousine 4 Less */}

							{/* Black Cab Houston */}
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-neutral-950 before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/car.png"
											alt="Black Cab Houston"
											className="w-auto md:w-auto"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl  md:text-2xl">
											<a
												href="https://blackcabhouston.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Black Cab Houston
											</a>
										</h3>
										<svg
											width="16"
											height="10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-2 transform transition-all duration-200 group-hover:ml-4"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
												fill="#1F2937"
											/>
										</svg>
									</div>
									<p className="text-base  md:text-lg">
										Website Design, Web Development and Social Media Marketing
									</p>
								</div>
							</div>
							{/* Black Cab Houston */}
						</div>
					</div>
					{/* Section 2 */}
				</div>
			</section>
		</>
	);
}
