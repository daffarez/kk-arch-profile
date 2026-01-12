import Image from "next/image"
import bintaro1 from "@/static/images/about/bintaro/bintaro1.webp"
import bintaro2 from "@/static/images/about/bintaro/bintaro2.webp"
import bintaro3 from "@/static/images/about/bintaro/bintaro3.webp"
import cinere1 from "@/static/images/about/cinere/cinere1.webp"
import cinere2 from "@/static/images/about/cinere/cinere2.webp"
import cinere3 from "@/static/images/about/cinere/cinere3.webp"
import { aboutStyle } from "./style"
import { textData } from "@/static/text-data"

export const About = () => {
    console.log("test")
    return (
        <>
            <section className={aboutStyle.container}>
                <h2 className={aboutStyle.heading}>{textData.aboutPage.aboutUs.title}</h2>
                <p className={aboutStyle.text}>
                    {textData.aboutPage.aboutUs.description}
                </p>
            </section>
            <h2 className={`${aboutStyle.heading} mt-12 w-[80%] mx-auto text-center`}>{textData.aboutPage.aboutUs.bannerTitle}</h2>

            <h3 className="text-xl font-semibold text-center mb-4 mt-8">{textData.aboutPage.aboutUs.project1}</h3>
            <section className="w-[80%] mx-auto grid grid-cols-3 gap-4 mb-20">
                <div className="w-full">
                    <Image src={bintaro1} alt="Project Bintaro 1" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <Image src={bintaro2} alt="Project Bintaro 2" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <Image src={bintaro3} alt="Project Bintaro 3" className="w-full h-auto object-cover" />
                </div>
            </section>
            <h3 className="text-xl font-semibold text-center mb-4 mt-8">{textData.aboutPage.aboutUs.project2}</h3>
            <section className="w-[80%] mx-auto grid grid-cols-3 gap-4 mb-20">
                <div className="w-full">
                    <Image src={cinere1} alt="Project Cinere 1" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <Image src={cinere2} alt="Project Cinere 2" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <Image src={cinere3} alt="Project Cinere 3" className="w-full h-auto object-cover" />
                </div>
            </section>
        </>
    )
}

export default About