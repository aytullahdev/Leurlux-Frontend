'use client'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { GlobalProvider } from '@/GlobalContext/GlobalContext';
import { Toaster } from 'sonner';
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Leurlux',
  description: 'Book everything with a single click.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth text-black" suppressHydrationWarning={true} >
      <head >
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2YLPKGGC00"></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-2YLPKGGC00');`
          }
        </Script>
        <meta name="google-site-verification" content="zkfttP5nNHSbmyk4n3VKXD5ByFO3XxhqfxY6AEkk5bE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />


      </head>
      <body id='top' className={`${inter.className} bg-white min-h-screen text-black`} >
        <div className='bg-white '>

          <Navbar />
        </div>
        <GlobalProvider>
          <div className=' pt-14 container mx-auto bg-white w-full min-h-screen text-black'>
            {children}

          </div>
        </GlobalProvider>

        <div className='text-black fixed bottom-2 right-2 z-50'>
          <WhatsAppWidget className="z-50" replyTimeText="Typically replies quickly." message="Hello,
How can we assist you?" phoneNumber="+46736700548" />
        </div>

        <Toaster richColors position='bottom-center' />

      </body>
    </html>
  )
}
