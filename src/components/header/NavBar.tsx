import { DividerIcon, DownloadIcon } from '@/src/constant'
import { navMenu } from './constant/menu'
import Link from 'next/link'

const NavBar: React.FC = () => {

  return (
    <header className='flex items-center justify-between px-16 py-4 border-b border-border-white/10'>
        <div className='flex gap-3 items-center'>
            <div className='bg-[#F5A524]/10 h-10 w-10 flex justify-center items-center'>
                <DividerIcon />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-sm font-bold leading-none'>FRONTEND ENGINEER</p>
                <span className='text-text-secondary text-[10px]'>Exceptional Problem Solver</span>
            </div>
        </div>
        <nav>
            <ul className="flex gap-6">
                {navMenu.map(({title, href}, index) =>(
                    <Link
                        key={`${title}-${index}`}
                        href={href}
                        className='text-base font-medium text-text-primary'
                    >
                    {title}
                    </Link>
                ))}
            </ul>
        </nav>

        <button className='w-41.25 h-8.5 flex items-center justify-center gap-[7.99px] text-text-secondary border border-border-default rounded-sm px-2 py-5 text-xs font-bold hover:bg-text-secondary transition-colors duration-300 cursor-pointer'>
            <span>DOWNLOAD CV</span>
            <DownloadIcon /> 
        </button>
    </header>
  )
}

export default NavBar