import Link from "next/link";
import Image from "next/image";
import { headerStyles } from "./style";
import logoImage from "@/static/images/header/KKARCH-LOGO_Primary.webp";
import { textData } from "@/static/text-data";

const Header = () => {
    return (
        <nav className={headerStyles.container}>
            <div className={headerStyles.inner}>
                <Link href="/" className={headerStyles.brand}>
                    <Image
                        src={logoImage}
                        alt="Kenny Karli Architect"
                        className="h-12 w-auto object-contain"
                        height={48}
                    />
                </Link>

                <div className={headerStyles.menu}>
                    <Link href="/" className={headerStyles.menuItem}>{textData.header.beranda.text}</Link>
                    <Link href="/about" className={headerStyles.menuItem}>{textData.header.tentangKami.text}</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
