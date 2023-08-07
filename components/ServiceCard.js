import React from "react";
import Image from "next/image";

export default function ServiceCard({ icon, title, content }) {
	return (
		<div className="group">
			<div className="flex flex-col space-y-2 rounded-md py-4 md:p-4 md:group-hover:bg-gray-100 dark:md:group-hover:bg-slate-800">
				<Image
					src={icon}
					alt="coding languages icons"
					width={112}
					height={112}
					className="dark:hidden"
					// blurDataURL="data:..." automatically provided
					// placeholder="blur" // Optional blur-up while loading
				/>
				<h3 className="font-medium leading-8 dark:text-slate-300 md:text-xl 2xl:text-2xl">
					{title}
				</h3>
				<p className="text-lg">{content}</p>
			</div>
		</div>
	);
}
