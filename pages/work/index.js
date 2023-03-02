import React from "react";

export default function work() {
	return (
		<section className="portfolio bg-gray-50 py-8 md:py-32">
			<div className="container">
				<h2 className="text-3xl font-medium text-gray-900 md:text-6xl">
					Our Work
				</h2>
				<div className="md:w-5/12">
					<p className="mt-2 font-light text-gray-800 md:text-lg">
						We&apos;ve worked on numerous intriguing projects with some
						fantastic firms, but we won&apos;t name them all.
						<span className="font-normal">Here are a few highlights</span>.
					</p>
				</div>
				<div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2">
					<div className="card flex flex-col ">
						<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:max-h-max before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-gray-800 before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
							<div className="card__image relative">
								<img src="/car.png" alt="" className="w-auto md:w-auto" />
							</div>
						</div>
						<div className="card__details">
							<div className="card__details-header group flex  items-center">
								<h3 className="text-xl text-gray-800 md:text-2xl">
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
										fill="#1F2937"
									/>
								</svg>
							</div>

							<p className="text-base text-gray-400 md:text-lg">
								Website Design, Web Development and Social Media Marketing
							</p>
						</div>
					</div>

					<div className="card flex flex-col">
						<div className="card-bg relative h-[200px] px-3 pt-6 before:absolute before:-inset-1 before:block before:h-48 before:max-h-max before:origin-top-left  before:scale-x-75 before:transform before:rounded-lg before:bg-[#000A13] before:transition before:duration-500 before:ease-[cubic-bezier(0.79,0.14,0.15,0.86)] before:hover:scale-x-100 md:h-[300px] md:before:h-72">
							<div className="card__image relative">
								<img
									src="/mic.png"
									alt=""
									className="mx-auto -mt-px w-20 md:-mt-16 md:w-auto"
								/>
							</div>
						</div>
						<div className="card__details">
							<div className="card__details-header group flex  items-center">
								<h3 className="text-xl text-gray-800 md:text-2xl">
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
							<p className="text-base text-gray-400 md:text-lg">
								Website Design and Web Development
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
