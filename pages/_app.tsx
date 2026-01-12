import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

import type { AppProps } from 'next/app'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${poppins.className} font-sans`}>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    )
}
