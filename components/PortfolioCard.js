import Image from "next/image";
import Link from "next/link";
import React from "react";
import car from "../public/car.png";

export default function PortfolioCard({
	img,
	title,
	details,
	bgColor,
	mx,
	mt,
	mb,
	mdMt,
	mdWidth,
	w,
	url,
	width,
	height,
}) {
	let className = `absolute w-[80%] transform rounded-lg py-20 transition-all duration-200 group-hover:w-full md:py-36`;
	if (bgColor) className = className + ` bg-${bgColor}`;
	if (mt) className = className + ` bg-${mt}`;

	return (
		<div className="card flex flex-col">
			<div className="card__image relative">
				<img
					src={img}
					alt={title}
					className={`${mx} ${mt} ${w} ${mdMt} ${mdWidth}`}
				/>
			</div>
			<div className="card__details">
				<div className="card__details-header group flex  items-center">
					<Link href={url} legacyBehavior>
						<a target={"_blank"} rel={"noreferrer"}>
							<h3 className="text-xl text-gray-800 md:text-2xl">{title}</h3>
						</a>
					</Link>
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
				<p className="text-base text-gray-400 md:text-lg">{details}</p>
			</div>
		</div>
	);
}
