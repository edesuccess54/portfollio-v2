import React from 'react'

interface TimeLineProp { 
    entry: ExperienceProps
}

const TimelineCard:React.FC<TimeLineProp> = ({entry}) => {
  return (
    <div className="flex-1 p-8.25 bg-background-alternate border border-border-white/5 rounded-xl p-5hover:border-yellow-600/30 hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[0.7rem] tracking-widest text-text-secondary uppercase font-medium">
          {entry.dateRange}
        </span>
        <span className="text-[0.68rem] tracking-widest text-text-subdued font-bold uppercase">
          {entry.location}
        </span>
      </div>
      <h3 className="font-playfair text-[24px] font-bold tracking-tight mb-1">{entry.title}</h3>
      <p className="text-[0.8rem] text-text-primary font-medium mb-3">{entry.company}</p>
      <ul className="space-y-1.5">
        {entry.bullets.map((b, i) => (
          <li key={i} className="text-sm text-text-subdued leading-relaxed pl-4 relative  before:content-['•'] before:absolute before:left-0 before:text-white/40 before:text-[0.6rem] before:top-[0.2em]">
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimelineCard