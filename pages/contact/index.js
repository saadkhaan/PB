import { useState } from "react";
import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

export default function Contact() {
	const [state, handleSubmit] = useForm("mnqlglqj");
	if (state.succeeded) {
		return (
			<section className="flex items-center py-72">
				<div className="container text-center">
					<h2 className="mb-6">Thank you.</h2>
					<p>Your form has been received and I will contact you very soon!</p>
				</div>
			</section>
		);
	}

	return (
		<>
			<Head>
				<title>Contact us for a great web design and web development</title>
				<meta
					name="description"
					content="Ready to grow your business online? Our web design, web development, SEO, and online marketing services are designed to drive results. Reach your target audience on Google and social media platforms. Contact us to get started!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="overflow-hidden bg-white px-4 py-16 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24">
				<div className="relative mx-auto max-w-xl">
					<svg
						className="absolute left-full translate-x-1/2 transform"
						width={404}
						height={404}
						fill="none"
						viewBox="0 0 404 404"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
							fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
						/>
					</svg>
					<svg
						className="absolute bottom-0 right-full -translate-x-1/2 transform"
						width={404}
						height={404}
						fill="none"
						viewBox="0 0 404 404"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
							fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
						/>
					</svg>
					<div className="text-center">
						<h2 className="text-3xl font-medium dark:text-slate-50 md:text-6xl">
							Contact us
						</h2>
						<p className="mt-4 text-lg leading-6 text-slate-500 dark:text-slate-300">
							Let&apos;s set things in motion! We&apos;re excited to hear more
							about you and your concepts.
						</p>
					</div>
					<div className="mt-12">
						<form
							method="POST"
							onSubmit={handleSubmit}
							className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
						>
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm font-medium "
								>
									First name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										required
										className="block w-full rounded-md border-slate-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
								<ValidationError
									prefix="Email"
									field="email"
									errors={state.errors}
								/>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm font-medium "
								>
									Last name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full rounded-md border-slate-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
								<ValidationError
									prefix="Message"
									field="message"
									errors={state.errors}
								/>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="company" className="block text-sm font-medium ">
									Company
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="company"
										id="company"
										autoComplete="organization"
										className="block w-full rounded-md border-slate-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
								<ValidationError
									prefix="Message"
									field="message"
									errors={state.errors}
								/>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="email" className="block text-sm font-medium ">
									Email
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="block w-full rounded-md border-slate-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
								<ValidationError
									prefix="Email"
									field="email"
									errors={state.errors}
								/>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className="block text-sm font-medium ">
									Message
								</label>
								<div className="mt-1">
									<textarea
										id="message"
										name="message"
										rows={4}
										className="block w-full rounded-md border border-slate-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
										defaultValue={""}
									/>
								</div>
								<ValidationError
									prefix="Email"
									field="email"
									errors={state.errors}
								/>
							</div>
							<div className="sm:col-span-2">
								<button
									type="submit"
									className="btn btn-dark w-full"
									disabled={state.submitting}
								>
									Let&apos;s talk
								</button>
							</div>
						</form>
						<div className="mt-12 w-full text-center text-slate-900 dark:text-slate-400">
							<Link href="/">Back to home</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
