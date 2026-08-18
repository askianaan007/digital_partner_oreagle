export function GrowthSceneFallback() {
  return (
    <div className="relative flex aspect-square w-full max-w-[600px] items-center justify-center">
      <div
        className="pointer-events-none absolute inset-0 rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 18%, transparent), transparent 75%)",
        }}
      />
      <svg
        viewBox="0 0 540 500"
        className="relative h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="mascotVisorGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f3e3bd" />
            <stop offset="60%" stopColor="#c9a455" />
            <stop offset="100%" stopColor="#7a5f2e" />
          </radialGradient>

          <linearGradient id="metalBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#252833" />
            <stop offset="100%" stopColor="#121318" />
          </linearGradient>

          <linearGradient id="storeBlock" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e202b" />
            <stop offset="100%" stopColor="#0f1015" />
          </linearGradient>

          <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Platform Shadow */}
        <ellipse cx="270" cy="410" rx="210" ry="28" fill="url(#floorShadow)" />

        {/* Base Platform */}
        <ellipse
          cx="270"
          cy="380"
          rx="195"
          ry="50"
          fill="url(#metalBg)"
          stroke="var(--accent)"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />

        {/* Circuit Ring */}
        <ellipse
          cx="270"
          cy="370"
          rx="175"
          ry="42"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.6"
          strokeWidth="1.8"
          strokeDasharray="6 4"
        />

        {/* 1. PHYSICAL BUSINESS (Client's Storefront - Left) */}
        <g transform="translate(140, 240)">
          {/* Main Store Building */}
          <rect
            x="-55"
            y="-65"
            width="110"
            height="115"
            rx="6"
            fill="url(#storeBlock)"
            stroke="var(--accent)"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          {/* Roof Trim */}
          <rect x="-60" y="-72" width="120" height="12" rx="3" fill="#151720" />
          
          {/* Store Entrance Door (Illuminated Gold) */}
          <rect
            x="-20"
            y="-10"
            width="40"
            height="60"
            rx="3"
            fill="#c9a455"
            opacity="0.9"
            filter="url(#goldGlow)"
          />

          {/* Signboard Bar */}
          <rect x="-35" y="-52" width="70" height="16" rx="3" fill="#0d0e12" stroke="#ffffff22" />
          <text
            x="0"
            y="-40"
            fill="#f3e3bd"
            fontSize="9"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            PHYSICAL STORE
          </text>
        </g>

        {/* 2. LOCAL SEO MAP PIN (Above Building) */}
        <g transform="translate(140, 120)">
          <path
            d="M 0 -24 C -14 -24 -22 -12 -22 0 C -22 16 0 34 0 34 C 0 34 22 16 22 0 C 22 -12 14 -24 0 -24 Z"
            fill="#c9a455"
            filter="url(#goldGlow)"
          />
          <circle cx="0" cy="-4" r="8" fill="#0d0e12" />
          {/* Search Radar Circles */}
          <ellipse cx="0" cy="38" rx="28" ry="8" fill="none" stroke="#f3e3bd" strokeOpacity="0.6" strokeWidth="1" />
        </g>

        {/* 3. OREAGLE MASCOT (Center-Right) */}
        <g transform="translate(380, 210)">
          {/* Mascot Orbital Ring */}
          <ellipse
            cx="0"
            cy="0"
            rx="56"
            ry="20"
            fill="none"
            stroke="var(--accent)"
            strokeOpacity="0.85"
            strokeWidth="2"
            transform="rotate(-12)"
          />
          {/* Head */}
          <circle cx="0" cy="0" r="36" fill="url(#metalBg)" stroke="#ffffff22" strokeWidth="1" />
          {/* Visor */}
          <path
            d="M -24 -4 Q 0 -14 24 -4 Q 26 10 0 12 Q -26 10 -24 -4 Z"
            fill="url(#mascotVisorGrad)"
            filter="url(#goldGlow)"
          />
          {/* Torso */}
          <path
            d="M -18 38 L 18 38 L 12 72 L -12 72 Z"
            fill="url(#metalBg)"
            stroke="var(--accent)"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          {/* Label */}
          <text
            x="0"
            y="92"
            fill="#c9a455"
            fontSize="10"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="sans-serif"
            letterSpacing="1"
          >
            OREAGLE
          </text>
        </g>

        {/* 4. DIGITAL PRESENCE WEBSITE HOLOGRAM PANEL (Center) */}
        <g transform="translate(260, 190)">
          <rect
            x="-45"
            y="-30"
            width="90"
            height="60"
            rx="4"
            fill="#c9a455"
            fillOpacity="0.15"
            stroke="#f3e3bd"
            strokeOpacity="0.7"
            strokeWidth="1.2"
          />
          <line x1="-35" y1="-18" x2="35" y2="-18" stroke="#f3e3bd" strokeWidth="2" opacity="0.8" />
          <rect x="-35" y="-8" width="40" height="15" rx="2" fill="#c9a455" opacity="0.5" />
          <rect x="12" y="-8" width="23" height="15" rx="2" fill="#c9a455" opacity="0.3" />
        </g>

        {/* 5. INCOMING CUSTOMER LEAD TRAFFIC ARCS */}
        <path
          d="M 440 140 Q 270 100 155 190"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <circle cx="360" cy="122" r="5" fill="#f3e3bd" filter="url(#goldGlow)" />
        <circle cx="260" cy="132" r="5" fill="#f3e3bd" filter="url(#goldGlow)" />
        <circle cx="190" cy="160" r="5" fill="#f3e3bd" filter="url(#goldGlow)" />

        {/* 6. REVENUE GROWTH PILLAR (Right) */}
        <g transform="translate(470, 270)">
          <rect
            x="-14"
            y="-40"
            width="28"
            height="80"
            rx="3"
            fill="url(#storeBlock)"
            stroke="var(--accent)"
            strokeOpacity="0.5"
          />
          <rect
            x="-16"
            y="-48"
            width="32"
            height="10"
            rx="2"
            fill="#f3e3bd"
            filter="url(#goldGlow)"
          />
          <text
            x="0"
            y="56"
            fill="#f3e3bd"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            GROWTH
          </text>
        </g>
      </svg>
    </div>
  );
}
