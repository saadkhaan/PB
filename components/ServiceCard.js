import React from "react";
import Image from "next/image";

export default function ServiceCard({ icon, title, content }) {
	return (
		<div className="group">
			<div className="flex flex-col space-y-2 rounded-md py-4 md:p-4 md:group-hover:bg-green-100">
				<Image
					src={icon}
					alt="coding languages icons"
					width={112}
					height={112}
					// blurDataURL="data:..." automatically provided
					// placeholder="blur" // Optional blur-up while loading
				/>
				<h3 className="font-medium leading-8 text-gray-900 md:text-xl  2xl:text-2xl">
					{title}
				</h3>
				<p className="font-light text-gray-800 md:text-lg ">{content}</p>
			</div>
		</div>
	);
}
