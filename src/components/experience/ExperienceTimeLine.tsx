import { TimelineCard, TimeLineNode } from './components';
import { experiences } from '@/src/constant';

const ExperienceTimeLine = () => {
  return (
    <section className="text-[#f0ede8] py-12">
      <h1 className="font-serif text-5xl font-bold tracking-tight mb-1">Experience</h1>
      <p className="text-white/45 text-sm mb-12">A timeline of technical evolution and leadership.</p>

      {/* Timeline container */}
      <div className="relative  mx-auto">

        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-yellow-600/35 to-transparent" />

        {experiences.map((entry, i) => {
          const isRight = i % 2 === 0;
          return (
            <div key={i} className="flex items-start gap-6 mb-12">
              {/* Left side: spacer on even (right-aligned cards), card on odd */}
              {isRight ? (
                <>
                  <TimelineCard entry={entry} />
                  <TimeLineNode />
                  <div className="flex-1" />
                </>
              ) : (
                <>
                  <div className="flex-1" />
                  <TimeLineNode />
                  <TimelineCard entry={entry} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default ExperienceTimeLine