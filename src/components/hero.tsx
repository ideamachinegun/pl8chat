'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import localFont from 'next/font/local'
import Modal from './modal'
import MailingListSubForm from './mailingListSubForm'
import Contact from './contactForm'

const barlow = localFont({
  src: "../app/fonts/Barlow-Medium.woff",
  variable: "--font-barlow-medium",
  weight: "100 900",
})

export default function Hero({ }) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className={`bg-darkGreen pl-5 pt-10 lg:pt-12 lg:pl-10`}>
        <div className="pb-16 pt-32 sm:pb-32 sm:pt-24 md:pb-12 md:pt-[118px] text-tGreen">
          <h1 className={`font-display text-balance font-medium tracking-tight text-tGreen text-6xl xs: sm:text-[7.5rem] max-w-[10ch] sm:max-w-none`}>
            Sma<span className='tracking-[.2rem]'>rt</span> and <br /> Social Parking
          </h1>
          <h2 className="mt-7 max-w-[37ch] text-lg/7 font-medium sm:text-3xl/8">
            PL8CHAT is a new line of communication
            connecting people, vehicles and parking
            communities through license plates.
          </h2>
          <div
            className="mt-9 lg:mt-11 inline-block"
            onClick={() => setModalOpen(true)}
          >
            <Button href="#" className='-translate-y-1 text-pl8Green'>Talk to sales</Button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} component={<Contact isModal={true} />} onClose={() => setModalOpen(false)} />
    </div>
  )
} 