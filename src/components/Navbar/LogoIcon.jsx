export default function LogoIcon({ size = 38 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Background circle */}
      <circle cx="40" cy="40" r="40" fill="url(#logoGrad)" />

      {/* Neck */}
      <rect x="33" y="55" width="14" height="10" rx="4" fill="#FDBCB4" />

      {/* Shoulders / shirt */}
      <ellipse cx="40" cy="72" rx="22" ry="12" fill="#6c63ff" />

      {/* Head */}
      <ellipse cx="40" cy="36" rx="18" ry="20" fill="#FDBCB4" />

      {/* Hair */}
      <ellipse cx="40" cy="19" rx="18" ry="8" fill="#2d2d2d" />
      <rect x="22" y="17" width="36" height="10" rx="2" fill="#2d2d2d" />
      {/* Side hair */}
      <rect x="22" y="22" width="5" height="10" rx="3" fill="#2d2d2d" />
      <rect x="53" y="22" width="5" height="10" rx="3" fill="#2d2d2d" />

      {/* Left glasses frame */}
      <rect x="24" y="33" width="13" height="9" rx="4" stroke="#2d2d2d" strokeWidth="2" fill="rgba(108,99,255,0.18)" />
      {/* Right glasses frame */}
      <rect x="43" y="33" width="13" height="9" rx="4" stroke="#2d2d2d" strokeWidth="2" fill="rgba(108,99,255,0.18)" />
      {/* Bridge */}
      <line x1="37" y1="37.5" x2="43" y2="37.5" stroke="#2d2d2d" strokeWidth="2" />
      {/* Left arm */}
      <line x1="24" y1="37.5" x2="21" y2="37.5" stroke="#2d2d2d" strokeWidth="2" />
      {/* Right arm */}
      <line x1="56" y1="37.5" x2="59" y2="37.5" stroke="#2d2d2d" strokeWidth="2" />

      {/* Eyes (pupils) */}
      <circle cx="30.5" cy="37.5" r="2.5" fill="#2d2d2d" />
      <circle cx="49.5" cy="37.5" r="2.5" fill="#2d2d2d" />
      {/* Eye shine */}
      <circle cx="31.5" cy="36.5" r="0.8" fill="white" />
      <circle cx="50.5" cy="36.5" r="0.8" fill="white" />

      {/* Smile */}
      <path d="M 34 47 Q 40 52 46 47" stroke="#c0737a" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Ear left */}
      <ellipse cx="22.5" cy="37" rx="2.5" ry="3.5" fill="#FDBCB4" />
      {/* Ear right */}
      <ellipse cx="57.5" cy="37" rx="2.5" ry="3.5" fill="#FDBCB4" />

      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f0f1a" />
          <stop offset="100%" stopColor="#1a1040" />
        </linearGradient>
      </defs>
    </svg>
  );
}
