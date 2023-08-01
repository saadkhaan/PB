import Link from "next/link";

export default function CallToAction() {
	return (
		<div className="mx-auto max-w-full py-24 sm:px-6 sm:py-32 lg:px-0">
			<div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1024 1024"
					className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
					aria-hidden="true"
				>
					<circle
						cx={512}
						cy={512}
						r={512}
						fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
						fillOpacity="0.7"
					/>
					<defs>
						<radialGradient
							id="759c1415-0410-454c-8f7c-9a820de03641"
							cx={0}
							cy={0}
							r={1}
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(512 512) rotate(90) scale(512)"
						>
							<stop stopColor="#059669" />
							<stop offset={1} stopColor="#15803d" stopOpacity={0} />
						</radialGradient>
					</defs>
				</svg>
				<div className="mx-auto max-w-md md:text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Take your online presence to the next level.
						<br />
						<span className="text-2xl font-medium">
							Get in touch with Pixelsbit today.
						</span>
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-200">
						Our team of experienced professionals is ready to help you create
						and maintain a professional, effective online presence through web
						design, development, and digital marketing services. Don't wait any
						longer, reach out to us and start seeing results.
					</p>
					<div className="mt-10 flex items-center gap-x-6 md:justify-center lg:justify-start">
						<Link
							className="btn btn-dark flex space-x-2 bg-green-500 text-black hover:bg-gray-100 hover:text-black"
							href="/contact"
						>
							<span className="font-medium">Start a Project</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
								/>
							</svg>
						</Link>
					</div>
				</div>
				<div className="relative mt-16 h-80 lg:mt-8">
					<img
						className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
						src="/code.jpg"
						alt="App screenshot"
						width={1824}
						height={1080}
					/>
				</div>
			</div>
		</div>
	);
}
