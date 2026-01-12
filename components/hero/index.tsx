import Image from "next/image"
import { heroStyle } from "./style"
import heroImage from "@/static/images/hero/Profile-WEB_KKARCH.webp"

export const Hero = () => {
    return (
        <section className={heroStyle.container}>
            <div className="relative h-full w-full">
                <Image
                    src={heroImage}
                    alt="Hero Banner"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}