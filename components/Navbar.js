import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
	const [navbar, setNavbar] = useState(false);
	const router = useRouter();
	return (
		<nav className="w-full border-b border-b-slate-200 bg-slate-50 dark:border-b-slate-600 md:sticky md:top-0 md:z-10 md:bg-slate-50/75 md:shadow-sm md:backdrop-blur-lg dark:md:bg-slate-900">
			<div className="container mx-auto justify-between px-4 md:flex md:items-center">
				<div className="flex items-center justify-between py-3 md:block md:py-5">
					<div className="w-40">
						<Link href="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 155.08 36.98"
							>
								<path
									d="m46.2 18.62 6.45 10.1h-5.97l-3.83-6.6-4.02 6.6h-6.01l6.67-10.25-5.94-9.84h5.94l3.43 6.16 3.69-6.16h5.86l-6.27 9.99Z"
									fill="current"
									className="fill-[#84cc16]"
								/>
								<path
									d="m46.2 15.57 6.45 10.1h-5.97l-3.83-6.6-4.02 6.6h-6.01l6.67-10.25-5.94-9.84h5.94l3.43 6.16 3.69-6.16h5.86l-6.27 9.99Z"
									fill="none"
									stroke="#0f172a"
									strokeMiterlimit="10"
									strokeWidth=".5"
									className="dark:stroke-#0f172a"
								/>
								<path
									d="M11.54 8.11c-2.53 0-4.66 1-6.38 2.99V8.63H0v28.35h5.2V26.4c1.72 1.87 3.82 2.8 6.31 2.8 2.83 0 5.19-1.02 7.08-3.06 1.89-2.04 2.84-4.54 2.84-7.49s-.93-5.47-2.8-7.48c-1.89-2.04-4.25-3.06-7.08-3.06Zm3.1 14.68c-1.03 1.11-2.37 1.66-4.02 1.66s-2.95-.55-3.98-1.66c-1.03-1.11-1.55-2.47-1.55-4.09s.52-2.99 1.55-4.09c1.03-1.11 2.36-1.66 3.98-1.66s2.99.55 4.02 1.66c1.03 1.11 1.55 2.47 1.55 4.09s-.52 2.99-1.55 4.09Zm10.55 5.94h5.2V8.63h-5.2v20.09ZM27.8 0c-.91 0-1.67.31-2.29.92-.61.59-.92 1.34-.92 2.25s.31 1.67.92 2.29c.61.61 1.38.92 2.29.92s1.67-.31 2.29-.92c.61-.61.92-1.38.92-2.29s-.31-1.66-.92-2.25C29.47.31 28.71 0 27.8 0Zm36.02 8.11c-3.1 0-5.62 1-7.56 2.99-1.94 1.97-2.91 4.49-2.91 7.56s.93 5.43 2.8 7.45c1.89 2.04 4.6 3.06 8.11 3.06 3.29 0 6.22-.92 8.77-2.76l-2.06-3.65c-1.99 1.35-4.15 2.03-6.49 2.03-3.17 0-5.12-1.43-5.86-4.28H73.7c.12-.91.18-1.67.18-2.29 0-3.1-.95-5.56-2.84-7.37-1.89-1.82-4.3-2.73-7.23-2.73Zm-5.2 8.52c.32-1.3.94-2.33 1.86-3.08.92-.75 2.03-1.12 3.34-1.12s2.43.38 3.32 1.12c.89.75 1.45 1.78 1.7 3.08H58.63Zm18.84 12.09h5.2V.7h-5.2v28.02Zm21.2-11.02c-.59-.32-2.2-.97-4.83-1.95-1.18-.39-1.77-1.01-1.77-1.84 0-.47.22-.87.65-1.2.43-.33.98-.5 1.64-.5 1.67 0 3.21.66 4.61 1.99l2.58-3.36c-1.84-1.92-4.19-2.88-7.04-2.88-2.29 0-4.11.57-5.46 1.7-1.38 1.16-2.06 2.61-2.06 4.35 0 2.36 1.16 4.09 3.47 5.2.57.29 1.43.65 2.58 1.07 1.3.49 2.1.8 2.4.92.96.44 1.44 1.02 1.44 1.73 0 .57-.26 1.03-.79 1.4-.53.37-1.19.55-1.97.55-1.01 0-2.01-.25-3-.76-1-.5-1.85-1.19-2.56-2.05l-2.77 3.28c2.04 2.58 4.81 3.87 8.3 3.87 2.43 0 4.36-.6 5.79-1.81 1.48-1.2 2.21-2.75 2.21-4.65 0-2.21-1.13-3.91-3.39-5.09Zm18.29-9.59c-2.41 0-4.45.95-6.12 2.84V.7h-5.2v28.02h5.05v-2.51c1.65 1.99 3.74 2.99 6.27 2.99 2.85 0 5.23-1 7.15-2.99 1.92-2.02 2.88-4.52 2.88-7.52s-.96-5.51-2.88-7.52c-1.92-2.04-4.3-3.06-7.15-3.06Zm3.17 14.68c-1.03 1.11-2.36 1.66-3.98 1.66s-2.95-.55-3.98-1.66c-1.03-1.16-1.55-2.53-1.55-4.13s.52-2.95 1.55-4.06c1.03-1.13 2.36-1.7 3.98-1.7s2.95.55 3.98 1.66c1.03 1.11 1.55 2.47 1.55 4.09s-.52 3-1.55 4.13ZM133.32 0c-.91 0-1.67.31-2.29.92-.62.59-.92 1.34-.92 2.25s.31 1.67.92 2.29c.61.61 1.38.92 2.29.92s1.67-.31 2.29-.92c.61-.61.92-1.38.92-2.29s-.31-1.66-.92-2.25c-.62-.61-1.38-.92-2.29-.92Zm-2.62 28.72h5.2V8.63h-5.2v20.09Zm22.82-5.27c-1.2.69-2.32 1.03-3.35 1.03-1.89 0-2.84-1.18-2.84-3.54v-7.96h6.64V8.63h-6.64V1.51h-5.16v7.12h-3.32v4.35h3.28v8.3c0 2.61.59 4.58 1.77 5.92 1.18 1.34 2.92 2.01 5.24 2.01s4.26-.55 5.94-1.66l-1.55-4.09Z"
									fill="#0f172a"
									className="dark:fill-slate-50"
								/>
							</svg>
						</Link>
					</div>
					<div className="md:hidden">
						<button
							className="rounded-md p-2 text-slate-800 outline-none focus:border focus:border-slate-400"
							onClick={() => setNavbar(!navbar)}
						>
							{navbar ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-slate-800"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-slate-800"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div>
					<div
						className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
							navbar ? "block" : "hidden"
						}`}
					>
						<ul className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
							<li>
								<Link
									href="/"
									className={router.pathname == "/" ? "active" : ""}
								>
									/
								</Link>
							</li>
							{/* <li>
								<Link
									href="/about"
									className={router.pathname == "/about" ? "active" : ""}
								>
									About
								</Link>
							</li> */}
							<li>
								<Link
									href="/services"
									className={router.pathname == "/services" ? "active" : ""}
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/work"
									className={router.pathname == "/work" ? "active" : ""}
								>
									Work
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className={router.pathname == "/contact" ? "active" : ""}
								>
									Contact
								</Link>
							</li>
							<li className="group rounded-md border border-slate-200 bg-white text-slate-800 transition-all duration-200 hover:bg-green-500 dark:border-none dark:bg-green-600">
								<Link href="/contact" legacyBehavior>
									<a className="flex items-center space-x-2 px-6 py-3 transition-all duration-200 hover:shadow-xl group-hover:text-white dark:text-slate-50">
										<span>Start a Project</span>
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
									</a>
								</Link>
							</li>
							<li>
								<DarkModeToggle />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
