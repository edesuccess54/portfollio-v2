const TimeLineNode:React.FC = () => {
  return (
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a1918] border border-yellow-600/30 flex items-center justify-center z-10 mt-3">
      <svg className="w-4 h-4 text-text-secondary" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    </div>
  )
}

export default TimeLineNode