import { serviceCardStyle } from "./style"

interface ServiceCardProps {
    title: string
    desc: string
}

const ServiceCard = ({ title, desc }: ServiceCardProps) => {
    return (
        <div className={serviceCardStyle.container}>
            <h3 className={serviceCardStyle.title}>{title}</h3>
            <p className={serviceCardStyle.desc}>{desc}</p>
        </div>
    )
}

export default ServiceCard