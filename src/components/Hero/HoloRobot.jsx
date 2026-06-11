import { motion } from 'framer-motion';
import './HoloRobot.css';

export default function HoloRobot() {
  return (
    <div className="holo-wrap">

      {/* ── Outer orbit rings ── */}
      <div className="orbit orbit-1">
        <div className="orbit-dot" />
        <div className="orbit-dot od2" />
      </div>
      <div className="orbit orbit-2">
        <div className="orbit-dot od3" />
      </div>
      <div className="orbit orbit-3">
        <div className="orbit-dot od4" />
        <div className="orbit-dot od5" />
        <div className="orbit-dot od6" />
      </div>

      {/* ── Floating HUD panels ── */}
      <motion.div className="hud-panel hud-left"
        animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="hud-line" /><div className="hud-line hw60" /><div className="hud-line hw40" />
        <div className="hud-badge">SYS OK</div>
      </motion.div>

      <motion.div className="hud-panel hud-right"
        animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
        <div className="hud-stat"><span className="hud-label">CPU</span><div className="hud-bar"><div className="hud-fill" style={{width:'82%'}}/></div></div>
        <div className="hud-stat"><span className="hud-label">PWR</span><div className="hud-bar"><div className="hud-fill hf2" style={{width:'95%'}}/></div></div>
        <div className="hud-stat"><span className="hud-label">AI</span><div className="hud-bar"><div className="hud-fill hf3" style={{width:'67%'}}/></div></div>
      </motion.div>

      {/* ── Robot body ── */}
      <motion.div
        className="robot-body"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 200 320" className="robot-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#00f5ff" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.85"/>
            </linearGradient>
            <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#a855f7" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.8"/>
            </linearGradient>
            <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00f5ff" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2"/>
            </linearGradient>
            <linearGradient id="eyeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#00f5ff"/>
              <stop offset="100%" stopColor="#a855f7"/>
            </linearGradient>
            <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#fff"    stopOpacity="1"/>
              <stop offset="40%"  stopColor="#00f5ff" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="baseGrad" cx="50%" cy="30%" r="70%">
              <stop offset="0%"   stopColor="#00f5ff" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
            </radialGradient>

            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="bigglow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="8" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="eyeGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>

            {/* Circuit pattern */}
            <pattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 H8 M12 10 H20 M10 0 V8 M10 12 V20" stroke="rgba(0,245,255,0.15)" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="1.5" fill="rgba(0,245,255,0.2)"/>
            </pattern>
            <pattern id="scan" width="200" height="3" patternUnits="userSpaceOnUse">
              <rect width="200" height="1" fill="rgba(0,245,255,0.06)"/>
            </pattern>
          </defs>

          {/* ── Holographic base platform ── */}
          <ellipse cx="100" cy="312" rx="58" ry="10" fill="url(#baseGrad)" filter="url(#bigglow)" className="r-base"/>
          <ellipse cx="100" cy="312" rx="40" ry="6" fill="rgba(0,245,255,0.2)" filter="url(#bigglow)"/>
          {/* Platform rings */}
          <ellipse cx="100" cy="312" rx="58" ry="10" stroke="url(#g1)" strokeWidth="0.8" fill="none" opacity="0.6"/>
          <ellipse cx="100" cy="312" rx="46" ry="7"  stroke="url(#g1)" strokeWidth="0.5" fill="none" opacity="0.4"/>

          {/* ── Legs ── */}
          <rect x="64" y="228" width="28" height="72" rx="10" fill="url(#g3)" stroke="url(#g1)" strokeWidth="1.5" filter="url(#glow)"/>
          <rect x="108" y="228" width="28" height="72" rx="10" fill="url(#g3)" stroke="url(#g2)" strokeWidth="1.5" filter="url(#glow)"/>
          {/* Knee joints */}
          <circle cx="78" cy="264" r="7" fill="rgba(0,245,255,0.15)" stroke="url(#g1)" strokeWidth="1.2" filter="url(#glow)"/>
          <circle cx="122" cy="264" r="7" fill="rgba(168,85,247,0.15)" stroke="url(#g2)" strokeWidth="1.2" filter="url(#glow)"/>
          <circle cx="78"  cy="264" r="3" fill="#00f5ff" opacity="0.8" filter="url(#glow)"/>
          <circle cx="122" cy="264" r="3" fill="#a855f7" opacity="0.8" filter="url(#glow)"/>
          {/* Leg circuit detail */}
          <rect x="64" y="228" width="28" height="72" rx="10" fill="url(#circuit)" opacity="0.6"/>
          <rect x="108" y="228" width="28" height="72" rx="10" fill="url(#circuit)" opacity="0.6"/>
          {/* Feet */}
          <rect x="56"  y="294" width="44" height="14" rx="8" fill="rgba(0,245,255,0.08)" stroke="url(#g1)" strokeWidth="1.5" filter="url(#glow)"/>
          <rect x="100" y="294" width="44" height="14" rx="8" fill="rgba(168,85,247,0.08)" stroke="url(#g2)" strokeWidth="1.5" filter="url(#glow)"/>

          {/* ── Torso ── */}
          <rect x="50" y="140" width="100" height="94" rx="18" fill="rgba(0,245,255,0.04)" stroke="url(#g1)" strokeWidth="2" filter="url(#glow)"/>
          {/* Torso circuit fill */}
          <rect x="50" y="140" width="100" height="94" rx="18" fill="url(#circuit)" opacity="0.5"/>
          {/* Chest panel hex */}
          <polygon points="100,155 116,164 116,182 100,191 84,182 84,164"
            fill="rgba(0,245,255,0.07)" stroke="url(#eyeGrad)" strokeWidth="1.2" filter="url(#glow)"/>
          {/* Energy core */}
          <circle cx="100" cy="173" r="18" fill="none" stroke="url(#g1)" strokeWidth="1" opacity="0.4" filter="url(#glow)" className="core-ring-1"/>
          <circle cx="100" cy="173" r="13" fill="none" stroke="url(#g2)" strokeWidth="1" opacity="0.6" filter="url(#glow)" className="core-ring-2"/>
          <circle cx="100" cy="173" r="8"  fill="url(#coreGrad)" filter="url(#bigglow)" className="core-orb"/>
          <circle cx="100" cy="173" r="4"  fill="#fff" opacity="0.95"/>
          {/* Side vents */}
          {[0,1,2,3].map(i=>(
            <rect key={i} x="54" y={151+i*10} width="10" height="5" rx="2"
              fill="rgba(0,245,255,0.2)" stroke="url(#g1)" strokeWidth="0.8" opacity="0.7"/>
          ))}
          {[0,1,2,3].map(i=>(
            <rect key={i} x="136" y={151+i*10} width="10" height="5" rx="2"
              fill="rgba(168,85,247,0.2)" stroke="url(#g2)" strokeWidth="0.8" opacity="0.7"/>
          ))}
          {/* Belt */}
          <rect x="50" y="222" width="100" height="14" rx="6" fill="rgba(0,245,255,0.06)" stroke="url(#g1)" strokeWidth="1.2"/>
          <polygon points="100,224 107,229 100,234 93,229" fill="url(#eyeGrad)" opacity="0.8" filter="url(#glow)"/>

          {/* ── Arms ── */}
          {/* Left */}
          <rect x="18" y="148" width="30" height="78" rx="12" fill="rgba(0,245,255,0.05)" stroke="url(#g1)" strokeWidth="1.8" filter="url(#glow)"/>
          <rect x="18" y="148" width="30" height="78" rx="12" fill="url(#circuit)" opacity="0.5"/>
          <circle cx="33" cy="188" r="8" fill="rgba(0,245,255,0.1)" stroke="url(#g1)" strokeWidth="1" filter="url(#glow)"/>
          <circle cx="33" cy="188" r="3.5" fill="#00f5ff" opacity="0.7" className="arm-orb" filter="url(#glow)"/>
          {/* Left hand */}
          <rect x="12" y="220" width="40" height="20" rx="9" fill="rgba(0,245,255,0.07)" stroke="url(#g1)" strokeWidth="1.5" filter="url(#glow)"/>
          <circle cx="32" cy="230" r="4" fill="url(#g1)" opacity="0.6" filter="url(#glow)"/>

          {/* Right */}
          <rect x="152" y="148" width="30" height="78" rx="12" fill="rgba(168,85,247,0.05)" stroke="url(#g2)" strokeWidth="1.8" filter="url(#glow)"/>
          <rect x="152" y="148" width="30" height="78" rx="12" fill="url(#circuit)" opacity="0.5"/>
          <circle cx="167" cy="188" r="8" fill="rgba(168,85,247,0.1)" stroke="url(#g2)" strokeWidth="1" filter="url(#glow)"/>
          <circle cx="167" cy="188" r="3.5" fill="#a855f7" opacity="0.7" className="arm-orb" filter="url(#glow)"/>
          {/* Right hand */}
          <rect x="148" y="220" width="40" height="20" rx="9" fill="rgba(168,85,247,0.07)" stroke="url(#g2)" strokeWidth="1.5" filter="url(#glow)"/>
          <circle cx="168" cy="230" r="4" fill="url(#g2)" opacity="0.6" filter="url(#glow)"/>

          {/* ── Shoulder pads ── */}
          <path d="M50 150 Q34 142 18 148" stroke="url(#g1)" strokeWidth="2" fill="none" filter="url(#glow)"/>
          <path d="M150 150 Q166 142 182 148" stroke="url(#g2)" strokeWidth="2" fill="none" filter="url(#glow)"/>
          <circle cx="34" cy="144" r="5" fill="url(#g1)" opacity="0.7" filter="url(#glow)"/>
          <circle cx="166" cy="144" r="5" fill="url(#g2)" opacity="0.7" filter="url(#glow)"/>

          {/* ── Neck ── */}
          <rect x="84" y="124" width="32" height="20" rx="7" fill="rgba(0,245,255,0.06)" stroke="url(#g1)" strokeWidth="1.5" filter="url(#glow)"/>
          <line x1="91" y1="128" x2="91" y2="140" stroke="#00f5ff" strokeWidth="1" opacity="0.4"/>
          <line x1="100" y1="126" x2="100" y2="140" stroke="url(#eyeGrad)" strokeWidth="1.2" opacity="0.5"/>
          <line x1="109" y1="128" x2="109" y2="140" stroke="#a855f7" strokeWidth="1" opacity="0.4"/>

          {/* ── Head ── */}
          <rect x="46" y="44" width="108" height="84" rx="24" fill="rgba(0,10,30,0.5)" stroke="url(#g1)" strokeWidth="2" filter="url(#glow)"/>
          <rect x="46" y="44" width="108" height="84" rx="24" fill="url(#circuit)" opacity="0.4"/>
          {/* Head top visor band */}
          <rect x="46" y="44" width="108" height="22" rx="24" fill="rgba(0,245,255,0.08)" stroke="url(#g1)" strokeWidth="1" opacity="0.6"/>
          <line x1="46" y1="66" x2="154" y2="66" stroke="url(#g1)" strokeWidth="0.8" opacity="0.4"/>

          {/* Antenna */}
          <line x1="100" y1="44" x2="100" y2="16" stroke="url(#g1)" strokeWidth="2" filter="url(#glow)"/>
          <circle cx="100" cy="10" r="8" fill="rgba(0,245,255,0.1)" stroke="url(#g1)" strokeWidth="1.5" filter="url(#bigglow)" className="antenna-ring"/>
          <circle cx="100" cy="10" r="4"  fill="#00f5ff" opacity="0.9" filter="url(#eyeGlow)" className="antenna-dot"/>
          {/* Side antennas */}
          <line x1="56"  y1="58" x2="42"  y2="42" stroke="url(#g1)" strokeWidth="1.2" opacity="0.5" filter="url(#glow)"/>
          <line x1="144" y1="58" x2="158" y2="42" stroke="url(#g2)" strokeWidth="1.2" opacity="0.5" filter="url(#glow)"/>
          <circle cx="40"  cy="40" r="3.5" fill="#00f5ff" opacity="0.8" filter="url(#glow)" className="antenna-dot"/>
          <circle cx="160" cy="40" r="3.5" fill="#a855f7" opacity="0.8" filter="url(#glow)" className="antenna-dot"/>

          {/* Ear panels */}
          <rect x="30" y="64" width="18" height="38" rx="8" fill="rgba(0,245,255,0.05)" stroke="url(#g1)" strokeWidth="1.5" filter="url(#glow)"/>
          <rect x="152" y="64" width="18" height="38" rx="8" fill="rgba(168,85,247,0.05)" stroke="url(#g2)" strokeWidth="1.5" filter="url(#glow)"/>
          <circle cx="39" cy="83" r="5" fill="url(#g1)" opacity="0.5" className="ear-orb" filter="url(#glow)"/>
          <circle cx="161" cy="83" r="5" fill="url(#g2)" opacity="0.5" className="ear-orb" filter="url(#glow)"/>

          {/* ── Eyes ── */}
          {/* Left eye */}
          <rect x="58" y="70" width="34" height="20" rx="8" fill="rgba(0,5,20,0.7)" stroke="url(#eyeGrad)" strokeWidth="1.5" filter="url(#glow)"/>
          <rect x="60" y="72" width="30" height="16" rx="6" fill="rgba(0,245,255,0.06)"/>
          <ellipse cx="75" cy="80" rx="11" ry="7" fill="url(#g1)" opacity="0.75" filter="url(#eyeGlow)" className="eye-glow"/>
          <ellipse cx="75" cy="80" rx="6"  ry="4"  fill="#00f5ff" opacity="0.95" className="eye-inner"/>
          <circle  cx="75" cy="80" r="2.5" fill="#fff" opacity="1"/>
          <circle  cx="78" cy="77" r="1"   fill="#fff" opacity="0.7"/>

          {/* Right eye */}
          <rect x="108" y="70" width="34" height="20" rx="8" fill="rgba(0,5,20,0.7)" stroke="url(#eyeGrad)" strokeWidth="1.5" filter="url(#glow)"/>
          <rect x="110" y="72" width="30" height="16" rx="6" fill="rgba(168,85,247,0.06)"/>
          <ellipse cx="125" cy="80" rx="11" ry="7" fill="url(#g2)" opacity="0.75" filter="url(#eyeGlow)" className="eye-glow eye-glow-r"/>
          <ellipse cx="125" cy="80" rx="6"  ry="4"  fill="#a855f7" opacity="0.95" className="eye-inner eye-inner-r"/>
          <circle  cx="125" cy="80" r="2.5" fill="#fff" opacity="1"/>
          <circle  cx="128" cy="77" r="1"   fill="#fff" opacity="0.7"/>

          {/* Eye laser beams — subtle */}
          <line x1="75" y1="80" x2="40" y2="115" stroke="#00f5ff" strokeWidth="0.8" opacity="0.25" className="laser-l"/>
          <line x1="125" y1="80" x2="160" y2="115" stroke="#a855f7" strokeWidth="0.8" opacity="0.25" className="laser-r"/>

          {/* ── Mouth / grill ── */}
          <rect x="68" y="100" width="64" height="18" rx="6" fill="rgba(0,245,255,0.04)" stroke="url(#g1)" strokeWidth="1"/>
          {[76,84,92,100,108,116,122].map((x,i)=>(
            <rect key={i} x={x} y="104" width="4" height="10" rx="2"
              fill={i%2===0?'#00f5ff':'#a855f7'} opacity="0.55"
              className="grill-bar" style={{'--i':i}}/>
          ))}

          {/* Scan overlay */}
          <rect x="30" y="10" width="140" height="308" fill="url(#scan)" opacity="0.8" style={{pointerEvents:'none'}}/>
        </svg>

        {/* Eye laser rays (DOM elements for CSS anim) */}
        <div className="eye-ray ray-l"/>
        <div className="eye-ray ray-r"/>
      </motion.div>

      {/* ── Floating particles ── */}
      {[...Array(12)].map((_,i)=>(
        <div key={i} className="particle" style={{'--i':i}}/>
      ))}

      {/* ── Ground projection grid ── */}
      <div className="ground-grid"/>
    </div>
  );
}
