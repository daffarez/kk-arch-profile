import { Hero } from "@/components/hero";
import Head from "next/head";
import Image from "next/image";
import { textData } from "@/static/text-data";
import instagramLogo from "@/static/images/instagram-logo.png";

export const Home = () => {
    return (
        <>
            <Head>
                <title>Kenny Karli Architect — Architectural Design & Planning</title>
                <meta
                    name="description"
                    content="A modern architectural studio specializing in innovative design, sustainable planning, and high-quality project execution."
                />
            </Head>
            <main className="min-h-screen">
                <Hero />
                <section className="px-6 py-24 bg-[#f9932d] text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black tracking-tight">
                            {textData.homePage.aboutSection.title}
                        </h2>

                        <p
                            className="text-black/90 max-w-2xl mx-auto text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: textData.homePage.aboutSection.description }}
                        />

                        <div className="flex justify-center mt-12">
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-sm text-black/70">
                                    {textData.homePage.aboutSection.ctaNote}
                                </span>

                                <a
                                    href={textData.homePage.contact.instagram.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-base font-medium px-7 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition shadow-sm"
                                >
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                        <Image
                                            src={instagramLogo}
                                            alt="Instagram"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span>
                                        {textData.homePage.contact.instagram.username}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-6 py-20" id="services">
                    <h2 className="text-3xl font-semibold text-center mb-12">Layanan Kami</h2>
                    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="p-6 border border-brand-200 rounded-2xl shadow-sm hover:border-brand-400 transition hover:shadow-md">
                            <h3 className="font-semibold text-xl mb-2 text-brand-700">Desain</h3>
                            <p className="text-gray-600">
                                Perencanaan arsitektur menyeluruh, mulai dari konsep, gambar kerja, hingga visualisasi desain yang fungsional dan estetis.
                            </p>
                        </div>
                        <div className="p-6 border border-brand-200 rounded-2xl shadow-sm hover:border-brand-400 transition hover:shadow-md">
                            <h3 className="font-semibold text-xl mb-2 text-brand-700">Renovasi</h3>
                            <p className="text-gray-600">
                                Penataan ulang dan peningkatan bangunan existing agar lebih nyaman, efisien, dan sesuai dengan kebutuhan penghuni.
                            </p>
                        </div>
                        <div className="p-6 border border-brand-200 rounded-2xl shadow-sm hover:border-brand-400 transition hover:shadow-md">
                            <h3 className="font-semibold text-xl mb-2 text-brand-700">Bangun</h3>
                            <p className="text-gray-600">
                                Pelaksanaan pembangunan dengan pengawasan arsitek untuk memastikan kualitas, ketepatan desain, dan hasil akhir yang optimal.
                            </p>
                        </div>
                    </div>
                </section>


            </main >
        </>
    );
}

export default Home