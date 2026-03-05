export default function SectionDivider() {
  return (
    <div className="w-full h-12 flex items-center justify-center overflow-hidden opacity-40">
      <svg
        width="100%"
        height="48"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="divGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
            <stop offset="20%" stopColor="#00E5FF" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#00E5FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.3" />
            <stop offset="80%" stopColor="#00E5FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Central bright fringe */}
        <rect x="0" y="22" width="1200" height="4" fill="url(#divGrad)" />
        {/* Side fringes */}
        <rect x="0" y="16" width="1200" height="1" fill="url(#divGrad)" opacity="0.4" />
        <rect x="0" y="31" width="1200" height="1" fill="url(#divGrad)" opacity="0.4" />
        <rect x="0" y="10" width="1200" height="1" fill="url(#divGrad)" opacity="0.2" />
        <rect x="0" y="37" width="1200" height="1" fill="url(#divGrad)" opacity="0.2" />
      </svg>
    </div>
  )
}
