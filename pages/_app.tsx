import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

import type { AppProps } from "next/app";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className} bg-gray-50`}>
      <Head>
        <title>Kenny Karli Architect — Desain, Renovasi, Bangun</title>
        <meta
          name="description"
          content="A modern architectural studio specializing in innovative design, sustainable planning, and high-quality project execution."
        />
      </Head>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
