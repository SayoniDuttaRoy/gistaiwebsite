import Banner from '@/components/Banner'
import ContactUs from '@/components/ContactUs'
import DemoVideo from '@/components/DemoVideo'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import FooterCta from '@/components/FooterCta'
import Navbar from '@/components/NavBar'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import SocialIcons from '@/components/SocialIcons'
import Testimonials from '@/components/Testimonials'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Gist AI - Free Web,YouTube,PDF Summarizer. Powered by ChatGPT.</title>
      <meta name="title" content="One extension to summarize everything - websites, YouTube videos and PDFs. Powered by ChatGPT." />
      <meta name="description" content="Gist AI is a free Chrome extension to summarize everything - websites, YouTube videos and PDFs. Powered by ChatGPT." />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="icon" href='/favicon.png' />
    </Head>
    <main className="font-bodyFont overflow-x-hidden overflow-y-scroll px-5">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className='hidden xl:inline-flex w-20 h-full fixed left-0 bottom-0'>
          <SocialIcons />
        </div>
        <div className='h-[88vh] mx-auto p-4'>
          <Banner />
          <div className="border-t border-gray-200 m-4"></div>
          <DemoVideo />
          <div className="border-t border-gray-200 m-4"></div>
          <Features />
          <div className="border-t border-gray-200 m-4"></div>
          <Faq />
          <div className="border-t border-gray-200 m-4"></div>
          <Testimonials />
          <div className="border-t border-gray-200 m-4"></div>
          <FooterCta />
          <ContactUs />
          <PrivacyPolicy />
          <div className="border-t border-gray-200 mt-[50px] mb-[50px]"></div>
          <Footer />
        </div>
      </div>
    </main>
    </>
  )
}
