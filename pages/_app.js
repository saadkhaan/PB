import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	const p = router.asPath.slice(1);
	const canonicalURL = `https://example.com/${p}`.split("?")[0];

	return (
		<>
			<Head>
				<link rel="canonical" href={canonicalURL} />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
