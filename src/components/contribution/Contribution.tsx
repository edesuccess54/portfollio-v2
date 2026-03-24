interface ContributionItem {
    title: string;
    value: string;
    description: string;
}

const Contribution:React.FC = () => {

    const contributions:ContributionItem[] = [
        {
            title: 'EXPERIENCE',
            value: '3+ Years',
            description: 'Passionate about creating exceptional user experiences through clean, efficient code.'
        },
        {
            title: 'DEPLOYMENT',
            value: '5+',
            description: 'Production applications scaled to millions of users.'
        },
        {
            title: 'COMMUNITY',
            value: 'OS Contributor',
            description: 'Core contributions to React and Next.js ecosystems.'
        }
    ]

  return (
    <section className="flex flex-col lg:flex-row gap-8 py-12 px-8">
        {contributions.map(({title, value, description}, index) => (
            <div key={`${title}-${index}`} className={`grow ${index < contributions.length - 1 ? 'border-r border-border-white/10 pr-10' : ''}`}>
                <div className="w-98.5">
                    <h4 className="text-xs text-text-subdued font-bold">{title.toUpperCase()}</h4>
                    <h1 className="font-playfair text-text-white font-bold text-[48px]">{value}</h1>
                    <p className="text-sm text-text-subdued">{description}</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Contribution