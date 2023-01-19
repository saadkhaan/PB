import Navbar from "./Navbar";
import Footer from "./Footer";

import { Inter } from "@next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

function Layout({ children }) {
	return (
		<div className={`${inter.variable} font-sans`}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
