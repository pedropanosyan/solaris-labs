import {ToastContainer} from "react-toastify";

export const metadata = {
    title: 'Solaris',
    description: 'Solaris Software',

}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Contact from '@/components/contact'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
    return (
        <>
            <Hero/>
            <Zigzag/>
            <Features/>
            <div className={'bg-gray-900'}>
                <Testimonials/>
                <Contact/>
            </div>
            <ToastContainer />
        </>
    )
}
