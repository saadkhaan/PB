import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
// import PortfolioCard from "../components/PortfolioCard";
import { useTheme } from "next-themes";

import ServiceCard from "../components/ServiceCard";
import Scroller from "../components/Scroller";
import CallToAction from "../components/CallToAction";
import { motion } from "framer-motion";

export default function Home() {
	const { theme, setTheme } = useTheme();
	return (
		<>
			<Head>
				<title>Expert Web Developers Ready to Bring Your Vision to Life</title>
				<meta
					name="description"
					content="Looking for professional website design, SEO, and marketing solutions? Our team specializes in creating stunning websites, optimizing for search engines, and driving targeted traffic through social media and PPC campaigns. Get started now!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{/* <section className="py-16">
					<div className="mx-auto max-w-3xl text-center">
						<div className="mb-8 text-4xl font-medium leading-none tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl lg:text-7xl">
							<h1>Digital Solutions for Modern Businesses</h1>
						</div>
						<div className="mb-12 text-lg md:font-light text-slate-700 dark:text-slate-200 md:text-xl lg:text-2xl">
							<p>
								Choosing the right digital solutions for your business's needs
							</p>
						</div>
						<div className="flex flex-wrap justify-center gap-3">
							<a className="btn btn-green" href="/contact">
								Let’s do it
							</a>
						</div>
					</div>
				</section> */}

				<section className="relative overflow-hidden bg-gradient-to-br from-white to-slate-100 dark:bg-gradient-to-tr dark:from-slate-900 dark:to-slate-700">
					<div className="container">
						<div className="relative md:grid md:grid-cols-2">
							<div className="flex h-80 max-w-4xl flex-col justify-center md:h-[65vh]">
								<h1>Digital Solutions for Modern Businesses</h1>

								<div className="mb-8 text-lg text-slate-700 dark:text-slate-200 md:mb-10 md:text-xl md:font-light lg:text-xl 2xl:text-2xl">
									<p>
										Choosing the right digital solutions for your
										business&apos;s needs
									</p>
								</div>
								<div className="flex flex-wrap gap-3">
									<Link className="btn btn-dark" href="/contact">
										Let&apos;s Discuss
									</Link>
								</div>
							</div>

							<div className="hidden w-48 self-end md:flex md:w-full md:pt-4">
								<motion.svg
									width="100%"
									viewBox="0 0 691 671"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M465.893 454.305L690 805.233H482.57L349.496 575.914L209.82 805.233H1L232.751 449.093L26.3641 107.199H232.751L351.928 321.23L480.138 107.199H683.746L465.893 454.305V454.305Z"
										fill="current"
										className="fill-slate-200 dark:fill-slate-800"
									/>
									<motion.path
										d="M465.893 348.332L690 699.259H482.57L349.496 469.94L209.82 699.259H1L232.751 343.12L26.3641 1.22568H232.751L351.928 215.257L480.138 1.22568H683.746L465.893 348.332V348.332Z"
										stroke="#9CA3AF"
										strokeWidth="1"
										strokeMiterlimit="10"
										initial={{
											pathLength: 0,
										}}
										animate={{
											pathLength: [0, 1],
										}}
										transition={{
											duration: 5,
											ease: "easeInOut",
										}}
										className="pointer-events-none stroke-slate-400/50 dark:stroke-slate-600"
									/>
								</motion.svg>
							</div>
							<div className="absolute -right-20 bottom-0 w-48 md:hidden">
								<svg
									width="100%"
									viewBox="0 0 691 671"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M465.893 454.305L690 805.233H482.57L349.496 575.914L209.82 805.233H1L232.751 449.093L26.3641 107.199H232.751L351.928 321.23L480.138 107.199H683.746L465.893 454.305V454.305Z"
										fill="#e5e7eb"
										className="dark:fill-slate-700"
									/>
									<path
										d="M465.893 348.332L690 699.259H482.57L349.496 469.94L209.82 699.259H1L232.751 343.12L26.3641 1.22568H232.751L351.928 215.257L480.138 1.22568H683.746L465.893 348.332V348.332Z"
										stroke="#6b7280"
										strokeWidth="0.5"
										strokeMiterlimit="10"
										className="dark:stroke-slate-400"
									/>
								</svg>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-8">
					<Scroller />
				</section>

				<section className="services  py-8 md:py-32">
					<div className="container">
						<h2 className="text-3xl font-medium md:text-center md:text-6xl">
							Our Services
						</h2>
						<div className="mx-auto md:w-1/2">
							<p className="mt-2 text-lg md:text-center">
								At Pixelsbit, we offer a wide range of services to help our
								clients achieve their goals and grow their business. Whether
								you&apos;re looking to build a new website, improve your
								existing website, or promote your business online, our team of
								expert designers and developers are here to help.
							</p>
						</div>
						<div className="mt-4 grid-cols-3 gap-x-6 md:grid">
							<ServiceCard
								icon="/coding-language-icons.png"
								title="Professional Web Development Services"
								content="Our team of expert UI/UX will work with you to create a visually stunning website that is tailored to your specific needs and goals. We specialize in creating responsive websites that are optimized for search engines and user experience. We also provide responsive website design services to ensure that your website looks great on all devices."
							/>
							<ServiceCard
								icon="/ecommerce-icons.png"
								title="E-commerce Development Services"
								content="Our e-commerce websites are designed to help you sell more products and services online. We provide everything you need to set up an online store, including shopping cart integration, payment gateway integration, and inventory management. We also offer ongoing support and maintenance to ensure that your e-commerce website runs smoothly."
							/>
							<ServiceCard
								icon="/social-media-icons.png"
								title="Digital Marketing Services"
								content="We help you promote your website and business online through effective digital marketing strategies. Our services include SEO, PPC, social media marketing, and email marketing. We work closely with our clients to understand their specific needs and goals and then create a digital marketing strategy that is tailored to their specific needs."
							/>
						</div>
					</div>
				</section>

				<section className="overflow-hidden  py-12 md:py-20 lg:py-32">
					<div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-medium md:text-center md:text-6xl">
							What Our Clients Say About Us
						</h2>
						<p className="mt-4 text-lg md:text-center md:md:font-light">
							See what our satisfied customers have to say about our website
							design and development services
						</p>
						<svg
							className="absolute right-full top-full -translate-y-1/4 translate-x-1/3 transform lg:translate-x-1/2 xl:-translate-y-1/2"
							width={404}
							height={404}
							fill="none"
							viewBox="0 0 404 404"
							role="img"
							aria-labelledby="svg-workcation"
						>
							<title id="svg-workcation">Testimonials element</title>
							<defs>
								<pattern
									id="ad119f34-7694-4c31-947f-5c9d249b21f3"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-slate-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={404}
								fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
							/>
						</svg>

						<div className="relative">
							<blockquote className="mt-10">
								<div className="mx-auto max-w-3xl text-2xl font-medium leading-9 md:text-center">
									<p>
										&apos;Pixelsbit exceeded our expectations in terms of both
										website design and customer service. They worked closely
										with us to understand our needs and goals and then created a
										website that exceeded our expectations. We are thrilled with
										the final result and have received many positive comments
										from our customers. We highly recommend Pixelsbit to any
										business looking for professional website design and
										development services.&apos;
									</p>
								</div>
								<footer className="mt-8">
									<div className="md:flex md:items-center md:justify-center">
										<div className="md:flex-shrink-0">
											{/* <img
												className="mx-auto h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/> */}
										</div>
										<div className="mt-3 md:ml-4 md:mt-0 md:flex md:items-center md:text-center">
											<div className=" font-medium text-slate-900 dark:text-slate-400">
												M.Pasha
											</div>

											<svg
												className="mx-1 hidden h-5 w-5 text-green-500 md:block"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M11 0h3L9 20H6l5-20z" />
											</svg>

											<div className=" font-medium text-slate-500">
												CEO, Limousine Rental Business Owner
											</div>
										</div>
									</div>
								</footer>
							</blockquote>
						</div>
					</div>
				</section>
				<section className="featured  md:pt-32">
					<h2 className="mb-3 text-center text-3xl font-medium md:text-6xl">
						Featured Project
					</h2>
					<img src="/featured-banner.jpg" alt="vehicle tracking system" />
				</section>
				<section className="portfolio py-8 md:py-32">
					<div className="container">
						<h2 className="text-3xl font-medium md:text-6xl">Our Work</h2>
						<div className="md:w-5/12">
							<p className="mt-2 text-lg   md:font-light">
								We&apos;ve worked on numerous intriguing projects with some
								fantastic firms, but we won&apos;t name them all.
								<span className="font-normal">Here are a few highlights</span>.
							</p>
						</div>
						<div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2">
							<div className="card flex flex-col ">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:max-h-max before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-slate-800 before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/car.png"
											alt="taxi web design services"
											className="w-auto md:w-auto"
											width="714"
											height="228"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl text-slate-800 dark:text-slate-300 md:text-2xl">
											<a
												href="https://limousine4less.us"
												target="_blank"
												rel="noopener noreferrer"
											>
												Limousine 4 Less
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
												fill="current"
												className="fill-slate-300"
											/>
										</svg>
									</div>

									<p className=" text-lg text-slate-400">
										Website Design, Web Development and Social Media Marketing
									</p>
								</div>
							</div>

							<div className="card flex flex-col">
								<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:max-h-max before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-[#000A13] before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
									<div className="card__image relative">
										<img
											src="/mic.png"
											alt="podcast website design and development"
											className="mx-auto -mt-px w-20 md:-mt-16 md:w-auto"
											width="156"
											height="322"
										/>
									</div>
								</div>
								<div className="card__details">
									<div className="card__details-header group flex  items-center">
										<h3 className="text-xl text-slate-800 dark:text-slate-300 md:text-2xl">
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
												fill="current"
												className="fill-slate-300"
											/>
										</svg>
									</div>
									<p className=" text-lg text-slate-400">
										Website Design and Web Development
									</p>
								</div>
							</div>
						</div>
						<div className="mt-12 flex flex-wrap justify-center">
							<Link className="btn btn-green" href="/work">
								View more
							</Link>
						</div>
					</div>
				</section>
				<section className="cta">
					<div className="container">
						<CallToAction />
					</div>
				</section>
			</main>
		</>
	);
}
