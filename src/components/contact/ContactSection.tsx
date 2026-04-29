import { Mail, MapPin } from 'lucide-react'
import ContactUsForm from './Form/Index'

const ContactSection:React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-between gap-8 mb-6.5'>
        <div>
            <h3 className='text-text-white text-5xl font-bold font-playfair'>Let&apos;s build the future</h3>
            <p className='mt-6 lg:w-[384px] text-lg text-text-primary'>Currently accepting new projects and open for collaboration on a new challenging projects</p>

            <ul className='flex flex-col gap-6 mt-12'>
                <li className='flex items-center gap-4'>
                    <Mail color='#F5A524' size={20} />
                    <span>edesuccess54@gmail.com</span>
                </li>

                <li className='flex items-center gap-4'>
                    <MapPin color='#F5A524' size={20} />
                    <span>Based in Nigeria / Remote Worldwide</span>
                </li>

            </ul>
        </div>

        <ContactUsForm />
    </section>
  )
}

export default ContactSection