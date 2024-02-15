import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	const p = router.asPath.slice(1);
	const canonicalURL = `https://pixelsbit.com/${p}`.split("?")[0];

	return (
		<ThemeProvider>
			<Head>
				<meta property="og:image" content="/og.jpg" />
				<link rel="canonical" href={canonicalURL} />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
