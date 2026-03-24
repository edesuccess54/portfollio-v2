import { DividerIcon } from '@/src/constant'

const Footer:React.FC = () => {
  return (
    <footer className='flex justify-between py-8 px-12 bg-background-alternate'>
        <div className='flex gap-3 items-center'>
            <div className='bg-[#F5A524]/10 h-8 w-8 flex justify-center items-center'>
                <DividerIcon />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-[10px] font-bold text-text-subdued'>EXPERIENCED FRONTEND ENGINEER</p>
            </div>
        </div>

        <p className='text-sm text-text-secondary mt-4'>© {new Date().getFullYear()} Success Ede. All rights reserved.</p>    
    </footer>
  )
}

export default Footer