import './globals.css'
import { Inter, Roboto_Mono, Lato } from 'next/font/google'
import { Nav } from '@/components/Nav'

export const roboto_mono = Roboto_Mono({
    subsets: ["latin-ext"],
    display: "swap",
    style: "italic",
});

export const lato = Lato({
    subsets: ["latin-ext"],
    display: "swap",
    weight: "400",
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CT Tip Out Calc',
  description: 'A Simple Tip Out Calculator for the Coppertail Breiwng Co. Taproom',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Nav />
        {children}
        </body>
    </html>
  )
}
