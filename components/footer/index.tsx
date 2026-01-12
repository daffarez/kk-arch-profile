import { footerStyle } from "./style"
import { textData } from "@/static/text-data"

const Footer = () => {
    return (
        <footer className={footerStyle.container}>
            <p className={footerStyle.text}>{textData.footer.text}</p>
        </footer>
    )
}

export default Footer