import { CypressIcon, GitHubIcon, GitIcon, JavaScriptIcon, NextJsIcon, ReactIcon, skills, TailWindCssIcon, TypeScriptIcon } from "@/src/constant"

const ExpertiseSection:React.FC = () => {

  return (
    <section className='my-32'>
        <div>
            <h3 className='text-text-white text-[48px] font-bold font-playfair'>Technical Toolkit</h3>
            <p className='text-base text-text-primary'>Precision instruments used to build modern digital foundations.</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 lg:justify-between mt-16'>
            <div className='lg:w-142 space-y-8'>
                {skills.map(({language, level, skills}, index) => (
                    <div key={`${language}-${index}`}>
                        <p className='flex justify-between items-center text-text-white'><span className='font-bold'>{language}</span> <span className='text-text-secondary'>{`${level}%`}</span></p>
                        <div className='h-1 w-full my-2 bg-background-white/5 overflow-hidden'>
                            <div style={{width: `${level}%`}} className='h-1 bg-background-brand'></div>
                        </div>
                        <p className='text-xs text-text-subdued'>{skills.join(', ')}</p>
                    </div>
                ))}
            </div>

            <div className="grow-0 grid grid-cols-3 lg:grid-cols-7 gap-5">
                <div>
                    <div className="flex justify-between items-center p-6 bg-background-alternate border border-border-white/5">
                        <ReactIcon />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center p-6 bg-background-alternate border border-border-white/5">
                        <NextJsIcon />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center p-6 bg-background-alternate border border-border-white/5">
                        <TypeScriptIcon />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center p-6 bg-background-alternate border border-border-white/5">
                        <JavaScriptIcon />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center p-6 bg-background-alternate border border-border-white/5">
                        <TailWindCssIcon />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center p-6 bg-background-alternate border border-border-white/5">
                        <GitIcon />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center p-6 bg-background-alternate border border-border-white/5">
                        <GitHubIcon />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center p-6 bg-background-alternate border border-border-white/5">
                        <CypressIcon />
                    </div>
                </div>


            </div>

        </div>
    </section>
  )
}

export default ExpertiseSection